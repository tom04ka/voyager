/**
 * Tiny className joiner. Filters out falsey values so you can write:
 *   cn("base", isActive && "active", className)
 * We keep it dependency-free instead of pulling in `clsx`.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
