"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Dumbbell, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animation/reveal";
import { services } from "@/data/services";
import { quickInfo } from "@/data/facility";

const iconMap = {
  clock: Clock,
  "map-pin": MapPin,
  dumbbell: Dumbbell,
  users: Users,
};

export function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28" aria-labelledby="services-heading">
      {/* Section Heading */}
      <div className="container-gym">
        <Reveal className="max-w-2xl mb-12 md:mb-16">
          <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Train Your Way Under One Roof
          </h2>
          <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
            Four sports, one community facility. Whether you&rsquo;re here for a
            pickup game, a boxing session, or a strength workout, Reyes Gym has
            the space and the coaches to back you up.
          </p>
        </Reveal>
      </div>

      {/* Service Cards */}
      <div className="container-gym">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full bg-white rounded-xl border-t-4 border-red overflow-hidden shadow-gym hover:shadow-gym-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-light">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    {/* Icon Badge */}
                    <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-md bg-red text-white shadow-gym">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-slate text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* View Link */}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-red font-bold text-sm uppercase tracking-wide">
                      View Service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      {/* Quick Info Bar */}
      <div className="container-gym mt-12 md:mt-16">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-soft-border rounded-xl overflow-hidden border border-soft-border">
            {quickInfo.map((info) => {
              const Icon = iconMap[info.icon as keyof typeof iconMap] || Dumbbell;
              return (
                <div
                  key={info.id}
                  className="bg-gray-light p-5 md:p-6 flex flex-col items-start gap-3 hover:bg-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-base md:text-lg uppercase tracking-wide">
                      {info.title}
                    </h4>
                    <p className="mt-1 text-slate text-xs md:text-sm leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
