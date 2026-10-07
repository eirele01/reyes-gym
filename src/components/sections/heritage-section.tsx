"use client";

import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animation/reveal";
import { milestones, heritageStats } from "@/data/heritage";

export function HeritageSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 md:py-24 lg:py-28"
      aria-labelledby="heritage-heading"
    >
      <div className="container-gym">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-20">
          <Reveal>
            <span className="font-heading text-gold text-sm font-bold uppercase tracking-[0.2em]">
              A Mandaluyong Sports Institution
            </span>
            <h2
              id="heritage-heading"
              className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
            >
              Serving Athletes and the Community Since 1990
            </h2>
            <p className="mt-5 text-slate text-base md:text-lg leading-relaxed">
              Reyes Gym isn&rsquo;t a newcomer. For over three decades, it has
              been a fixture in Mandaluyong&rsquo;s sports scene&mdash;hosting
              leagues, training fighters, and giving the community a place to
              play, train, and gather.
            </p>
            <p className="mt-4 text-slate text-sm md:text-base leading-relaxed">
              The basketball court became the first NBA Community Court in the
              Philippines in 2023, building on a legacy that started in January
              1990.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-gym-lg">
              <Image
                src="/images/history/heritage-gym.png"
                alt="Reyes Gym Mandaluyong historic community sports venue"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
            </div>
            {/* Year Badge */}
            <div className="absolute -top-4 -left-2 md:left-6 bg-navy text-white rounded-lg px-5 py-3 shadow-gym-lg">
              <div className="font-heading text-2xl md:text-3xl font-bold text-gold leading-none">
                1990
              </div>
              <div className="text-white/70 text-[10px] md:text-xs uppercase tracking-widest mt-1">
                Established
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {heritageStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-gray-light rounded-xl p-5 md:p-6 text-center border-b-4 border-gold">
                <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="mt-2 text-slate text-xs md:text-sm uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Timeline */}
        <Reveal>
          <h3 className="font-heading font-bold text-charcoal text-2xl md:text-3xl uppercase tracking-wide mb-10 text-center">
            Our Journey
          </h3>
        </Reveal>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-soft-border md:-translate-x-1/2"
            aria-hidden="true"
          />

          <StaggerGroup className="space-y-8 md:space-y-12" stagger={0.15}>
            {milestones.map((milestone, idx) => (
              <StaggerItem key={milestone.year}>
                <div
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    idx % 2 === 0
                      ? "md:flex-row-reverse md:text-right"
                      : "md:flex-row"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white border border-soft-border rounded-xl p-5 md:p-6 shadow-gym hover:shadow-gym-lg transition-shadow">
                      <span className="font-heading text-red text-2xl md:text-3xl font-bold">
                        {milestone.year}
                      </span>
                      <h4 className="font-heading font-bold text-charcoal text-lg md:text-xl uppercase tracking-wide mt-1">
                        {milestone.title}
                      </h4>
                      <p className="mt-2 text-slate text-sm md:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Marker */}
                  <div
                    className="absolute left-4 md:left-1/2 top-6 md:top-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gold border-4 border-white shadow-gym z-10"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-navy" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
