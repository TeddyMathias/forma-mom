import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://forma.mom";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Forma: Strength for Motherhood",
    template: "%s | FORMA",
  },
  description:
    "Expert-led prenatal and postpartum strength training in NYC. Personalized in-home, studio, and virtual sessions in Manhattan, Brooklyn, and beyond — for every stage of motherhood.",
  keywords: [
    "prenatal fitness NYC",
    "postpartum training New York",
    "in-home personal trainer Manhattan",
    "postnatal exercise specialist",
    "pregnancy workout NYC",
    "luxury fitness for moms",
    "postpartum recovery training",
    "prenatal personal trainer Brooklyn",
    "Tribeca fitness studio",
    "NYLO training",
    "fourth trimester fitness",
    "mom fitness NYC",
    "pre and postnatal exercise",
    "in-home workout Manhattan",
    "Lane Slattery trainer",
  ],
  authors: [{ name: "Forma" }],
  creator: "Forma",
  publisher: "Forma",
  formatDetection: {
    telephone: true,
    email: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Forma: Strength for Motherhood",
    description:
      "Expert-led prenatal and postpartum strength training in NYC. Personalized in-home, studio, and virtual sessions in Manhattan, Brooklyn, and beyond — for every stage of motherhood.",
    url: siteUrl,
    siteName: "Forma: Strength for Motherhood",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FORMA — Prenatal and postpartum strength training in NYC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma: Strength for Motherhood",
    description:
      "Expert-led prenatal and postpartum strength training in NYC. Personalized in-home, studio, and virtual sessions in Manhattan, Brooklyn, and beyond — for every stage of motherhood.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Forma",
  description:
    "Luxury prenatal and postpartum fitness training. Personalized in-home sessions in Manhattan and Brooklyn, studio training at NYLO Tribeca, and virtual programs worldwide.",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  telephone: "",
  email: "hello@forma.mom",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.006,
  },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "Borough", name: "Manhattan" },
    { "@type": "Borough", name: "Brooklyn" },
  ],
  serviceType: [
    "Prenatal Fitness Training",
    "Postpartum Recovery Training",
    "In-Home Personal Training",
    "Virtual Fitness Training",
  ],
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "21:00",
  },
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve for in-home training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We currently offer in-home training across Manhattan and Brooklyn. We also offer virtual sessions worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "When can I start training during pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With your doctor's clearance, you can begin at any stage of pregnancy. We tailor every program to where you are.",
      },
    },
    {
      "@type": "Question",
      name: "How soon after giving birth can I start postpartum training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, we recommend waiting 6–8 weeks for vaginal births and 10–12 weeks for cesarean births, with your physician's approval.",
      },
    },
    {
      "@type": "Question",
      name: "What equipment do I need at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just a small amount of open floor space. Your trainer will let you know if any specific items are helpful for your program, but most sessions require minimal equipment.",
      },
    },
    {
      "@type": "Question",
      name: "How long are the sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions are typically 50–60 minutes. We also offer 30-minute express sessions for new mothers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a long-term commitment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No contracts or long-term commitments required. We offer flexible packages and a pay-as-you-go option.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
