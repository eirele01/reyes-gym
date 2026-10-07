export type GalleryItem = {
  id: string;
  category: "basketball" | "boxing" | "muay-thai" | "gym" | "events" | "history";
  title: string;
  caption: string;
  image: string;
  aspect: "tall" | "wide" | "square";
};

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "basketball", label: "Basketball" },
  { id: "boxing", label: "Boxing" },
  { id: "muay-thai", label: "Muay Thai" },
  { id: "gym", label: "Gym" },
  { id: "events", label: "Events" },
  { id: "history", label: "History" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "basketball",
    title: "Court Action",
    caption: "League night at the indoor court",
    image: "/images/basketball/basketball-court.png",
    aspect: "wide",
  },
  {
    id: "g2",
    category: "boxing",
    title: "Mitt Work",
    caption: "Coach-led boxing fundamentals",
    image: "/images/boxing/boxing-training.png",
    aspect: "wide",
  },
  {
    id: "g3",
    category: "muay-thai",
    title: "Pad Rounds",
    caption: "Muay Thai technique drills",
    image: "/images/muay-thai/muay-thai-training.png",
    aspect: "wide",
  },
  {
    id: "g4",
    category: "gym",
    title: "Strength Floor",
    caption: "Free weights and machines",
    image: "/images/gym/gym-strength.png",
    aspect: "wide",
  },
  {
    id: "g5",
    category: "history",
    title: "Community Roots",
    caption: "Serving Mandaluyong since 1990",
    image: "/images/history/heritage-gym.png",
    aspect: "wide",
  },
  {
    id: "g6",
    category: "basketball",
    title: "Team Practice",
    caption: "Local teams training weekly",
    image: "/images/hero-basketball.png",
    aspect: "wide",
  },
];
