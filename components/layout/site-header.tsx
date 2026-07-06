"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

// `usePathname` is a client hook, so this whole component runs on the client.
// It's cheap and interactive (active-link state), which is exactly the kind of
// thing a Client Component is for.

const navItems = [
  { href: "/plan", label: "Plan a trip" },
  { href: "/itinerary", label: "Sample itinerary" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-xl bg-brand text-white"
          >
            ✈
          </span>
          <span className="text-lg">Voyager</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-surface-muted text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ButtonLink href="/plan" size="md">
          Start planning
        </ButtonLink>
      </Container>
    </header>
  );
}
