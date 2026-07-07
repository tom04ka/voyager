import { Container } from "@/components/ui/container";
import { steps } from "@/lib/mock-data";

// Alternate the number-badge color per step for a playful, hand-made feel.
const badgeColors = ["bg-green", "bg-pink", "bg-green"];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Three steps to your dream vacation
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className="rounded-3xl border-2 border-foreground/10 bg-surface p-7 text-center"
            >
              <span
                className={`mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-foreground/85 font-display text-2xl font-semibold text-[var(--ink)] shadow-[0_4px_0_rgba(28,23,18,0.18)] ${badgeColors[index % badgeColors.length]}`}
              >
                {index + 1}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
