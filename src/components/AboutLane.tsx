import Image from "next/image";

export default function AboutLane() {
  return (
    <section id="lane" className="py-24 lg:py-36 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-sand">
              <Image
                src="/lane-slattery.jpg"
                alt="Lane Slattery, founder of Forma and pre/postnatal exercise specialist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[13px] tracking-[0.2em] uppercase text-amber mb-6">
              Meet Your Trainer
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-deep-earth mb-10">
              Lane Slattery
            </h2>
            <div className="space-y-6 text-warm-brown leading-[1.8] text-[15px]">
              <p>
                Lane is a New York City&ndash;based personal trainer and
                pre/postnatal exercise specialist who has trained hundreds of
                women through pregnancy and postpartum.
              </p>
              <p>
                Through her work with The Lotus Method and as an independent
                trainer, she delivers highly personalized programs that help
                clients build strength, confidence, and resilience during one of
                the most transformative stages of life.
              </p>
              <p>
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
