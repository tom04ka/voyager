"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { StarBadge } from "@/components/ui/star-badge";

// Cycled through while we wait — keep them playful and on-brand.
const MESSAGES = [
  "Searching for the best places…",
  "Asking the locals for tips…",
  "Dodging the tourist traps…",
  "Pairing cafés with sunsets…",
  "Checking the opening hours…",
  "Plotting the perfect route…",
  "Tucking gems into your days…",
];

// Scattered decorative stars: position + size + animation + a staggered delay.
const STARS = [
  "left-[8%] top-[14%] h-14 w-14 rotate-12 animate-pulse [animation-delay:0s]",
  "right-[10%] top-[10%] h-10 w-10 -rotate-6 animate-pulse [animation-delay:0.5s]",
  "left-[14%] bottom-[16%] h-12 w-12 animate-bounce [animation-delay:0.2s]",
  "right-[13%] bottom-[18%] h-16 w-16 rotate-6 animate-pulse [animation-delay:0.8s]",
  "left-[44%] top-[7%] h-9 w-9 animate-bounce [animation-delay:0.6s]",
];

export function PlanningLoader() {
  const [index, setIndex] = useState(0);

  // Advance the message every 1.8s. The interval is cleaned up on unmount so it
  // stops the moment the result arrives and this component is swapped out.
  useEffect(() => {
    const id = setInterval(
      () => setIndex((n) => (n + 1) % MESSAGES.length),
      1800,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Container className="py-16">
      <div className="relative mx-auto grid min-h-[55vh] max-w-3xl place-items-center overflow-hidden rounded-3xl border-2 border-foreground/10 bg-surface p-8">
        {STARS.map((cls, i) => (
          <StarBadge key={i} className={`absolute hidden sm:grid ${cls}`} />
        ))}

        <div className="relative text-center">
          <StarBadge className="mx-auto h-24 w-24 animate-spin [animation-duration:7s]" />
          <p
            key={index} /* re-key so the text re-fades in on each change */
            className="font-display mt-8 animate-pulse text-2xl font-semibold sm:text-3xl"
          >
            {MESSAGES[index]}
          </p>
          <p className="mt-2 text-muted">
            Hang tight — good trips take a few seconds ✨
          </p>
        </div>
      </div>
    </Container>
  );
}
