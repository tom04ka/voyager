/**
 * Shared domain types. Keeping these in one place means the mock data and the
 * components that render it can't drift apart — swap the mock source for a real
 * API later and these types stay the contract.
 */

export interface Step {
  id: string;
  title: string;
  description: string;
}

/** A destination shown as an emoji star-badge on the landing page. */
export interface Destination {
  id: string;
  name: string;
  country: string;
  emoji: string;
}

/** One block of time in a generated day plan. */
export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  icon: string;
}

/** A single day within a full itinerary. */
export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

/** A complete mocked trip, as the planner would "generate". */
export interface Itinerary {
  destination: string;
  summary: string;
  travelers: number;
  budget: string;
  days: ItineraryDay[];
}
