"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { navLinks, gymInfo } from "@/data/navigation";

export function Header() {
  const scrolled = useScrollHeader(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-gym py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container-gym flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group" aria-label="Reyes Gym Mandaluyong home">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red font-heading font-bold text-white text-xl shadow-gym group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="leading-tight">
            <div className="font-heading font-bold text-white text-lg tracking-wide uppercase">
              Reyes Gym
            </div>
            <div className="text-[10px] text-gold font-medium tracking-widest uppercase hidden sm:block">
              Mandaluyong
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            size="default"
            className="bg-red hover:bg-red-dark text-white font-bold uppercase tracking-wide"
          >
            <a href="#contact">
              <Calendar className="h-4 w-4 mr-1.5" aria-hidden="true" />
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 hover:text-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[380px] bg-navy border-l border-white/10 p-0 flex flex-col">
            <SheetHeader className="px-6 pt-6 pb-4 border-b border-white/10">
              <SheetTitle className="text-white font-heading text-2xl uppercase tracking-wide">
                Menu
              </SheetTitle>
            </SheetHeader>

            <nav className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/10 px-6 py-5 space-y-3 bg-navy-dark/40">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Calendar className="h-4 w-4 text-gold flex-shrink-0" aria-hidden="true" />
                <span>{gymInfo.hoursNote}</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <Button
                  asChild
                  className="bg-red hover:bg-red-dark text-white font-bold w-full"
                >
                  <a href={`tel:${gymInfo.phone.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                    Call {gymInfo.phone}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white w-full"
                >
                  <a href={gymInfo.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                    Get Directions
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-gold hover:bg-gold-light text-navy font-bold w-full"
                >
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
