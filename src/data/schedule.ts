export type TimeSlot = {
  id: string;
  time: string;
  status: "available" | "limited" | "reserved" | "unavailable";
};

export type DaySchedule = {
  day: string;
  short: string;
  slots: TimeSlot[];
};

export const timeSlotLabels: Record<TimeSlot["status"], string> = {
  available: "Available",
  limited: "Limited Slots",
  reserved: "Reserved",
  unavailable: "Unavailable",
};

const sampleStatuses: TimeSlot["status"][] = [
  "available",
  "available",
  "limited",
  "reserved",
  "available",
  "unavailable",
  "available",
  "limited",
];

const timeLabels = [
  "7:00 AM",
  "9:00 AM",
  "11:00 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
  "7:00 PM",
  "9:00 PM",
];

export const weeklySchedule: DaySchedule[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((day, dayIdx) => ({
  day,
  short: day.slice(0, 3),
  slots: timeLabels.map((time, slotIdx) => ({
    id: `slot-${dayIdx}-${slotIdx}`,
    time,
    status: sampleStatuses[(slotIdx + dayIdx) % sampleStatuses.length],
  })),
}));
