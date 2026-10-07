export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Basketball", href: "#basketball" },
  { label: "Boxing & Muay Thai", href: "#combat" },
  { label: "Gym", href: "#gym" },
  { label: "Rates", href: "#rates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const gymInfo = {
  name: "Reyes Gym Mandaluyong",
  subtitle: "Home of Elorde Reyes Gym and the NBA Community Court",
  tagline: "More Than a Gym—A Mandaluyong Sports Institution",
  established: 1990,
  address:
    "24 Domingo M. Guevara Street, corner Calbayog Street, Highway Hills, Mandaluyong City, Metro Manila 1554, Philippines",
  phone: "(02) 8253-10806",
  phoneAlt: "(02) 656-8419",
  mobile: "+63 929 388 1237",
  email: "bookings@reyesgym.ph",
  hoursNote: "Daily schedule available upon confirmation",
  facebookUrl: "https://www.facebook.com/",
  instagramUrl: "https://www.instagram.com/",
  wazeUrl: "https://www.waze.com/",
  mapsUrl: "https://maps.google.com/",
  courtArea: "1,000 sqm",
};
