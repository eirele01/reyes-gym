"use client";

import Image from "next/image";
import { ArrowRight, Check, Dumbbell } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";

const gymCategories = [
  { name: "Free Weights", desc: "Dumbbells, barbells, and plates for all strength levels." },
  { name: "Strength Machines", desc: "Targeted resistance training across major muscle groups." },
  { name: "Functional Training", desc: "Kettlebells, bodyweight, and movement-based work." },
  { name: "Conditioning", desc: "Cardio and metabolic circuits to build endurance." },
  { name: "Boxing Support", desc: "Supplemental strength work for combat athletes." },
];

const membershipBenefits = [
  "Full access to gym equipment",
  "Locker and shower facilities",
  "Flexible day, monthly, and student options",
  "Add-on access to boxing and Muay Thai sessions",
];

export function GymSection() {
  return (
    <section
      id="gym"
      className="bg-white py-16 md:py-24 lg:py-28"
      aria-labelledby="gym-heading"
    >
      <div className="container-gym">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-5 lg:order-1">
            <Reveal>
              <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
                Gym & Strength
              </span>
              <h2
                id="gym-heading"
                className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Build Strength, Train Smart
              </h2>
              <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
                Our gym floor brings together free weights, machines, and
                functional training in one community space. Whether you&rsquo;re
                supplementing combat training or focused on strength, you&rsquo;ll
                find what you need.
              </p>

              {/* Equipment Categories */}
              <div className="mt-6 space-y-2.5">
                {gymCategories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-light hover:bg-gray-light/60 transition-colors"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white flex-shrink-0">
                      <Dumbbell className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-heading font-bold text-charcoal text-sm uppercase tracking-wide">
                        {cat.name}
                      </span>
                      <p className="text-slate text-xs md:text-sm leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {membershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-charcoal text-xs md:text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-red hover:bg-red-dark text-white font-bold text-sm uppercase tracking-wide transition-colors min-h-[44px]"
                >
                  Join Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#rates"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-sm uppercase tracking-wide transition-colors min-h-[44px]"
                >
                  View Membership Rates
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal className="lg:col-span-7 lg:order-2 relative" delay={0.1} y={30}>
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-xl overflow-hidden shadow-gym-lg">
              <Image
                src="/images/gym/gym-strength.png"
                alt="Strength training area at Reyes Gym Mandaluyong"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-2 md:right-6 bg-gold text-navy rounded-xl p-4 md:p-5 shadow-gym-lg max-w-[180px]">
              <div className="font-heading text-2xl md:text-3xl font-bold leading-none">
                5
              </div>
              <div className="text-navy/80 text-xs mt-1 uppercase tracking-wide font-medium">
                Training Zones
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
