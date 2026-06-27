import type { Metadata, Viewport } from "next";
import { Petrona, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const serif = Petrona({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samah Dental Care — Specialist Dental Surgeons in Thane",
  description:
    "Painless, personalised dental care in Charai, Thane. Specialist MDS surgeons Dr. Dikshit & Dr. Riddhi Solanki for root canals, implants, and smile makeovers.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
