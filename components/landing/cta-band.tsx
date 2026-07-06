import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function CtaBand() {
  return (
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-16 text-center text-white sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your next trip is a few questions away.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-white/85">
            Start with a destination or just a feeling. Voyager takes it from
            there.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href="/plan"
              size="lg"
              className="bg-brand-strong text-brand-strong hover:bg-white/90 hover:text-brand"
            >
              Plan my trip
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
