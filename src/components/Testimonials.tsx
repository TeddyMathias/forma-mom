const testimonials = [
  {
    quote:
      "Forma completely transformed my postpartum recovery. I went from feeling disconnected from my body to feeling stronger than I did before pregnancy. The in-home convenience made it actually possible as a new mom.",
    name: "Alexandra M.",
    detail: "Mom of two, Upper West Side",
    accent: "bg-blush/15",
  },
  {
    quote:
      "The level of personalization is unmatched. My trainer understood exactly what my body needed during my third trimester and adjusted every session. I felt safe, supported, and genuinely cared for.",
    name: "Sarah K.",
    detail: "Prenatal client, Tribeca",
    accent: "bg-terracotta-light/10",
  },
  {
    quote:
      "As a busy working mom, having a world-class trainer come to my apartment felt like an incredible luxury. But it's more than that — it's an investment in myself that has paid dividends in my energy, my mood, and my confidence.",
    name: "Maya R.",
    detail: "Mom of one, Brooklyn Heights",
    accent: "bg-golden/10",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 lg:py-36 bg-deep-brown relative overflow-hidden"
    >
      {/* Organic shapes on dark background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-terracotta/5 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blush/5 -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-terracotta-light mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-cream mb-6">
            Real mothers,
            <br />
            <span className="italic text-blush">real strength.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`rounded-3xl p-10 ${testimonial.accent} backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300`}
            >
              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-terracotta-light/40 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <blockquote className="text-cream/90 leading-relaxed mb-8 text-[15px]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/30 flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-cream">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-cream text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-cream/50 text-xs tracking-wider">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
