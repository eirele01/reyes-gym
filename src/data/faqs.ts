export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do you accept walk-ins?",
    answer:
      "Yes, walk-ins are welcome for gym use and select training sessions when capacity allows. For court rental and coaching sessions, we recommend booking ahead to secure your preferred time slot.",
  },
  {
    id: "faq-2",
    question: "Are beginners welcome?",
    answer:
      "Absolutely. Our boxing, Muay Thai, and strength programs are designed to support beginners. Coaches will adjust intensity and technique based on your experience level so you can train safely from your first session.",
  },
  {
    id: "faq-3",
    question: "Can teams book the court?",
    answer:
      "Yes. The indoor court is available for team practices, friendly games, league play, and tournaments. Group and corporate bookings can be arranged in advance. Contact us to check available time slots.",
  },
  {
    id: "faq-4",
    question: "Do I need my own gloves?",
    answer:
      "For your first few sessions, loaner gloves and hand wraps are typically available. We recommend purchasing your own gloves and wraps once you commit to regular training for hygiene and fit.",
  },
  {
    id: "faq-5",
    question: "Is parking available?",
    answer:
      "Limited parking is available near the facility. During peak hours and event days, we recommend arriving early or using ride-sharing. Contact us for details on nearby parking options.",
  },
  {
    id: "faq-6",
    question: "How can I confirm current rates?",
    answer:
      "Rates shown on this site are sample values for demonstration. Please call or message us directly to confirm current pricing, packages, and any available promotions before booking.",
  },
];
