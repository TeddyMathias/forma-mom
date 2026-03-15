export default function Banner() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-terracotta to-terracotta-dark relative overflow-hidden">
      {/* Organic overlay shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-white/5" />
        <div className="absolute bottom-0 right-1/3 w-[200px] h-[200px] rounded-full bg-white/5" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white mb-6">
          You deserve to feel
          <br />
          <span className="italic">strong.</span>
        </h2>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you&apos;re preparing for birth, navigating the fourth trimester,
          or reclaiming your fitness years into motherhood — Forma is here for
          every chapter.
        </p>
        <a
          href="#book"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-terracotta text-sm font-medium tracking-widest uppercase rounded-full hover:bg-cream transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
        >
          Book Your Session Today
        </a>
      </div>
    </section>
  );
}
