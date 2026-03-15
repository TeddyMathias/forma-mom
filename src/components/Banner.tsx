export default function Banner() {
  return (
    <section className="py-24 lg:py-36 bg-cream-warm">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-deep-earth mb-8">
          You deserve to feel <em>strong.</em>
        </h2>
        <p className="text-warm-brown leading-[1.8] text-[15px] max-w-2xl mx-auto mb-12">
          Whether you&apos;re preparing for birth, navigating the fourth trimester,
          or reclaiming your fitness years into motherhood — Forma is here
          for every chapter.
        </p>
        <a
          href="#book"
          className="inline-flex items-center justify-center px-10 py-4 bg-amber text-white text-[13px] tracking-[0.12em] uppercase rounded-full hover:bg-amber-dark transition-colors duration-300"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
