export type QuickInfo = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const quickInfo: QuickInfo[] = [
  {
    id: "qi-1",
    title: "Open Daily",
    description: "Daily schedule available upon confirmation",
    icon: "clock",
  },
  {
    id: "qi-2",
    title: "Central Mandaluyong",
    description: "Highway Hills, near major transit routes",
    icon: "map-pin",
  },
  {
    id: "qi-3",
    title: "Court & Training",
    description: "Basketball, boxing, Muay Thai, and gym",
    icon: "dumbbell",
  },
  {
    id: "qi-4",
    title: "Beginner-Friendly",
    description: "Programs for all experience levels",
    icon: "users",
  },
];

export type FacilityFeature = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const facilityFeatures: FacilityFeature[] = [
  {
    id: "ff-1",
    title: "Indoor Court",
    description: "Approximately 1,000 sqm of polished hardwood for full-court play.",
    icon: "basketball",
  },
  {
    id: "ff-2",
    title: "Boxing Ring",
    description: "Dedicated ring for sparring, technical work, and supervised training.",
    icon: "boxing",
  },
  {
    id: "ff-3",
    title: "Strength Area",
    description: "Free weights, machines, and functional training equipment.",
    icon: "dumbbell",
  },
  {
    id: "ff-4",
    title: "Showers & Lockers",
    description: "Changing rooms and storage for members and court guests.",
    icon: "shower",
  },
  {
    id: "ff-5",
    title: "Coaching Staff",
    description: "Experienced, Elorde-affiliated trainers for boxing and Muay Thai.",
    icon: "whistle",
  },
  {
    id: "ff-6",
    title: "Community Events",
    description: "Host to leagues, clinics, and neighborhood sports gatherings.",
    icon: "users",
  },
];
