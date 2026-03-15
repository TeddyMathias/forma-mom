const services = [
  {
    title: "In-Home Training",
    description:
      "Workouts brought directly to your doorstep. Whether in your home or your building's fitness center, experience the convenience you deserve with personalized sessions designed around your schedule.",
    detail: "Manhattan & Brooklyn",
  },
  {
    title: "Training at NYLO",
    description:
      "Ready to get out of the house? We offer personal and small group training at NYLO in Tribeca — a beautiful studio space where you can focus entirely on yourself.",
    detail: "Tribeca, NYC",
  },
  {
    title: "Virtual Sessions",
    description:
      "Receive tailor-made sessions from anywhere in the world. The same expertise and personalization of our in-person sessions, delivered to your screen.",
    detail: "Worldwide",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mb-20">
          <p className="text-[13px] tracking-[0.2em] uppercase text-amber mb-6">
            Our Services
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-deep-earth">
            Training designed <em>around you.</em>
          </h2>
        </div>

        <div className="divide-y divide-sand">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-14 first:pt-0 group"
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-lg text-warm-brown-light">
                  0{i + 1}
                </span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="font-serif text-2xl lg:text-[1.7rem] font-normal text-deep-earth group-hover:text-amber transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[11px] tracking-[0.15em] uppercase text-warm-brown-light mt-2">
                  {service.detail}
                </p>
              </div>
              <div className="lg:col-span-6">
                <p className="text-warm-brown leading-[1.8] text-[15px]">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-2 flex items-start lg:justify-end">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase text-amber hover:text-amber-dark transition-colors"
                >
                  Book
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
