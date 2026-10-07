"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-navy -mt-16"
      aria-label="Reyes Gym Mandaluyong hero"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: reduceMotion ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduceMotion ? 0.01 : 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero-basketball.png"
          alt="Basketball action at Reyes Gym Mandaluyong indoor court"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-transparent to-navy/40" />

      {/* Court Line Motif */}
      <div className="absolute inset-0 z-10 court-lines opacity-40" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="container-gym relative z-20 pt-24 pb-20 lg:pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="font-heading text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              Serving Mandaluyong Since 1990
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-white uppercase leading-[0.95] tracking-tight text-balance"
            style={{ fontSize: "clamp(2.625rem, 7vw, 5rem)" }}
          >
            Mandaluyong&rsquo;s Home for{" "}
            <span className="text-red">Basketball</span>,{" "}
            <span className="text-gold">Boxing</span> and{" "}
            <span className="text-white">Fitness</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Train with experienced coaches, book our indoor basketball court, or
            build your strength at a community sports institution serving
            Mandaluyong since 1990.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 md:h-13 px-7 rounded-md bg-red hover:bg-red-dark text-white font-bold text-sm md:text-base uppercase tracking-wide shadow-gym-lg transition-all hover:scale-[1.02] min-h-[44px]"
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Book the Court
            </a>
            <a
              href="#combat"
              className="inline-flex items-center justify-center gap-2 h-12 md:h-13 px-7 rounded-md border-2 border-white/70 text-white hover:bg-white/10 font-bold text-sm md:text-base uppercase tracking-wide transition-all min-h-[44px]"
            >
              Explore Training
            </a>
            <a
              href="#rates"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-gold font-medium text-sm md:text-base transition-colors group min-h-[44px] px-2"
            >
              View Current Rates
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.5, duration: 0.8 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
        <motion.div
          animate={
            reduceMotion
              ? {}
              : { y: [0, 8, 0] }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-5 w-5 text-white/50" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
