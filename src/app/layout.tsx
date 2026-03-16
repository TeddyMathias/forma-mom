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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
