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
    <section id="stories" className="py-24 lg:py-36 bg-deep-earth relative overflow-hidden">
      {/* Subtle organic shapes on dark bg — inspired by Matrescence cover */}
      <div className="absolute top-[10%] right-[10%] w-[220px] h-[250px] rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-soft-terracotta/[0.08]" />
      <div className="absolute bottom-[15%] left-[8%] w-[150px] h-[170px] rounded-[50%_50%_40%_60%/45%_55%_50%_50%] bg-teal-muted/[0.06]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mb-20">
          <p className="text-[13px] tracking-[0.2em] uppercase text-amber-light mb-6">
            Client Stories
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-cream">
            Real mothers, <em>real strength.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col">
              <blockquote className="text-cream/70 leading-[1.8] text-[15px] mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="pt-6 border-t border-cream/10">
                <p className="font-serif text-lg text-cream">{t.name}</p>
                <p className="text-[11px] tracking-[0.12em] uppercase text-cream/40 mt-1">
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
