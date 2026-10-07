export type Testimonial = {
  id: string;
  name: string;
  memberType: string;
  statement: string;
  initials: string;
};

export const testimonialDisclaimer =
  "Sample testimonial content—shown to demonstrate layout only.";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marco D.",
    memberType: "Basketball League Captain",
    statement:
      "We've been booking the court for our weekly league games for years. The surface is well-maintained and the staff always keeps things running on time.",
    initials: "MD",
  },
  {
    id: "t2",
    name: "Jasmine R.",
    memberType: "Boxing Member, 2 years",
    statement:
      "Started as a complete beginner and the coaches made me feel comfortable from day one. The training is serious but the community is welcoming.",
    initials: "JR",
  },
  {
    id: "t3",
    name: "Coach Vince T.",
    memberType: "Muay Thai Trainee",
    statement:
      "Good pad work, honest coaching, and no ego. This is where I send people who want to actually learn technique, not just get a workout.",
    initials: "VT",
  },
];
