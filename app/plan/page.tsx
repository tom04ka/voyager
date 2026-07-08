import type { Metadata } from "next";
import { Planner } from "@/components/plan/planner";

export const metadata: Metadata = {
  title: "Plan a trip · Voyager",
  description: "Tell Voyager about your trip and get a personalized itinerary.",
};

// Thin Server Component wrapper: it can export `metadata` (a Client Component
// can't), and it hands off all the interactivity to <Planner>.
export default function PlanPage() {
  return <Planner />;
}
