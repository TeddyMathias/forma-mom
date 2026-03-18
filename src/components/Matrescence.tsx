"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Matrescence() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #5C4A38 0%, #5A3A30 50%, #6A2828 100%)",
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="matrescence-orb absolute top-1/4 left-1/4 w-[340px] h-[340px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(193,162,128,0.35) 0%, transparent 70%)" }}
        />
        <div
          className="matrescence-orb-2 absolute bottom-1/4 right-1/4 w-[280px] h-[280px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(106,40,40,0.4) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
            What Inspires Us
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-cream scroll-reveal rv-up rv-d1">
            Matrescence.
          </h2>
        </div>

        <div className="max-w-[780px]">
          <p className="text-cream/50 leading-[1.85] text-[15px] font-light mb-10 scroll-reveal rv-up rv-d2">
            Matrescence is the profound, multifaceted process of becoming a mother, encompassing immense physical, psychological, social, and hormonal changes from pregnancy through the postpartum period and beyond. Similar to adolescence, this transformative journey involves significant brain remodeling and identity shifts, often lasting for years or a lifetime.
          </p>
          <p className="font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] italic text-cream leading-[1.5] scroll-reveal rv-up rv-d3">
            This is the season of life we train for.
          </p>
        </div>
      </div>
    </section>
  );
}
