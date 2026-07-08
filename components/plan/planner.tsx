"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ItineraryView } from "@/components/itinerary/itinerary-view";
import { cn } from "@/lib/utils";
import type { PlannerInput } from "@/lib/planner";
import type { Itinerary } from "@/lib/types";

const LENGTHS = ["A weekend", "A week", "Two weeks", "A month+"];
const TRAVELERS = ["Just me", "Two of us", "Family", "A group of friends"];
const BUDGETS = ["Easygoing", "Mid-range", "Special"];
const INTERESTS = [
  "Food & drink",
  "Nature & hikes",
  "Art & museums",
  "Nightlife",
  "Beaches",
  "History",
  "Shopping",
  "Off the beaten path",
];

export function Planner() {
  // One piece of state per form field...
  const [destination, setDestination] = useState("");
  const [length, setLength] = useState(LENGTHS[1]);
  const [travelers, setTravelers] = useState(TRAVELERS[1]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [interests, setInterests] = useState<string[]>([]);
  // ...plus request state: are we waiting, did it fail, and the result.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trip, setTrip] = useState<Itinerary | null>(null);

  function toggleInterest(interest: string) {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((i) => i !== interest)
        : [...current, interest],
    );
  }

  async function generate(event: React.FormEvent) {
    event.preventDefault();
    if (!destination.trim()) {
      setError("Where would you like to go?");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const body: PlannerInput = {
        destination,
        length,
        travelers,
        budget,
        interests,
      };
      const res = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      // The route returns { error } with a non-2xx status on failure.
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setTrip(data as Itinerary);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  // ── Result view ────────────────────────────────────────────────────────────
  if (trip) {
    return (
      <Container className="py-16">
        <div className="mx-auto max-w-3xl">
          <ItineraryView trip={trip} />
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setTrip(null)}
              className="font-display h-12 rounded-full border-2 border-foreground/85 bg-surface px-6 font-semibold shadow-[0_4px_0_rgba(28,23,18,0.14)] transition-all hover:-translate-y-0.5"
            >
              Plan another trip
            </button>
          </div>
        </div>
      </Container>
    );
  }

  // ── Form view ────────────────────────────────────────────────────────────
  return (
    <Container className="py-16">
      <form onSubmit={generate} className="mx-auto max-w-2xl">
        <h1 className="font-display text-5xl font-semibold">
          Let's shape your trip
        </h1>
        <p className="mt-3 text-lg text-muted">
          A few quick questions - Voyager handles the rest.
        </p>

        <div className="mt-10 space-y-8">
          <Field label="Where to?">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Lisbon, Portugal"
              className="w-full rounded-2xl border-2 border-foreground/15 bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-foreground/45 focus:outline-none"
            />
          </Field>

          <Field label="How long?">
            <PillGroup
              options={LENGTHS}
              selected={length}
              onSelect={setLength}
            />
          </Field>

          <Field label="Who's going?">
            <PillGroup
              options={TRAVELERS}
              selected={travelers}
              onSelect={setTravelers}
            />
          </Field>

          <Field label="Budget">
            <PillGroup
              options={BUDGETS}
              selected={budget}
              onSelect={setBudget}
            />
          </Field>

          <Field label="What are you into?">
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <Pill
                  key={interest}
                  active={interests.includes(interest)}
                  activeClass="border-foreground/85 bg-pink text-[var(--ink)]"
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Pill>
              ))}
            </div>
          </Field>

          {error && (
            <p className="rounded-2xl border-2 border-foreground/85 bg-pink px-4 py-3 font-medium text-[var(--ink)]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="font-display h-14 w-full rounded-full px-8 text-lg font-semibold text-[#5b0f3f] shadow-[0_5px_0_#c893dd] transition-all [background-image:linear-gradient(180deg,#ffd4f5,#e3a8ff)] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
          >
            {loading ? "Planning your trip" : "Generate my itinerary"}
          </button>
        </div>
      </form>
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
      <label className="font-display mb-3 block text-lg font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

// Single-select group of pills.
function PillGroup({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <Pill
          key={option}
          active={option === selected}
          activeClass="border-foreground/85 bg-green text-[var(--ink)]"
          onClick={() => onSelect(option)}
        >
          {option}
        </Pill>
      ))}
    </div>
  );
}

function Pill({
  active,
  activeClass,
  onClick,
  children,
}: {
  active: boolean;
  activeClass: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "font-display rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors",
        active
          ? activeClass
          : "border-foreground/15 text-foreground/70 hover:border-foreground/40",
      )}
    >
      {children}
    </button>
  );
}
