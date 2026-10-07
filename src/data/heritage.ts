export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "1990",
    title: "Established",
    description:
      "Reyes Gym opens its doors in Mandaluyong as a community sports venue for basketball and combat training.",
  },
  {
    year: "1990s",
    title: "Elorde Affiliation",
    description:
      "The boxing and fitness program becomes part of the Elorde Boxing network, bringing established coaching to local fighters.",
  },
  {
    year: "2000s",
    title: "League Home",
    description:
      "The indoor court becomes a regular host for local basketball leagues, school events, and amateur tournaments.",
  },
  {
    year: "2023",
    title: "NBA Community Court",
    description:
      "Reyes Gym is selected as the home of the first NBA Community Court in the Philippines.",
  },
];

export const heritageStats = [
  { value: "35+", label: "Years serving Mandaluyong" },
  { value: "1,000", label: "Square-metre indoor court" },
  { value: "4", label: "Sports under one roof" },
  { value: "1st", label: "NBA Community Court in PH" },
];
