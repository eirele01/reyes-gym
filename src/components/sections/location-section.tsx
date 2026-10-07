"use client";

import { Phone, Mail, MapPin, Navigation, Clock, MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { BookingForm } from "@/components/booking/booking-form";
import { gymInfo } from "@/data/navigation";

export function LocationSection() {
  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="container-gym">
        {/* Header */}
        <Reveal className="max-w-2xl mb-10 md:mb-14">
          <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
            Visit & Book
          </span>
          <h2
            id="contact-heading"
            className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Location & Booking
          </h2>
          <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
            Find us in Highway Hills, Mandaluyong. Send a booking request below
            or reach out directly&mdash;we&rsquo;ll confirm availability and
            rates from there.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left: Contact Info + Map */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              {/* Contact Cards */}
              <div className="space-y-3">
                <a
                  href={`tel:${gymInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 bg-gray-light hover:bg-gray-light/70 rounded-lg p-4 transition-colors group"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-red text-white flex-shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate uppercase tracking-wide font-medium">
                      Call Us
                    </div>
                    <div className="font-heading font-bold text-charcoal text-base md:text-lg">
                      {gymInfo.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${gymInfo.email}`}
                  className="flex items-center gap-4 bg-gray-light hover:bg-gray-light/70 rounded-lg p-4 transition-colors"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-white flex-shrink-0">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate uppercase tracking-wide font-medium">
                      Email
                    </div>
                    <div className="font-heading font-bold text-charcoal text-base md:text-lg break-all">
                      {gymInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-gray-light rounded-lg p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-navy flex-shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate uppercase tracking-wide font-medium">
                      Address
                    </div>
                    <p className="text-charcoal text-sm leading-relaxed mt-0.5">
                      {gymInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-light rounded-lg p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-white flex-shrink-0">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate uppercase tracking-wide font-medium">
                      Operating Hours
                    </div>
                    <p className="text-charcoal text-sm leading-relaxed mt-0.5">
                      {gymInfo.hoursNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <a
                  href={gymInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 h-20 rounded-lg bg-navy hover:bg-navy-light text-white transition-colors min-h-[44px]"
                  aria-label="Message us on Facebook"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-wide">Messenger</span>
                </a>
                <a
                  href={gymInfo.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 h-20 rounded-lg bg-red hover:bg-red-dark text-white transition-colors min-h-[44px]"
                  aria-label="Open in Waze"
                >
                  <Navigation className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-wide">Waze</span>
                </a>
                <a
                  href={gymInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 h-20 rounded-lg bg-gold hover:bg-gold-light text-navy transition-colors min-h-[44px]"
                  aria-label="Open in Google Maps"
                >
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[11px] font-bold uppercase tracking-wide">Maps</span>
                </a>
              </div>
            </Reveal>

            {/* Map Placeholder */}
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-soft-border shadow-gym bg-navy">
                {/* Styled map placeholder */}
                <div className="absolute inset-0 court-lines opacity-20" aria-hidden="true" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #101C35 0%, #1B2B4D 50%, #101C35 100%)",
                  }}
                >
                  {/* Mock streets */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-30"
                    viewBox="0 0 400 300"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M0 80 L400 120" stroke="#D9DDE5" strokeWidth="2" />
                    <path d="M0 180 L400 160" stroke="#D9DDE5" strokeWidth="1.5" />
                    <path d="M120 0 L140 300" stroke="#D9DDE5" strokeWidth="2" />
                    <path d="M260 0 L280 300" stroke="#D9DDE5" strokeWidth="1.5" />
                    <path d="M0 220 L400 240" stroke="#D9DDE5" strokeWidth="1" />
                  </svg>

                  {/* Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-red/40 animate-ping" aria-hidden="true" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red text-white shadow-gym-lg border-2 border-white">
                        <MapPin className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="mt-2 bg-white rounded-md px-3 py-1.5 shadow-gym">
                      <span className="font-heading font-bold text-navy text-xs uppercase tracking-wide">
                        Reyes Gym
                      </span>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-white/70 text-xs font-medium">
                    Highway Hills, Mandaluyong
                  </span>
                  <a
                    href={gymInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-white bg-navy/60 hover:bg-navy px-2.5 py-1 rounded backdrop-blur-sm transition-colors"
                  >
                    <Navigation className="h-3 w-3" aria-hidden="true" />
                    Directions
                  </a>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate text-center italic">
                Map preview&mdash;click Directions to open your preferred map app.
              </p>
            </Reveal>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="bg-gray-light rounded-xl p-6 md:p-8 border border-soft-border">
                <div className="flex items-center gap-2 mb-1">
                  <Send className="h-5 w-5 text-red" aria-hidden="true" />
                  <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
                    Booking Request
                  </span>
                </div>
                <h3 className="font-heading font-bold text-charcoal text-2xl md:text-3xl uppercase tracking-wide mb-6">
                  Send Us Your Details
                </h3>
                <BookingForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
