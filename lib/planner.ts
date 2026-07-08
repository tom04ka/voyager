import type { Itinerary } from "@/lib/types";

/**
 * What the /plan form collects and sends to the server. These raw choices get
 * turned into the "user prompt" — the specific request for one trip.
 */
export interface PlannerInput {
  destination: string;
  length: string; // e.g. "A week"
  travelers: string; // e.g. "Two of us"
  budget: string; // "Easygoing" | "Mid-range" | "Special"
  interests: string[]; // e.g. ["Food & drink", "Nature & hikes"]
}

/**
 * ── STRUCTURED OUTPUT ───────────────────────────────────────────────────────
 * This JSON Schema describes the EXACT shape we want back. We pass it to the
 * API, and Claude's response is guaranteed to match it — so it slots straight
 * into the `Itinerary` type and the /itinerary UI with no guesswork.
 *
 * Schema rules to know: every object needs `additionalProperties: false` (no
 * surprise fields) and a `required` list naming all its properties.
 */
export const ITINERARY_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["destination", "summary", "travelers", "budget", "days"],
  properties: {
    destination: { type: "string" },
    summary: { type: "string" },
    travelers: { type: "integer" },
    budget: { type: "string" },
    days: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["day", "title", "activities"],
        properties: {
          day: { type: "integer" },
          title: { type: "string" },
          activities: {
            type: "array",
            items: {
              type: "object",
              additionalProperties: false,
              required: ["time", "title", "description", "icon"],
              properties: {
                time: { type: "string" }, // e.g. "9:30"
                title: { type: "string" },
                description: { type: "string" },
                icon: { type: "string" }, // a single emoji
              },
            },
          },
        },
      },
    },
  },
} as const;

/**
 * ── SYSTEM PROMPT ───────────────────────────────────────────────────────────
 * The standing "job description" sent on every request. Read it closely — it's
 * a complete example of the habits that make a prompt work:
 *   • Give the model a clear ROLE (sets tone and judgment).
 *   • State CONSTRAINTS concretely — "Easygoing means free/cheap" beats "be
 *     mindful of budget", which the model can't act on precisely.
 *   • Describe the QUALITIES of a good answer, not just the task.
 *   • Leave the OUTPUT FORMAT out of the prose — the JSON schema handles that,
 *     so we don't waste words (or risk contradicting it) here.
 */
export const SYSTEM_PROMPT = `You are Voyager, a thoughtful travel planner who designs calm, realistic, day-by-day itineraries.

Principles for every itinerary you create:
- Match the traveler's stated pace and budget. "Easygoing" means free and cheap activities and simple food; "Mid-range" means a comfortable mix; "Special" means a few standout splurges.
- Only use real, verifiable locations and activities. Do not invent places or experiences.
- Build days that flow geographically — group nearby things together instead of zig-zagging across a city.
- Balance famous must-sees with quieter local spots. Leave breathing room; do not cram every hour.
- Weave in the traveler's interests naturally rather than forcing all of them into every day.
- Keep each activity description short, warm, and concrete (a specific dish, a specific viewpoint) — never generic filler.
- Choose one fitting emoji per activity as its icon.
- For short trips, plan every day. For long trips (two weeks or more), plan a representative first 7 days and say so in the summary.`;

/**
 * ── USER PROMPT (your turn) ──────────────────────────────────────────────────
 * TODO(human): build the specific request for ONE trip from `input`.
 *
 * The SYSTEM_PROMPT above is your worked example — study how it's phrased, then
 * write the *specific* half here. Return a single string that:
 *   1. States each field with a clear label, so nothing is ambiguous. e.g.
 *        Destination: <input.destination>
 *        Trip length: <input.length>
 *        Travelers: <input.travelers>
 *        Budget: <input.budget>
 *   2. Turns the `interests` array into readable text (join with commas), and
 *      handles the empty case gracefully (e.g. "no particular focus").
 *   3. Ends with a clear instruction telling Claude to produce the itinerary,
 *      and to echo the destination / travelers / budget back in its response.
 *
 * A JS template literal (backticks) with ${'${input.destination}'} interpolation
 * is the natural tool. Try a first version, then once it works, tweak a line and
 * re-run to SEE how the itinerary changes — that feedback loop IS the skill.
 */

export function buildUserPrompt(input: PlannerInput): string {
  // Turn the interests array into readable text, with a graceful empty case.
  const interests =
    input.interests.length > 0
      ? input.interests.join(", ")
      : "no particular focus, so default to a balanced mix of sightseeing, food, and local culture";

  return `Destination: ${input.destination}
Trip length: ${input.length}
Travelers: ${input.travelers}
Budget: ${input.budget}
Interests: ${interests}

Please create a detailed day-by-day itinerary for this trip, following the principles in your instructions. Echo back the destination, travelers, and budget in your response.`;
}

export type { Itinerary };
