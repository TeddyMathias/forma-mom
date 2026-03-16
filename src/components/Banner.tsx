"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Banner() {
  const ref = useScrollReveal();

  return (
    <section className="py-24 lg:py-36 bg-sand" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className="rounded-xl p-14 lg:p-16 text-center scroll-reveal rv-scale"
          style={{ background: "linear-gradient(135deg, #D8C8B0 0%, #C49A6C 100%)" }}
        >
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink mb-4">
            You deserve to feel strong.
          </h2>
          <p className="text-ink-muted leading-[1.85] text-[15px] max-w-lg mx-auto mb-10 font-light">
            Whether you&apos;re preparing for birth, navigating the fourth trimester,
            or reclaiming your fitness years into motherhood — Forma is here
            for every chapter.
          </p>
          <a
            href="#book"
            className="inline-block px-9 py-3.5 bg-espresso text-cream text-[12px] tracking-[0.06em] uppercase rounded-md hover:opacity-85 transition-opacity duration-200"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}
