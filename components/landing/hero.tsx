import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { StarBadge } from "@/components/ui/star-badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:pb-24 sm:pt-14">
      <StarBadge
        label="Kyoto"
        className="absolute left-[5%] top-[34%] hidden h-28 w-28 -rotate-12 lg:grid"
      />
      <StarBadge
        label="a tropical island"
        className="absolute right-[6%] top-[26%] hidden h-32 w-32 rotate-12 lg:grid"
      />
      <div aria-hidden className="pointer-events-none hidden select-none lg:block">
        <span className="absolute right-[22%] top-[58%] text-4xl rotate-12">🧳</span>
        <span className="absolute left-[16%] top-[64%] text-3xl">🗺️</span>
      </div>

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
          Voyager plans the whole trip.
          <br className="hidden sm:block" /> You just{" "}
          <span className="marker">show up</span>. 
        </h1>

        <p className="max-w-xl text-balance text-lg leading-8 text-muted">
          Tell us where you're dreaming of and how you like to travel. We'll
          hand you a warm, day-by-day plan. Not 40 open browser tabs.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/plan" variant="secondary" size="lg">
            Plan my trip
          </ButtonLink>
          <ButtonLink href="/itinerary" variant="secondary" size="lg">
            Peek at a sample
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
