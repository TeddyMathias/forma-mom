"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "i.",
    title: "In-Home Training",
    description:
      "Workouts brought directly to your doorstep. Whether in your home or your building's fitness center, experience the convenience you deserve with personalized sessions designed around your schedule.",
    detail: "Manhattan & Brooklyn",
    image: "/location-in-home.svg",
  },
  {
    num: "ii.",
    title: "Training at NYLO",
    description:
      "Ready to get out of the house? We offer personal and small group training at NYLO in Tribeca — a beautiful studio space where you can focus entirely on yourself.",
    detail: "Tribeca, NYC",
    image: "/location-nylo.svg",
  },
  {
    num: "iii.",
    title: "Virtual Sessions",
    description:
      "Receive tailor-made sessions from anywhere in the world. The same expertise and personalization of our in-person sessions, delivered to your screen.",
    detail: "Worldwide",
    image: "/location-virtual.svg",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-36 bg-sand" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
            Our Services
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink max-w-[540px] scroll-reveal rv-up rv-d1">
            Training designed <em className="italic">around you.</em>
          </h2>
        </div>

        {/* Grid with 2px gap lines */}
        <div className="grid lg:grid-cols-3 gap-[2px] bg-border rounded-md overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-cream scroll-reveal rv-up rv-d${i + 2}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-9">
                <p className="font-serif text-[2rem] italic text-camel mb-5">
                  {service.num}
                </p>
                <h3 className="font-serif text-[1.25rem] font-normal text-ink mb-1">
                  {service.title}
                </h3>
                <p className="text-[10px] tracking-[0.1em] uppercase text-ink/40 mb-4">
                  {service.detail}
                </p>
                <p className="text-ink-muted leading-[1.85] text-[14.5px] font-light mb-5">
                  {service.description}
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase text-camel hover:text-camel-dark transition-colors font-medium"
                >
                  Book
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
