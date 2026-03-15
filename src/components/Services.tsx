const services = [
  {
    title: "In-Home Training",
    description:
      "Workouts brought directly to your doorstep. Whether in your home or your building's fitness center, experience the convenience you deserve with personalized sessions designed around your schedule and space.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    accent: "bg-blush/20",
    accentDot: "bg-blush",
  },
  {
    title: "Training at NYLO",
    description:
      "Ready to get out of the house? We offer personal training and small group sessions at NYLO in Tribeca, NYC — a beautiful studio space where you can focus entirely on yourself.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: "bg-terracotta-light/15",
    accentDot: "bg-terracotta-light",
  },
  {
    title: "Virtual Sessions",
    description:
      "Receive tailor-made sessions from anywhere in the world. Our virtual training brings the same expertise and personalization of our in-person sessions to your screen, wherever you are.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    accent: "bg-golden/15",
    accentDot: "bg-golden",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-white relative">
      {/* Subtle organic shape */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-cream/80 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-deep-brown mb-6">
            Training designed
            <br />
            <span className="italic text-terracotta">around you.</span>
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed">
            Every body. Every stage. Every goal. We meet you exactly where
            you are — physically, mentally, and geographically.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-cream rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-cream-dark/30"
            >
              {/* Accent background */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${service.accent} rounded-bl-[3rem] rounded-tr-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <div className="mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.accent} text-deep-brown`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-medium text-deep-brown mb-4">
                  {service.title}
                </h3>
                <p className="text-warm-gray leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-terracotta hover:text-terracotta-dark transition-colors group/link"
                >
                  Book Now
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
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
