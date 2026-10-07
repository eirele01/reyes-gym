"use client";

import Image from "next/image";
import { ArrowRight, Check, Users, Clock, Heart } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";

const boxingProgram = {
  title: "Boxing",
  eyebrow: "Elorde-Affiliated Training",
  description:
    "From your first stance to your first sparring round, our coaches build real fundamentals. Sessions cover footwork, mitt work, bag drills, and conditioning.",
  points: [
    "Beginner to competitive levels",
    "1-on-1 and group sessions",
    "Focus on technique and safety",
    "Conditioning and fitness boxing",
  ],
  image: "/images/boxing/boxing-training.png",
  alt: "Boxing training at Reyes Gym Mandaluyong",
};

const muayThaiProgram = {
  title: "Muay Thai",
  eyebrow: "The Art of Eight Limbs",
  description:
    "Build technique, power, and discipline with structured pad work, clinch fundamentals, and conditioning rooted in authentic Thai training methods.",
  points: [
    "Pad work with experienced coaches",
    "Clinch and technique drills",
    "All skill levels welcome",
    "Conditioning for combat athletes",
  ],
  image: "/images/muay-thai/muay-thai-training.png",
  alt: "Muay Thai pad work at Reyes Gym Mandaluyong",
};

const beginnerGuide = [
  {
    icon: Users,
    title: "All Levels Welcome",
    text: "No experience needed. Coaches adjust to your level from day one.",
  },
  {
    icon: Clock,
    title: "Session Length",
    text: "Typical sessions run 60–90 minutes including warm-up and cool-down.",
  },
  {
    icon: Heart,
    title: "What to Bring",
    text: "Hand wraps and gloves for boxing. Comfortable training gear and water.",
  },
];

export function CombatSection() {
  return (
    <section
      id="combat"
      className="bg-navy text-white py-16 md:py-24 lg:py-28 relative overflow-hidden"
      aria-labelledby="combat-heading"
    >
      {/* Court line motif background */}
      <div className="absolute inset-0 court-lines opacity-30" aria-hidden="true" />

      <div className="container-gym relative">
        {/* Section Header */}
        <Reveal className="max-w-2xl mb-12 md:mb-16">
          <span className="font-heading text-gold text-sm font-bold uppercase tracking-[0.2em]">
            Boxing & Muay Thai
          </span>
          <h2
            id="combat-heading"
            className="font-heading font-bold text-white uppercase leading-tight tracking-tight mt-3 text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Train with Purpose
          </h2>
          <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
            Two distinct combat disciplines, one coaching staff. Whether you want
            to compete, get fit, or learn proper technique, there&rsquo;s a
            program here for you.
          </p>
        </Reveal>

        {/* Split: Boxing & Muay Thai */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Boxing */}
          <Reveal className="group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-gym-lg mb-6">
              <Image
                src={boxingProgram.image}
                alt={boxingProgram.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-heading text-gold text-xs font-bold uppercase tracking-[0.2em]">
                  {boxingProgram.eyebrow}
                </span>
                <h3 className="font-heading font-bold text-white text-3xl md:text-4xl uppercase tracking-wide mt-1">
                  {boxingProgram.title}
                </h3>
              </div>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              {boxingProgram.description}
            </p>
            <ul className="space-y-2.5">
              {boxingProgram.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-red/20 text-red flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-white/90 text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Muay Thai */}
          <Reveal className="group" delay={0.1}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-gym-lg mb-6">
              <Image
                src={muayThaiProgram.image}
                alt={muayThaiProgram.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-heading text-gold text-xs font-bold uppercase tracking-[0.2em]">
                  {muayThaiProgram.eyebrow}
                </span>
                <h3 className="font-heading font-bold text-white text-3xl md:text-4xl uppercase tracking-wide mt-1">
                  {muayThaiProgram.title}
                </h3>
              </div>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4">
              {muayThaiProgram.description}
            </p>
            <ul className="space-y-2.5">
              {muayThaiProgram.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-gold/20 text-gold flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-white/90 text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Beginner Guide */}
        <Reveal className="mt-14 md:mt-16">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {beginnerGuide.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red text-white mb-3">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-base md:text-lg uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-white/70 text-xs md:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-10 md:mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 md:h-14 px-8 rounded-md bg-red hover:bg-red-dark text-white font-bold text-sm md:text-base uppercase tracking-wide shadow-gym-lg transition-colors min-h-[44px]"
          >
            View Combat Sports Programs
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
