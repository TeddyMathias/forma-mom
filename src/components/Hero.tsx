export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-amber overflow-hidden">
      {/* Subtle organic shapes inspired by Matrescence cover */}
      <div
        className="absolute top-[15%] right-[8%] w-[300px] h-[340px] rounded-[55%_45%_50%_50%/50%_55%_45%_50%] bg-soft-terracotta/20"
      />
      <div
        className="absolute bottom-[12%] right-[20%] w-[180px] h-[200px] rounded-[50%_50%_40%_60%/45%_55%_50%_50%] bg-teal-muted/15"
      />
      <div
        className="absolute bottom-[25%] right-[12%] w-[120px] h-[130px] rounded-[50%] bg-sage/10"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 w-full py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[13px] tracking-[0.25em] uppercase text-cream/70 mb-8 animate-fade-in-up opacity-0 delay-100">
            Prenatal &middot; Postpartum &middot; Beyond
          </p>

          <h1 className="font-serif text-[clamp(3.2rem,7.5vw,6.5rem)] font-normal leading-[1.02] text-cream mb-8 animate-fade-in-up opacity-0 delay-200">
            Strength for
            <br />
            motherhood.
          </h1>

          <p className="text-[17px] text-cream/75 leading-relaxed max-w-lg mb-12 animate-fade-in-up opacity-0 delay-300 font-light">
            Personalized, expert-led fitness brought to your doorstep.
            Every session is designed to support your body through
            every stage of the journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-400">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-9 py-3.5 bg-cream text-amber-dark text-[13px] font-medium tracking-[0.12em] uppercase rounded-full hover:bg-white transition-colors duration-300"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-9 py-3.5 border border-cream/30 text-cream text-[13px] tracking-[0.12em] uppercase rounded-full hover:border-cream/60 transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-500">
        <div className="w-px h-10 bg-cream/25" />
      </div>
    </section>
  );
}
