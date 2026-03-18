"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "In-Home Training",
    description:
      "Expert-led personal training in the comfort of your home or your building's fitness center. Experience the convenience you deserve with sessions designed around your schedule.",
    detail: "Manhattan & Brooklyn",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Training at a Studio Near You",
    description:
      "Enjoy bespoke personal training sessions at premium gyms and private studios conveniently located near you.",
    detail: "NYC Studios",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M6 8H5a4 4 0 0 0 0 8h1" />
        <line x1="6" y1="12" x2="18" y2="12" />
        <line x1="6" y1="8" x2="6" y2="16" />
        <line x1="18" y1="8" x2="18" y2="16" />
      </svg>
    ),
  },
  {
    title: "Virtual Sessions",
    description:
      "Receive tailor-made sessions from anywhere in the world. The same expertise and personalization of our in-person sessions, delivered to your screen.",
    detail: "Worldwide",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
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
              <div className="p-9">
                <div className="w-14 h-14 rounded-full bg-espresso/[0.07] flex items-center justify-center text-camel mb-6">
                  {service.icon}
                </div>
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
