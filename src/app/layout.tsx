import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORMA | Strength for Motherhood",
  description:
    "Where luxury and fitness converge to create an unparalleled in-home training experience for mothers. Personalized, expert-led workouts delivered to your doorstep.",
  keywords: [
    "prenatal fitness",
    "postpartum training",
    "in-home personal training",
    "luxury fitness",
    "motherhood wellness",
    "NYC personal training",
  ],
  openGraph: {
    title: "FORMA | Strength for Motherhood",
    description:
      "Luxury in-home fitness for mothers. Personalized training delivered with sophistication and care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
