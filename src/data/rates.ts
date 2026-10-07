export type RatePlan = {
  id: string;
  title: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  disclaimer?: string;
};

export const ratesDisclaimer =
  "Sample layout only—rates subject to confirmation. Prices shown are mock values for demonstration.";

export const ratePlans: RatePlan[] = [
  {
    id: "court-rental",
    title: "Court Rental",
    price: "₱1,500",
    period: "per hour",
    features: [
      "Full indoor basketball court",
      "Up to 10 players",
      "Scoreboard access",
      "Lighting and ventilation",
    ],
    featured: true,
    disclaimer: "Starting rate—confirm current pricing",
  },
  {
    id: "boxing-session",
    title: "Boxing Session",
    price: "₱350",
    period: "per session",
    features: [
      "Coach-led group session",
      "Mitt work and bag drills",
      "Conditioning circuit",
      "Beginner-friendly",
    ],
    disclaimer: "Sample rate—subject to confirmation",
  },
  {
    id: "muay-thai-session",
    title: "Muay Thai Session",
    price: "₱400",
    period: "per session",
    features: [
      "Pad work with coach",
      "Technique drills",
      "Clinch fundamentals",
      "All skill levels",
    ],
    disclaimer: "Sample rate—subject to confirmation",
  },
  {
    id: "gym-day-pass",
    title: "Gym Day Pass",
    price: "₱150",
    period: "per day",
    features: [
      "Full gym access",
      "Free weights and machines",
      "Functional training area",
      "Locker and shower access",
    ],
    disclaimer: "Sample rate—subject to confirmation",
  },
];

export const addOns = [
  { name: "Court lighting extension", note: "Available for late bookings" },
  { name: "Scoreboard operator", note: "For tournament and league use" },
  { name: "Personal training", note: "1-on-1 with a certified coach" },
  { name: "Equipment rental", note: "Gloves, hand wraps, and pads" },
];
