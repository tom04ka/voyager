import { Container } from "@/components/ui/container";
import { steps } from "@/lib/mock-data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps to your perfect vacation
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.id} className="relative">
              <span className="text-sm font-semibold text-brand">
                Step {index + 1}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
