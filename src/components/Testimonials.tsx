"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Forma completely transformed my postpartum recovery. I went from feeling disconnected from my body to feeling stronger than before pregnancy. The in-home convenience made it actually possible as a new mom.",
    name: "Alexandra M.",
    detail: "Mom of two, Upper West Side",
  },
  {
    quote:
      "The level of personalization is unmatched. My trainer understood exactly what my body needed during my third trimester and adjusted every session. I felt safe, supported, and genuinely cared for.",
    name: "Sarah K.",
    detail: "Prenatal client, Tribeca",
  },
  {
    quote:
      "As a busy working mom, having a world-class trainer come to my apartment felt like an incredible luxury. But it's more than that — it's an investment in myself that has paid dividends in my energy and confidence.",
    name: "Maya R.",
    detail: "Mom of one, Brooklyn Heights",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section
      id="stories"
      className="py-24 lg:py-36"
      style={{ background: "linear-gradient(135deg, #5C4A38 0%, #5A3A30 50%, #6A2828 100%)" }}
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
            Client Stories
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-cream scroll-reveal rv-up rv-d1">
            Real mothers, <em className="italic">real strength.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`flex flex-col scroll-reveal rv-up rv-d${i + 2}`}>
              {/* Giant quotation mark */}
              <p className="font-serif text-[4rem] leading-none text-camel mb-3">
                &ldquo;
              </p>

              <p className="text-cream/50 leading-[1.85] text-[15px] mb-8 flex-1 font-light">
                {t.quote}
              </p>

              <div className="w-8 h-px bg-camel mb-4" />
              <p className="font-serif text-[15px] text-cream">{t.name}</p>
              <p className="text-[11px] text-cream/30 mt-1 tracking-[0.04em]">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
