import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function CtaBand() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-foreground/85 px-8 py-16 text-center shadow-[0_8px_0_rgba(28,23,18,0.16)] sm:px-16">
          <span aria-hidden className="absolute left-8 top-8 text-4xl -rotate-12">🌴</span>
          <span aria-hidden className="absolute bottom-8 right-8 text-4xl rotate-12">✨</span>

          <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold sm:text-5xl">
            Ready when you are 
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/70">
            Start with a destination or just a feeling. Voyager takes it from there.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/plan" variant="primary" size="lg">
              Plan my trip
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
