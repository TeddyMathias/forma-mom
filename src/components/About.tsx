"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-36 bg-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
          About Forma
        </p>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink max-w-[540px] mb-10 scroll-reveal rv-up rv-d1">
          Where luxury and fitness converge to create an <em className="italic">unparalleled experience.</em>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-[780px] mb-14">
          <p className="text-[15px] leading-[1.9] text-ink-muted font-light scroll-reveal rv-up rv-d2">
            Our white-glove service brings personalized, expert-led workouts
            directly to your doorstep, transforming your space into a private
            sanctuary. Each session is meticulously tailored to your unique goals.
          </p>
          <p className="text-[15px] leading-[1.9] text-ink-muted font-light scroll-reveal rv-up rv-d3">
            From prenatal preparation to postpartum recovery and beyond,
            our certified specialists understand the profound physical
            transformations of motherhood.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row border-t border-b border-border scroll-reveal rv-up rv-d4">
          {[
            { value: "XX", label: "Mothers trained" },
            { value: "XX", label: "Sessions delivered" },
            { value: "XX", label: "Years of experience" },
            { value: "XX", label: "Client satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 py-7 text-center ${i < 3 ? "sm:border-r sm:border-border" : ""} ${i > 0 ? "border-t sm:border-t-0 border-border" : ""}`}
            >
              <p className="font-serif text-[2.4rem] text-ink">
                {stat.value}
              </p>
              <p className="text-[10px] tracking-[0.12em] uppercase text-ink/40 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
