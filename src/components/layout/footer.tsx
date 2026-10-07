import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation, Clock } from "lucide-react";
import { navLinks, gymInfo } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="container-gym py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide">
              Ready to Train?
            </h3>
            <p className="text-white/70 mt-1 text-sm md:text-base">
              Book the court, join a session, or ask about membership today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${gymInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-md bg-red hover:bg-red-dark text-white font-bold text-sm transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-md border border-white/40 text-white hover:bg-white/10 font-bold text-sm transition-colors"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send Inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-gym py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red font-heading font-bold text-white text-xl">
              R
            </div>
            <div className="leading-tight">
              <div className="font-heading font-bold text-white text-lg uppercase tracking-wide">
                Reyes Gym
              </div>
              <div className="text-[10px] text-gold font-medium tracking-widest uppercase">
                Mandaluyong
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            {gymInfo.tagline}. Basketball, boxing, Muay Thai, and strength
            training under one roof since {gymInfo.established}.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a
              href={gymInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-red text-white transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={gymInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-red text-white transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation" className="lg:col-span-1">
          <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-gold mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-1">
          <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-gold mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-white/70 leading-relaxed">{gymInfo.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={`tel:${gymInfo.phone.replace(/\s/g, "")}`}
                className="text-white/70 hover:text-white transition-colors"
              >
                {gymInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={`mailto:${gymInfo.email}`}
                className="text-white/70 hover:text-white transition-colors break-all"
              >
                {gymInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours & Directions */}
        <div className="lg:col-span-1">
          <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-gold mb-4">
            Visit
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <Clock className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span className="text-white/70">{gymInfo.hoursNote}</span>
            </li>
            <li className="flex gap-2.5">
              <Navigation className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={gymInfo.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Open in Waze
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-red flex-shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={gymInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Google Maps Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-gym py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {gymInfo.name}. All rights reserved.
          </p>
          <p className="text-white/40">
            Website mockup for demonstration. Rates and schedules subject to confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}
