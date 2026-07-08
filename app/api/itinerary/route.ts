import Anthropic from "@anthropic-ai/sdk";
import {
  ITINERARY_SCHEMA,
  SYSTEM_PROMPT,
  buildUserPrompt,
  type Itinerary,
  type PlannerInput,
} from "@/lib/planner";

// `new Anthropic()` automatically reads ANTHROPIC_API_KEY from the environment
// (.env.local in dev, Vercel env vars in prod). This file runs ONLY on the
// server, so the key is never sent to the browser.
const anthropic = new Anthropic();

// POST /api/itinerary   body: PlannerInput   →   Itinerary (JSON)
export async function POST(request: Request) {
  // 1. Read and sanity-check the form data the browser sent us.
  let input: PlannerInput;
  try {
    input = (await request.json()) as PlannerInput;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!input.destination?.trim()) {
    return Response.json(
      { error: "Please tell us where you'd like to go." },
      { status: 400 },
    );
  }

  try {
    // 2. THE actual AI call: system prompt (standing rules) + user prompt
    //    (this trip), with the schema constraining the reply to our shape.
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(input) }],
      output_config: {
        format: { type: "json_schema", schema: ITINERARY_SCHEMA },
      },
    });

    // 3. With a JSON-schema format, the JSON comes back as the text of a text
    //    block. Parse it into our typed Itinerary and hand it to the client.
    const text = message.content.find((b) => b.type === "text")?.text;
    if (!text) {
      return Response.json(
        { error: "The planner returned nothing. Please try again." },
        { status: 502 },
      );
    }
    const itinerary = JSON.parse(text) as Itinerary;
    return Response.json(itinerary);
  } catch (error) {
    // 4. Turn SDK errors into friendly messages (most specific first).
    if (error instanceof Anthropic.RateLimitError) {
      return Response.json(
        { error: "We're a little busy — try again in a moment." },
        { status: 429 },
      );
    }
    if (error instanceof Anthropic.APIError) {
      console.error("Anthropic API error:", error.status, error.message);
      return Response.json(
        { error: "Couldn't reach the planner. Please try again." },
        { status: 502 },
      );
    }
    console.error("Itinerary generation failed:", error);
    return Response.json(
      { error: "Something went wrong generating your itinerary." },
      { status: 500 },
    );
  }
}
