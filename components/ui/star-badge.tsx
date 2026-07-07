import { cn } from "@/lib/utils";

/**
 * A hot-pink five-point star with a warm glow and a big emoji in the middle —
 * the reference's "face on a star", but image-free. Pass sizing/position/rotation
 * via `className` (e.g. "h-28 w-28 rotate-6 absolute left-10 top-20").
 */
export function StarBadge({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "star grid place-items-center bg-star [filter:drop-shadow(0_0_18px_var(--glow))]",
        className,
      )}
    >
      <span aria-hidden className="text-4xl sm:text-5xl"/>
    </div>
  );
}
