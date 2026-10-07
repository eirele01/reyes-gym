"use client";

import { Quote, Info } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animation/reveal";
import { testimonials, testimonialDisclaimer } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      className="bg-white py-16 md:py-24 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-gym">
        {/* Header */}
        <Reveal className="max-w-2xl mb-10 md:mb-14">
          <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
            Community Voices
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            What Members Say
          </h2>
        </Reveal>

        {/* Disclaimer */}
        <Reveal className="mb-8">
          <div className="flex items-center gap-2 text-slate text-sm">
            <Info className="h-4 w-4 text-slate flex-shrink-0" aria-hidden="true" />
            <span className="italic">{testimonialDisclaimer}</span>
          </div>
        </Reveal>

        {/* Testimonial Cards */}
        <StaggerGroup className="grid md:grid-cols-3 gap-5 md:gap-6" stagger={0.12}>
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <figure className="flex flex-col h-full bg-gray-light rounded-xl p-6 md:p-7 border-b-4 border-red hover:shadow-gym transition-shadow">
                <Quote className="h-8 w-8 text-red/20 mb-3" aria-hidden="true" />
                <blockquote className="text-charcoal text-sm md:text-base leading-relaxed flex-1">
                  &ldquo;{testimonial.statement}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 pt-5 border-t border-soft-border">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white font-heading font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-charcoal text-sm uppercase tracking-wide">
                      {testimonial.name}
                    </div>
                    <div className="text-slate text-xs">{testimonial.memberType}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
