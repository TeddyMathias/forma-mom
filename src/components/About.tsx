"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-36 bg-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — full width */}
        <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
          About Forma
        </p>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink mb-14 scroll-reveal rv-up rv-d1">
          Where motherhood and fitness <em className="italic">converge.</em>
        </h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — About */}
          <div className="scroll-reveal rv-up rv-d2">
            <p className="text-[11px] tracking-[0.15em] uppercase text-ink/35 font-light mb-5">
              Our Approach
            </p>
            <p className="text-[15px] leading-[1.9] text-ink-muted font-light">
              Your pre/postnatal expert has years of experience training hundreds of women through every stage of motherhood. Our trainers have expertise in pelvic floor health, diastasis and functional strength for motherhood. Each pregnancy is unique and so is each birth story. Our tailored sessions meet you where you are. We cover the basics of safely working out while pregnant, prepare you for labor/delivery and aid in your postpartum recovery to get you feeling strong and ready for the athletic event that is motherhood.
            </p>
          </div>

          {/* Right — Why Strength */}
          <div className="scroll-reveal rv-up rv-d3">
            <p className="text-[11px] tracking-[0.15em] uppercase text-ink/35 font-light mb-5">
              Why Strength
            </p>
            <p className="text-[15px] leading-[1.9] text-ink-muted font-light">
              Emerging research in Exercise Science and Obstetrics shows that strength training during pregnancy improves maternal metabolic health, reduces back and pelvic pain, lowers risk of complications like Gestational Diabetes, and supports better functional strength for labor and postpartum recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
