"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  participants: z
    .string()
    .min(1, "Please enter number of participants"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const serviceOptions = [
  { value: "basketball-court", label: "Basketball Court Rental" },
  { value: "boxing", label: "Boxing Session" },
  { value: "muay-thai", label: "Muay Thai Session" },
  { value: "gym", label: "Gym Day Pass / Membership" },
  { value: "event", label: "Group / Event Booking" },
  { value: "other", label: "Other Inquiry" },
];

const timeSlots = [
  "7:00 AM - 9:00 AM",
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
  "9:00 PM - 10:00 PM",
];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [reference, setReference] = useState("");
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      participants: "",
      message: "",
    },
  });

  const serviceValue = watch("service"); // eslint-disable-line react-hooks/incompatible-library
  const timeValue = watch("preferredTime");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);

    // Generate mock reference
    const ref = `RG-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setReference(ref);
    setSubmittedData(data);
    setShowConfirm(true);

    toast({
      title: "Request submitted",
      description: "Your mock booking request has been received.",
    });
  };

  const handleDialogClose = () => {
    setShowConfirm(false);
    reset();
    setSubmittedData(null);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName" className="text-sm font-medium text-charcoal">
              Full Name <span className="text-red">*</span>
            </label>
            <Input
              id="fullName"
              placeholder="Juan Dela Cruz"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
              className="h-11"
            />
            {errors.fullName && (
              <p className="text-xs text-red" role="alert">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-charcoal">
              Email <span className="text-red">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@email.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              className="h-11"
            />
            {errors.email && (
              <p className="text-xs text-red" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-charcoal">
              Phone <span className="text-red">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="0917 000 0000"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              className="h-11"
            />
            {errors.phone && (
              <p className="text-xs text-red" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Participants */}
          <div className="space-y-1.5">
            <label htmlFor="participants" className="text-sm font-medium text-charcoal">
              Participants <span className="text-red">*</span>
            </label>
            <Input
              id="participants"
              type="number"
              min="1"
              placeholder="e.g. 10"
              {...register("participants")}
              aria-invalid={!!errors.participants}
              className="h-11"
            />
            {errors.participants && (
              <p className="text-xs text-red" role="alert">
                {errors.participants.message}
              </p>
            )}
          </div>

          {/* Service */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-charcoal">
              Service <span className="text-red">*</span>
            </label>
            <Select
              value={serviceValue}
              onValueChange={(val) => setValue("service", val, { shouldValidate: true })}
            >
              <SelectTrigger className="h-11" aria-label="Select a service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-xs text-red" role="alert">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Preferred Date */}
          <div className="space-y-1.5">
            <label htmlFor="preferredDate" className="text-sm font-medium text-charcoal">
              Preferred Date <span className="text-red">*</span>
            </label>
            <Input
              id="preferredDate"
              type="date"
              min={today}
              {...register("preferredDate")}
              aria-invalid={!!errors.preferredDate}
              className="h-11"
            />
            {errors.preferredDate && (
              <p className="text-xs text-red" role="alert">
                {errors.preferredDate.message}
              </p>
            )}
          </div>
        </div>

        {/* Preferred Time */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-charcoal">
            Preferred Time <span className="text-red">*</span>
          </label>
          <Select
            value={timeValue}
            onValueChange={(val) => setValue("preferredTime", val, { shouldValidate: true })}
          >
            <SelectTrigger className="h-11" aria-label="Select a time slot">
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.preferredTime && (
            <p className="text-xs text-red" role="alert">
              {errors.preferredTime.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-charcoal">
            Message <span className="text-slate text-xs">(optional)</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your booking, team size, or any questions..."
            {...register("message")}
            className="min-h-[100px] resize-y"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-red hover:bg-red-dark text-white font-bold uppercase tracking-wide text-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" aria-hidden="true" />
              Send Inquiry
            </>
          )}
        </Button>

        <p className="text-xs text-slate text-center">
          This is a mockup form. No real booking will be created.
        </p>
      </form>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                <CalendarCheck className="h-7 w-7" aria-hidden="true" />
              </div>
            </div>
            <DialogTitle className="font-heading text-2xl font-bold text-charcoal uppercase tracking-wide text-center">
              Request Received
            </DialogTitle>
            <DialogDescription className="text-center text-slate">
              Your request has been added to this website mockup. No real
              reservation was submitted.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-gray-light rounded-lg p-4 space-y-2 my-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate uppercase tracking-wide font-medium">
                Reference No.
              </span>
              <span className="font-heading font-bold text-navy text-lg">
                {reference}
              </span>
            </div>
            {submittedData && (
              <>
                <div className="border-t border-soft-border pt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Name</span>
                    <span className="font-medium text-charcoal">{submittedData.fullName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Service</span>
                    <span className="font-medium text-charcoal capitalize">
                      {serviceOptions.find((o) => o.value === submittedData.service)?.label || submittedData.service}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Date</span>
                    <span className="font-medium text-charcoal">{submittedData.preferredDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Time</span>
                    <span className="font-medium text-charcoal">{submittedData.preferredTime}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <p className="text-xs text-slate text-center leading-relaxed">
            For real bookings, please call or message us directly using the
            contact details on this page.
          </p>

          <DialogFooter className="sm:justify-center gap-2">
            <Button
              variant="outline"
              onClick={handleDialogClose}
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              Close
            </Button>
            <Button
              onClick={handleDialogClose}
              className="bg-red hover:bg-red-dark text-white"
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
