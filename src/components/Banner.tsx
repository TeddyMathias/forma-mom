export default function Banner() {
  return (
    <section className="py-24 lg:py-36 bg-gradient-to-br from-sage/10 via-cream-warm to-soft-peach/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.1] text-deep-earth mb-8">
          You deserve to feel <em className="text-warm-brown">strong.</em>
        </h2>
        <p className="text-warm-brown leading-[1.75] max-w-2xl mx-auto mb-12">
          Whether you&apos;re preparing for birth, navigating the fourth trimester,
          or reclaiming your fitness years into motherhood — Forma is here
          for every chapter.
        </p>
        <a
          href="#book"
          className="inline-flex items-center justify-center px-10 py-4 bg-sage text-white text-[13px] tracking-[0.12em] uppercase rounded-full hover:bg-sage-dark transition-colors duration-300"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
