const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth conversation about your goals, your body, and your stage of motherhood. No two journeys are the same — your program shouldn't be either.",
  },
  {
    number: "02",
    title: "Custom Program Design",
    description:
      "Your trainer designs a comprehensive program tailored to your needs — from prenatal strengthening to postpartum recovery, core rehabilitation, or general wellness.",
  },
  {
    number: "03",
    title: "Expert-Led Sessions",
    description:
      "Every session is led by a certified specialist who understands the biomechanics of pregnancy and postpartum. We bring all equipment to you.",
  },
  {
    number: "04",
    title: "Ongoing Evolution",
    description:
      "As your body changes, your program evolves. We continuously adapt to ensure you feel strong, supported, and empowered at every stage.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-golden/8 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/4 left-0 w-[200px] h-[200px] rounded-full bg-blush/8 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-deep-brown mb-8">
              A journey,
              <br />
              <span className="italic text-terracotta">not a workout.</span>
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-10 max-w-lg">
              We don&apos;t believe in one-size-fits-all. Forma is built around the
              understanding that motherhood is a profound transformation — and
              your fitness should honor every phase of it.
            </p>
            <a
              href="#book"
              className="inline-flex items-center justify-center px-10 py-4 bg-terracotta text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Your Journey
            </a>
          </div>

          {/* Right: Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative pl-16 pb-8"
              >
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[1.35rem] top-14 bottom-0 w-px bg-cream-dark" />
                )}

                {/* Step number circle */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-terracotta">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 border border-cream-dark/30 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-serif text-2xl font-medium text-deep-brown mb-3">
                    {step.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
