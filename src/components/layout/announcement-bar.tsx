import { Phone, MapPin } from "lucide-react";
import { gymInfo } from "@/data/navigation";

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white text-xs sm:text-sm">
      <div className="container-gym flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-2 min-w-0">
          <MapPin className="h-3.5 w-3.5 text-gold flex-shrink-0" aria-hidden="true" />
          <span className="truncate hidden sm:inline">
            Highway Hills, Mandaluyong City
          </span>
          <span className="sm:hidden">Mandaluyong City</span>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="hidden md:inline text-white/70">
            {gymInfo.hoursNote}
          </span>
          <a
            href={`tel:${gymInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 font-medium hover:text-gold transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{gymInfo.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
