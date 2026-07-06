import type {
  Itinerary,
  Step,
} from '@/lib/types';


export const steps: Step[] = [
  {
    id: 'details',
    title: 'Tell us all the details',
    description:
      "Where you're headed, how long and who's coming.",
  },
  {
    id: 'generate',
    title: 'Generate your plan',
    description:
      'Voyager builds a day-by-day itinerary with timing, travel, and a mix of must-sees.',
  },
  {
    id: 'refine',
    title: 'Enjoy your trip',
    description:
      'Review your plan and share it with your crew.',
  },
];

/**
 * A single pre-baked itinerary the stub /itinerary page renders. In a real
 * app this would be the output of the planner form on /plan.
 */
export const sampleItinerary: Itinerary = {
  destination: 'Lisbon, Portugal',
  summary:
    'A relaxed 3-day first taste of Lisbon — mixing the classic viewpoints with quiet neighborhoods, long lunches, and a day by the coast.',
  travelers: 2,
  budget: 'Mid-range',
  days: [
    {
      day: 1,
      title: 'Old town & viewpoints',
      activities: [
        {
          time: '9:30',
          title: 'Coffee in Alfama',
          description: 'Ease in with a pastel de nata and a bica at a tucked-away café.',
          icon: '☕',
        },
        {
          time: '11:00',
          title: "Wander Alfama's lanes",
          description: 'Follow the tram 28 route on foot through the oldest quarter.',
          icon: '🚶',
        },
        {
          time: '13:30',
          title: 'Lunch with a view',
          description: 'Grilled fish at a family tasca near Miradouro de Santa Luzia.',
          icon: '🍽️',
        },
        {
          time: '18:30',
          title: 'Sunset at São Jorge Castle',
          description: 'Golden hour over the rooftops and the river Tagus.',
          icon: '🌅',
        },
      ],
    },
    {
      day: 2,
      title: 'Belém & the river',
      activities: [
        {
          time: '10:00',
          title: 'Jerónimos Monastery',
          description: 'Go early to beat the queues at this Manueline landmark.',
          icon: '⛪',
        },
        {
          time: '12:30',
          title: 'The original pastéis',
          description: 'Warm custard tarts at the century-old bakery in Belém.',
          icon: '🥮',
        },
        {
          time: '15:00',
          title: 'Riverside stroll',
          description: 'Walk to the Belém Tower and along the waterfront.',
          icon: '🌊',
        },
        {
          time: '20:00',
          title: 'Fado dinner',
          description: 'Slow evening of melancholy song and petiscos in Alfama.',
          icon: '🎶',
        },
      ],
    },
    {
      day: 3,
      title: 'Coast day in Sintra',
      activities: [
        {
          time: '9:00',
          title: 'Train to Sintra',
          description: '40 minutes into misty hills and fairytale palaces.',
          icon: '🚆',
        },
        {
          time: '10:30',
          title: 'Pena Palace',
          description: 'The candy-colored palace and its wandering gardens.',
          icon: '🏰',
        },
        {
          time: '14:00',
          title: 'Cabo da Roca',
          description: 'Stand at the westernmost point of mainland Europe.',
          icon: '🧭',
        },
        {
          time: '17:00',
          title: 'Cascais by the sea',
          description: 'Wind down with gelato and a walk along the promenade.',
          icon: '🍦',
        },
      ],
    },
  ],
};
