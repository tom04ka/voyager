import type { Itinerary } from "@/lib/types";

// Alternate the day-badge color per day.
const dayColors = ["bg-green", "bg-pink"];

/**
 * Renders a full itinerary (header + meta badges + day-by-day cards). Shared by
 * the sample /itinerary page and the live result on /plan, so both look identical.
 */
export function ItineraryView({ trip }: { trip: Itinerary }) {
  return (
    <div>
      <h1 className="font-display text-5xl font-semibold">{trip.destination}</h1>
      <p className="mt-4 text-lg leading-8 text-muted">{trip.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Badge>{trip.days.length} days</Badge>
        <Badge>{trip.travelers} travelers</Badge>
        <Badge>{trip.budget}</Badge>
      </div>

      <div className="mt-12 space-y-6">
        {trip.days.map((day, index) => (
          <section
            key={day.day}
            className="rounded-3xl border-2 border-foreground/10 bg-surface p-6 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span
                className={`font-display grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-foreground/85 text-xl font-semibold text-[var(--ink)] shadow-[0_4px_0_rgba(28,23,18,0.18)] ${dayColors[index % dayColors.length]}`}
              >
                {day.day}
              </span>
              <h2 className="font-display text-2xl font-semibold">{day.title}</h2>
            </div>

            <ul className="mt-6 space-y-4">
              {day.activities.map((activity, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-foreground/10 bg-surface-muted text-lg"
                  >
                    {activity.icon}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display rounded-md bg-surface-muted px-2 py-0.5 text-sm font-semibold">
                        {activity.time}
                      </span>
                      <span className="font-display font-semibold">
                        {activity.title}
                      </span>
                    </div>
                    <p className="mt-1 leading-6 text-muted">
                      {activity.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display rounded-full border-2 border-foreground/85 bg-surface px-4 py-1.5 text-sm font-medium shadow-[0_3px_0_rgba(28,23,18,0.12)]">
      {children}
    </span>
  );
}
