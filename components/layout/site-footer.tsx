import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t-2 border-dashed border-border">
      <Container className="flex flex-col items-center gap-1 py-8 text-center text-sm text-muted">
        <p className="font-display text-base text-foreground">Voyager</p>
        <p>Toma's demo project. No real bookings, just good vibes.</p>
      </Container>
    </footer>
  );
}
