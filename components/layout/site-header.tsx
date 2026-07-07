import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

// No client-side hooks anymore (the nav with active-link state is gone), so this
// is a plain Server Component — smaller bundle, nothing to hydrate.
export function SiteHeader() {
  return (
    <header>
      <Container className="flex h-20 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-display text-2xl font-semibold">Voyager</span>
        </Link>
        <ButtonLink href="/plan" variant="pink" size="md">
          Plan a trip
        </ButtonLink>
      </Container>
    </header>
  );
}
