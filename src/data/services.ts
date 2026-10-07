import {
  Target,
  Flame,
  Dumbbell,
  Hand,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    id: "basketball",
    title: "Basketball Court",
    description:
      "Book our indoor court for team practices, friendly games, tournaments, and community events.",
    image: "/images/basketball/basketball-court.png",
    href: "#basketball",
    icon: Target,
    features: ["Indoor court", "Team bookings", "Tournament use"],
  },
  {
    id: "boxing",
    title: "Boxing",
    description:
      "Train with experienced Elorde-affiliated coaches, from beginner fundamentals to competitive rounds.",
    image: "/images/boxing/boxing-training.png",
    href: "#combat",
    icon: Flame,
    features: ["Beginner-friendly", "1-on-1 coaching", "Fitness boxing"],
  },
  {
    id: "muay-thai",
    title: "Muay Thai",
    description:
      "Build technique, conditioning, and discipline with pad work and clinch training.",
    image: "/images/muay-thai/muay-thai-training.png",
    href: "#combat",
    icon: Hand,
    features: ["Pad work", "Conditioning", "All levels welcome"],
  },
  {
    id: "gym",
    title: "Gym & Strength",
    description:
      "Access free weights, strength machines, and functional training equipment in one community facility.",
    image: "/images/gym/gym-strength.png",
    href: "#gym",
    icon: Dumbbell,
    features: ["Free weights", "Strength machines", "Functional training"],
  },
];
