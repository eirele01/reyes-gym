import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { BasketballSection } from "@/components/sections/basketball-section";
import { CombatSection } from "@/components/sections/combat-section";
import { GymSection } from "@/components/sections/gym-section";
import { HeritageSection } from "@/components/sections/heritage-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { RatesSection } from "@/components/sections/rates-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { LocationSection } from "@/components/sections/location-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BasketballSection />
        <CombatSection />
        <GymSection />
        <HeritageSection />
        <ScheduleSection />
        <RatesSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
