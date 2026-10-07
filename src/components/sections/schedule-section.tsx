"use client";

import { useState } from "react";
import { Calendar, Clock, Info } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { weeklySchedule, timeSlotLabels, type TimeSlot } from "@/data/schedule";

const statusStyles: Record<TimeSlot["status"], string> = {
  available: "bg-success/20 text-success border-success/40 hover:bg-success/30",
  limited: "bg-warning/20 text-warning border-warning/40 hover:bg-warning/30",
  reserved: "bg-slate/25 text-slate border-slate/40 cursor-not-allowed",
  unavailable: "bg-navy/15 text-navy/50 border-navy/25 cursor-not-allowed line-through",
};

export function ScheduleSection() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSlotClick = (slot: TimeSlot, day: string) => {
    if (slot.status === "reserved" || slot.status === "unavailable") return;
    setSelectedSlot(`${day} - ${slot.time} (${timeSlotLabels[slot.status]})`);
  };

  return (
    <section
      id="schedule"
      className="bg-gray-light py-16 md:py-24 lg:py-28"
      aria-labelledby="schedule-heading"
    >
      <div className="container-gym">
        {/* Header */}
        <Reveal className="max-w-2xl mb-8 md:mb-10">
          <span className="font-heading text-red text-sm font-bold uppercase tracking-[0.2em]">
            Schedule
          </span>
          <h2
            id="schedule-heading"
            className="font-heading font-bold text-charcoal uppercase leading-tight tracking-tight mt-3 text-balance"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            Court Availability
          </h2>
          <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">
            A sample weekly view of court time slots. This is a visual
            mockup&mdash;actual availability is confirmed on request.
          </p>
        </Reveal>

        {/* Legend */}
        <Reveal className="mb-6">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-xs text-slate font-medium uppercase tracking-wide flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5" aria-hidden="true" />
              Legend:
            </span>
            {(Object.keys(timeSlotLabels) as TimeSlot["status"][]).map((status) => (
              <span
                key={status}
                className="inline-flex items-center gap-1.5 text-xs font-medium"
              >
                <span
                  className={`h-3 w-3 rounded border ${statusStyles[status]}`}
                  aria-hidden="true"
                />
                {timeSlotLabels[status]}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Schedule Grid */}
        <Reveal>
          <div className="bg-white rounded-xl border border-soft-border shadow-gym overflow-hidden">
            {/* Desktop Schedule */}
            <div className="hidden md:block overflow-x-auto scrollbar-gym">
              <div className="min-w-[760px]">
                {/* Header Row */}
                <div className="grid grid-cols-8 bg-navy text-white">
                  <div className="p-3 text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    Time
                  </div>
                  {weeklySchedule.map((day) => (
                    <div
                      key={day.day}
                      className="p-3 text-center text-xs font-heading font-bold uppercase tracking-wide border-l border-white/10"
                    >
                      {day.short}
                    </div>
                  ))}
                </div>

                {/* Time Rows */}
                {weeklySchedule[0].slots.map((_, slotIdx) => (
                  <div key={slotIdx} className="grid grid-cols-8 border-t border-soft-border">
                    <div className="p-2.5 text-xs font-medium text-slate bg-gray-light flex items-center">
                      {weeklySchedule[0].slots[slotIdx].time}
                    </div>
                    {weeklySchedule.map((day) => {
                      const slot = day.slots[slotIdx];
                      const isSelected = selectedSlot === `${day.day} - ${slot.time} (${timeSlotLabels[slot.status]})`;
                      return (
                        <button
                          key={slot.id}
                          onClick={() => handleSlotClick(slot, day.day)}
                          disabled={slot.status === "reserved" || slot.status === "unavailable"}
                          className={`p-2.5 text-[11px] font-bold uppercase tracking-wide border-l border-t border-soft-border transition-all min-h-[44px] flex items-center justify-center text-center ${statusStyles[slot.status]} ${
                            isSelected ? "ring-2 ring-red ring-inset" : ""
                          }`}
                          aria-label={`${day.day} ${slot.time} - ${timeSlotLabels[slot.status]}`}
                        >
                          {timeSlotLabels[slot.status].split(" ")[0]}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Schedule - Stacked by Day */}
            <div className="md:hidden divide-y divide-soft-border max-h-[500px] overflow-y-auto scrollbar-gym">
              {weeklySchedule.map((day) => (
                <div key={day.day} className="p-3">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Calendar className="h-4 w-4 text-navy" aria-hidden="true" />
                    <span className="font-heading font-bold text-charcoal text-sm uppercase tracking-wide">
                      {day.day}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {day.slots.map((slot) => {
                      const isSelected = selectedSlot === `${day.day} - ${slot.time} (${timeSlotLabels[slot.status]})`;
                      return (
                        <button
                          key={slot.id}
                          onClick={() => handleSlotClick(slot, day.day)}
                          disabled={slot.status === "reserved" || slot.status === "unavailable"}
                          className={`p-2 rounded text-[10px] font-bold uppercase tracking-wide border transition-all min-h-[44px] flex flex-col items-center justify-center text-center ${statusStyles[slot.status]} ${
                            isSelected ? "ring-2 ring-red ring-inset" : ""
                          }`}
                          aria-label={`${day.day} ${slot.time} - ${timeSlotLabels[slot.status]}`}
                        >
                          <span>{slot.time}</span>
                          <span className="text-[9px] mt-0.5 opacity-80">
                            {timeSlotLabels[slot.status]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Selected Slot Display */}
        {selectedSlot && (
          <Reveal className="mt-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-navy text-white rounded-lg p-4 md:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-navy">
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wide font-medium">
                    Selected Slot
                  </div>
                  <div className="font-heading font-bold text-white text-base md:text-lg">
                    {selectedSlot}
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md bg-red hover:bg-red-dark text-white font-bold text-sm uppercase tracking-wide transition-colors w-full sm:w-auto min-h-[44px]"
              >
                Book This Slot
              </a>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-4">
          <p className="text-xs text-slate text-center italic">
            Mockup schedule for demonstration. Real availability may vary&mdash;please confirm with us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
