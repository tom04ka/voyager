import { cn } from "@/lib/utils";

/**
 * Centers content and caps its width. Every section uses this so page margins
 * stay consistent from the header all the way down to the footer.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
