"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-32 pb-24 bg-sand overflow-hidden">
      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full text-center">
        <div className="max-w-[600px] mx-auto">
          <p className="text-[12px] tracking-[0.14em] uppercase text-camel mb-7 font-medium anim-rise d1">
            NYC &middot; Prenatal &middot; Postpartum &middot; Beyond
          </p>

          <h1 className="font-serif text-[clamp(3rem,7vw,5.2rem)] font-normal leading-[1.08] text-ink mb-7 anim-rise d2">
            Strength for <em className="italic">motherhood.</em>
          </h1>

          <p className="text-[16.5px] text-ink-muted leading-[1.85] max-w-[420px] mx-auto mb-10 font-light anim-rise d3">
            Personalized, expert-led fitness designed for
            every stage of motherhood. In-home, studio,
            and virtual sessions on your terms.
          </p>

          <div className="flex flex-wrap gap-3 justify-center anim-rise d4">
            <a
              href="#book"
              className="relative px-9 py-3.5 text-white text-[12px] tracking-[0.06em] uppercase transition-all duration-300 hover:scale-105"
            >
              <span
                className="absolute inset-0 bg-camel transition-[border-radius] duration-500"
                style={{ borderRadius: "58% 42% 55% 45% / 50% 55% 45% 50%" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderRadius = "42% 58% 45% 55% / 55% 45% 50% 50%"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderRadius = "58% 42% 55% 45% / 50% 55% 45% 50%"; }}
              />
              <span className="relative">Book a Consultation</span>
            </a>
            <a
              href="#services"
              className="px-9 py-3.5 border-[1.5px] border-espresso text-espresso text-[12px] tracking-[0.06em] uppercase rounded-md hover:bg-espresso hover:text-cream transition-all duration-200"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-6 lg:left-12 anim-appear d6">
        <div className="w-px h-12 bg-ink/15" />
      </div>
    </section>
  );
}
