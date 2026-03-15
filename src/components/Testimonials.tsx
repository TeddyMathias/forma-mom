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
  return (
    <section id="stories" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <p className="text-[13px] tracking-[0.2em] uppercase text-sage mb-6">
            Client Stories
          </p>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.1] text-deep-earth">
            Real mothers, <em className="text-warm-brown">real strength.</em>
          </h2>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col">
              {/* Quote */}
              <blockquote className="text-warm-brown leading-[1.8] mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="pt-6 border-t border-sand">
                <p className="font-serif text-lg text-deep-earth">{t.name}</p>
                <p className="text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mt-1">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
