"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { facilityFeatures } from "@/data/facility";
import { gymInfo } from "@/data/navigation";

const basketballHighlights = [
  "Indoor court for year-round play",
  "Team practices and league games",
  "Tournament and event hosting",
  "Group and corporate bookings",
];

export function BasketballSection() {
  return (
    <section
      id="basketball"
      className="relative bg-gray-light py-16 md:py-24 lg:py-28 overflow-hidden"
      aria-labelledby="basketball-heading"
    >
      <div className="container-gym">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <Reveal className="lg:col-span-7 relative" y={30}>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-xl overflow-hidden shadow-gym-lg">
              <Image
                src="/images/basketball/basketball-court.png"
                alt="Reyes Gym indoor basketball court in Mandaluyong"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              {/* Court Line Motif Overlay */}
              <div className="absolute inset-0 court-lines opacity-30" aria-hidden="true" />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-navy text-white rounded-xl p-5 md:p-6 shadow-gym-lg max-w-[200px]">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">
                {gymInfo.courtArea}
              </div>
              <div className="text-white/80 text-xs md:text-sm mt-1 uppercase tracking-wide">
                Indoor Court
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
                Basketball Court
              </span>
              <h2
                id="basketball-heading"
                className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Built for Teams, Leagues and Community Play
              </h2>
              <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
                Our indoor court has been the site of countless practices,
                friendly games, and tournaments. Book it for your team, your
                league, or your next community event.
              </p>

              <ul className="mt-6 space-y-3">
                {basketballHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-red/10 text-red flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-charcoal text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-red hover:bg-red-dark text-white font-bold text-sm uppercase tracking-wide transition-colors min-h-[44px]"
                >
                  Explore the Basketball Court
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm uppercase tracking-wide transition-colors min-h-[44px]"
                >
                  View Schedule
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Facility Features Grid */}
        <Reveal className="mt-16 md:mt-20">
          <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl uppercase tracking-wide mb-6 text-center">
            Facility Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {facilityFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-4 md:p-5 border border-soft-border hover:border-red/30 hover:shadow-gym transition-all"
              >
                <h4 className="font-heading font-bold text-charcoal text-base md:text-lg uppercase tracking-wide">
                  {feature.title}
                </h4>
                <p className="mt-1.5 text-slate text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
