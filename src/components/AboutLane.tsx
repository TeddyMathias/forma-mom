"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutLane() {
  const ref = useScrollReveal();

  return (
    <section id="lane" className="py-24 lg:py-36 bg-sand" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end scroll-reveal rv-blob rv-d1">
            <div
              className="relative w-[280px] h-[320px] lg:w-[340px] lg:h-[400px] overflow-hidden float-breathe"
              style={{ borderRadius: "62% 38% 56% 44% / 48% 58% 42% 52%" }}
            >
              <Image
                src="/lane-slattery.jpg"
                alt="Lane Slattery, founder of Forma and pre/postnatal exercise specialist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 280px, 340px"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
              Meet Your Trainer
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3.8vw,2.6rem)] font-normal leading-[1.22] text-ink mb-8 scroll-reveal rv-up rv-d1">
              Lane Slattery
            </h2>
            <div className="space-y-5 text-ink-muted leading-[1.85] text-[15px] font-light">
              <p className="scroll-reveal rv-up rv-d2">
                Lane is a New York City&ndash;based personal trainer and
                pre/postnatal exercise specialist who has trained hundreds of
                women through pregnancy and postpartum.
              </p>
              <p className="scroll-reveal rv-up rv-d3">
                Through her work with The Lotus Method and as an independent
                trainer, she delivers highly personalized programs that help
                clients build strength, confidence, and resilience during one of
                the most transformative stages of life.
              </p>
              <p className="scroll-reveal rv-up rv-d4">
                Before transitioning into fitness, Lane had a successful career
                as a professional dancer, performing in the Off-Broadway
                production <em>Queen of the Night</em> and the national tour of{" "}
                <em>Dirty Dancing</em>, which informs her deep expertise in
                movement and body mechanics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
