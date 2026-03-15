const steps = [
  {
    title: "Consultation",
    description:
      "We begin with an in-depth conversation about your goals, your body, and your stage of motherhood. No two journeys are the same.",
  },
  {
    title: "Custom Program",
    description:
      "Your trainer designs a comprehensive program — from prenatal strengthening to postpartum recovery, core rehabilitation, or general wellness.",
  },
  {
    title: "Expert-Led Sessions",
    description:
      "Every session is led by a certified specialist who understands the biomechanics of pregnancy and postpartum. We bring all equipment to you.",
  },
  {
    title: "Ongoing Evolution",
    description:
      "As your body changes, your program evolves. We continuously adapt to ensure you feel strong, supported, and empowered.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-36 bg-cream-warm relative">
      {/* Very subtle organic shape */}
      <div className="absolute top-[20%] right-[5%] w-[200px] h-[200px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-sage/[0.04]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Sticky header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[13px] tracking-[0.2em] uppercase text-sage mb-6">
              Our Approach
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.1] text-deep-earth mb-8">
              A journey, <em className="text-warm-brown">not a workout.</em>
            </h2>
            <p className="text-warm-brown leading-[1.75] max-w-md mb-10">
              We don&apos;t believe in one-size-fits-all. Forma is built around the
              understanding that motherhood is a profound transformation — and
              your fitness should honor every phase of it.
            </p>
            <a
              href="#book"
              className="inline-flex items-center justify-center px-9 py-3.5 bg-sage text-white text-[13px] tracking-[0.12em] uppercase rounded-full hover:bg-sage-dark transition-colors duration-300"
            >
              Start Your Journey
            </a>
          </div>

          {/* Right: Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="py-10 border-t border-sand last:border-b"
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-lg text-warm-brown-light mt-1 shrink-0 w-8">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl lg:text-2xl font-normal text-deep-earth mb-3">
                      {step.title}
                    </h3>
                    <p className="text-warm-brown leading-[1.75]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
