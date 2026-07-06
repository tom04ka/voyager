import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-soft blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-brand-soft/60 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center gap-10 py-24 text-center sm:py-32">

        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Travel planning that feels like a{" "}
          <span className="text-brand">deep breath</span>.
        </h1>

        <p className="max-w-xl text-balance text-lg leading-8 text-muted">
          Tell Voyager where you're dreaming of. In seconds you'll have a calm,
          day-by-day itinerary shaped around your pace, your budget, and the
          things you actually love.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/plan" size="lg">
            Plan my trip
          </ButtonLink>
          <ButtonLink href="/itinerary" size="lg" variant="secondary">
            See a sample
          </ButtonLink>
        </div>

        <div className="mt-8 w-full max-w-md rounded-3xl border border-border bg-surface/90 p-2 text-left shadow-sm backdrop-blur">
          <div className="rounded-2xl bg-surface-muted p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Day 1 · Lisbon
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">☕</span>
                <span>
                  <span className="font-medium">Coffee in Alfama</span>
                  <span className="block text-muted">
                    Ease in with a pastel de nata.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">🌅</span>
                <span>
                  <span className="font-medium">Sunset at São Jorge</span>
                  <span className="block text-muted">
                    Golden hour over the rooftops.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
