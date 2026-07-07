import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "pink" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

// The "hard shadow" (a solid offset, not a blur) + a lift on hover is what makes
// these feel like tactile stickers rather than flat web buttons.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  // lime-green pill
  primary:
    "text-[#22340a] [background-image:linear-gradient(180deg,#d6f78c,#a9e84f)] shadow-[0_5px_0_#7cba32] hover:-translate-y-0.5 hover:shadow-[0_7px_0_#7cba32]",
  // bubblegum pink → lavender pill
  pink: "text-[#5b0f3f] [background-image:linear-gradient(180deg,#ffd4f5,#e3a8ff)] shadow-[0_5px_0_#c893dd] hover:-translate-y-0.5 hover:shadow-[0_7px_0_#c893dd]",
  // outlined "paper" pill (the ref's white "Посмотреть" buttons)
  secondary:
    "border-2 border-foreground/85 bg-surface text-foreground shadow-[0_5px_0_rgba(28,23,18,0.14)] hover:-translate-y-0.5 hover:shadow-[0_7px_0_rgba(28,23,18,0.14)]",
  ghost: "text-foreground hover:bg-surface-muted",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base sm:text-lg",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
