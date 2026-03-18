"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    title: "Consultation",
    description:
      "We begin with an in-depth conversation about your goals, your body, and your stage of motherhood. No two journeys are the same.",
  },
  {
    title: "Custom Program",
    description:
      "Your trainer designs a comprehensive program — from prenatal strengthening to postpartum recovery, core rehabilitation, or general wellness.",
  },
  {
    title: "Expert-Led Sessions",
    description:
      "Every session is led by a pre & postnatal exercise specialist who understands the biomechanics of pregnancy and postpartum recovery.",
  },
  {
    title: "Ongoing Evolution",
    description:
      "As your body changes, your program evolves. We continuously adapt to ensure you feel strong, supported, and empowered.",
  },
];

export default function Approach() {
  const ref = useScrollReveal();

  return (
    <section id="approach" className="py-24 lg:py-36 bg-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
              Our Approach
            </p>
            <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink mb-6 scroll-reveal rv-up rv-d1">
              A journey, not <em className="italic">a workout.</em>
            </h2>
            <p className="text-ink-muted leading-[1.85] text-[15px] max-w-md mb-10 font-light scroll-reveal rv-up rv-d2">
              We don&apos;t believe in one-size-fits-all. Forma is built around the
              understanding that motherhood is a profound transformation — and
              your fitness should honor every phase of it.
            </p>
            <a
              href="#book"
              className="inline-block px-8 py-3.5 bg-espresso text-cream text-[12px] tracking-[0.06em] uppercase rounded-md hover:opacity-85 transition-opacity duration-200 scroll-reveal rv-up rv-d3"
            >
              Start Your Journey
            </a>
          </div>

          <div>
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`py-8 border-t border-border last:border-b scroll-reveal rv-up rv-d${i + 1}`}
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif text-[14px] italic text-camel mt-1 shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.25rem] font-normal text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-ink-muted leading-[1.85] text-[14.5px] font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
