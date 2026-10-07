"use client";

import { ArrowRight, Info, Check, AlertCircle } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animation/reveal";
import { ratePlans, ratesDisclaimer, addOns } from "@/data/rates";

export function RatesSection() {
  return (
    <section
      id="rates"
      className="bg-gray-light py-16 md:py-24 lg:py-28"
      aria-labelledby="rates-heading"
    >
      <div className="container-gym">
        {/* Header */}
        <Reveal className="max-w-2xl mb-10 md:mb-14">
          <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
            Rates & Packages
          </span>
          <h2
            id="rates-heading"
            className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Sample Rate Preview
          </h2>
          <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
            A quick look at our service categories. Full pricing details are
            confirmed on request&mdash;the values below are for layout
            demonstration.
          </p>
        </Reveal>

        {/* Disclaimer Banner */}
        <Reveal className="mb-8">
          <div className="flex items-start gap-3 bg-warning/10 border border-warning/30 rounded-lg p-4">
            <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-charcoal text-sm leading-relaxed">
              <span className="font-bold">Sample layout only&mdash;</span>
              {ratesDisclaimer}
            </p>
          </div>
        </Reveal>

        {/* Rate Cards */}
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.1}>
          {ratePlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <div
                className={`relative flex flex-col h-full rounded-xl overflow-hidden shadow-gym hover:shadow-gym-lg transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-navy text-white border-t-4 border-red"
                    : "bg-white text-charcoal border-t-4 border-gold"
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute top-3 right-3 bg-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    Popular
                  </div>
                )}

                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3
                    className={`font-heading font-bold text-lg md:text-xl uppercase tracking-wide ${
                      plan.featured ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {plan.title}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span
                      className={`font-heading font-bold text-3xl md:text-4xl ${
                        plan.featured ? "text-gold" : "text-navy"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`text-xs md:text-sm ${
                          plan.featured ? "text-white/60" : "text-slate"
                        }`}
                      >
                        /{plan.period.replace("per ", "")}
                      </span>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                            plan.featured ? "text-gold" : "text-red"
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`text-xs md:text-sm ${
                            plan.featured ? "text-white/85" : "text-slate"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-md font-bold text-xs uppercase tracking-wide transition-colors min-h-[44px] ${
                      plan.featured
                        ? "bg-red hover:bg-red-dark text-white"
                        : "bg-navy hover:bg-navy-light text-white"
                    }`}
                  >
                    View Rates
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>

                  {plan.disclaimer && (
                    <p
                      className={`mt-3 text-[10px] leading-relaxed ${
                        plan.featured ? "text-white/50" : "text-slate/70"
                      }`}
                    >
                      {plan.disclaimer}
                    </p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Add-ons */}
        <Reveal className="mt-12 md:mt-14">
          <div className="bg-white rounded-xl border border-soft-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <Info className="h-5 w-5 text-navy" aria-hidden="true" />
              <h3 className="font-heading font-bold text-charcoal text-lg md:text-xl uppercase tracking-wide">
                Available Add-ons
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-start gap-2.5 p-3 rounded-md bg-gray-light"
                >
                  <span className="h-2 w-2 rounded-full bg-gold flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-charcoal text-sm">{addon.name}</span>
                    <span className="text-slate text-xs block">{addon.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
