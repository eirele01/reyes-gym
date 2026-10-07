"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animation/reveal";
import { galleryItems, galleryCategories, type GalleryItem } from "@/data/gallery";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  };

  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="bg-navy text-white py-16 md:py-24 lg:py-28 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="absolute inset-0 court-lines opacity-20" aria-hidden="true" />

      <div className="container-gym relative">
        {/* Header */}
        <Reveal className="max-w-2xl mb-8 md:mb-10">
          <span className="font-heading text-gold text-sm font-bold uppercase tracking-[0.2em]">
            Gallery
          </span>
          <h2
            id="gallery-heading"
            className="font-heading font-bold text-white uppercase leading-tight tracking-tight mt-3 text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Inside Reyes Gym
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            A look at the court, the training floor, and the community that
            makes Reyes Gym what it is.
          </p>
        </Reveal>

        {/* Category Filters */}
        <Reveal className="mb-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`px-4 h-9 rounded-md text-xs md:text-sm font-bold uppercase tracking-wide transition-colors min-h-[44px] flex items-center ${
                  activeCategory === cat.id
                    ? "bg-red text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" stagger={0.08}>
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}>
              <button
                onClick={() => openLightbox(item)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-navy-light w-full block"
                aria-label={`View ${item.title} - ${item.caption}`}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/90 text-white">
                    <ZoomIn className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <div className="font-heading font-bold text-white text-xs md:text-sm uppercase tracking-wide">
                    {item.title}
                  </div>
                  <div className="text-white/70 text-[10px] md:text-xs">
                    {item.caption}
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-navy border-white/10 max-h-[90vh]">
          <DialogTitle className="sr-only">
            {currentItem?.title} - {currentItem?.caption}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Image viewer. Use previous and next buttons to navigate through gallery images.
          </DialogDescription>
          {currentItem && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 text-white hover:bg-red transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev button */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 text-white hover:bg-red transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 text-white hover:bg-red transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={currentItem.image}
                  alt={currentItem.caption}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="font-heading font-bold text-white text-lg md:text-xl uppercase tracking-wide">
                  {currentItem.title}
                </div>
                <div className="text-white/70 text-sm mt-0.5">
                  {currentItem.caption}
                </div>
                <div className="mt-2 text-gold text-xs font-bold uppercase tracking-widest">
                  {currentItem.category.replace("-", " ")}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
