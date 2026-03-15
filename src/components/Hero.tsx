export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-soft-peach/40 via-cream-warm to-cream">
      {/* Single subtle organic shape */}
      <div
        className="absolute bottom-[10%] right-[8%] w-[280px] h-[280px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-sage/[0.06]"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <p className="text-[13px] tracking-[0.2em] uppercase text-sage mb-8 animate-fade-in-up opacity-0 delay-100">
            Prenatal &middot; Postpartum &middot; Beyond
          </p>

          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-normal leading-[1.05] text-deep-earth mb-8 animate-fade-in-up opacity-0 delay-200">
            Strength for
            <br />
            <em className="text-warm-brown">motherhood.</em>
          </h1>

          <p className="text-lg text-warm-brown-light leading-relaxed max-w-xl mb-12 animate-fade-in-up opacity-0 delay-300 lg:max-w-lg">
            Personalized, expert-led fitness brought to your doorstep.
            Every session is designed to support your body through
            every stage of the journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 delay-400">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-9 py-3.5 bg-sage text-white text-[13px] tracking-[0.12em] uppercase rounded-full hover:bg-sage-dark transition-colors duration-300"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-9 py-3.5 border border-warm-brown/20 text-warm-brown text-[13px] tracking-[0.12em] uppercase rounded-full hover:border-sage hover:text-sage transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-500">
        <div className="w-px h-10 bg-warm-brown/20" />
      </div>
    </section>
  );
}
