import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Plan a trip · Voyager",
  description: "Tell Voyager about your trip and get a personalized itinerary.",
};

const interests = [
  "Food & drink",
  "Nature & hikes",
  "Art & museums",
  "Nightlife",
  "Beaches",
  "History",
  "Shopping",
  "Off the beaten path",
];

export default function PlanPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Let's shape your trip
        </h1>
        <p className="mt-3 text-lg text-muted">
          A few quick questions - Voyager handles the rest. (This is a mocked
          preview; nothing is saved yet.)
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <Field label="Where to?">
            <input
              type="text"
              placeholder="e.g. Lisbon, Portugal"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-brand focus:outline-none"
            />
          </Field>

          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Trip length">
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-brand focus:outline-none">
                <option>Weekend (2–3 days)</option>
                <option>A week</option>
                <option>Two weeks</option>
                <option>A month+</option>
              </select>
            </Field>
            <Field label="Travelers">
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-brand focus:outline-none">
                <option>Just me</option>
                <option>Two of us</option>
                <option>Family</option>
                <option>Group of friends</option>
              </select>
            </Field>
          </div>

          <Field label="Budget">
            <div className="grid grid-cols-3 gap-3">
              {["Easygoing", "Mid-range", "Special"].map((b) => (
                <label
                  key={b}
                  className="cursor-pointer rounded-xl border border-border bg-background px-4 py-3 text-center text-sm transition-colors hover:border-brand"
                >
                  {b}
                </label>
              ))}
            </div>
          </Field>

          <Field label="What are you into?">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="cursor-pointer rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-brand hover:text-brand"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Field>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <ButtonLink href="/itinerary" size="lg">
              Generate my itinerary
            </ButtonLink>
            <ButtonLink href="/" size="lg" variant="ghost">
              Back home
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
