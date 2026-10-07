import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reyes Gym Mandaluyong | Basketball, Boxing, Muay Thai and Fitness",
  description:
    "Train, compete, and stay active at Reyes Gym Mandaluyong, offering basketball court access, boxing, Muay Thai, and strength training under one roof since 1990.",
  keywords: [
    "Reyes Gym",
    "Mandaluyong gym",
    "basketball court rental",
    "boxing training",
    "Muay Thai",
    "fitness Mandaluyong",
    "sports facility Manila",
  ],
  authors: [{ name: "Reyes Gym Mandaluyong" }],
  openGraph: {
    title: "Reyes Gym Mandaluyong | Basketball, Boxing, Muay Thai and Fitness",
    description:
      "Mandaluyong's home for basketball, boxing and fitness since 1990. Train with experienced coaches, book our indoor court, or build your strength.",
    siteName: "Reyes Gym Mandaluyong",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reyes Gym Mandaluyong",
    description:
      "Basketball, boxing, Muay Thai and strength training under one roof since 1990.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
