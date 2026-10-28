"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/animation/reveal";
import { faqs } from "@/data/faqs";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-gray-light py-16 md:py-24 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container-gym">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar */}
          <Reveal className="lg:col-span-4">
            <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
              Questions
            </span>
            <h2
              id="faq-heading"
              className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Frequently Asked
            </h2>
            <p className="mt-4 text-slate text-base leading-relaxed">
              Quick answers to the questions we hear most. Have something else
              in mind? Reach out and we&rsquo;ll help directly.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-navy hover:bg-navy-light text-white font-bold text-sm uppercase tracking-wide transition-colors min-h-[44px]"
            >
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
              Ask a Question
            </a>
          </Reveal>

          {/* Accordion */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <Accordion
              type="single"
              collapsible
              className="space-y-3"
              defaultValue="faq-1"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-white rounded-lg border border-soft-border overflow-hidden px-5"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-charcoal text-base md:text-lg uppercase tracking-wide hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate text-sm md:text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
