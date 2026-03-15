export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Organic background shapes inspired by the watercolor aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large pink shape - top right */}
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[600px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-blush/30 animate-float-slow"
          style={{ filter: "blur(2px)" }}
        />
        {/* Coral/terracotta shape - center right */}
        <div
          className="absolute top-1/3 right-1/4 w-[350px] h-[300px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-terracotta-light/20 animate-float"
          style={{ animationDelay: "2s", filter: "blur(1px)" }}
        />
        {/* Golden shape - bottom center */}
        <div
          className="absolute bottom-20 right-1/3 w-[280px] h-[280px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-golden/15 animate-float-slow"
          style={{ animationDelay: "4s", filter: "blur(1px)" }}
        />
        {/* Blue shape - bottom left */}
        <div
          className="absolute -bottom-10 left-10 w-[250px] h-[300px] rounded-[30%_70%_60%_40%/50%_40%_60%_50%] bg-slate-blue/15 animate-float"
          style={{ animationDelay: "1s", filter: "blur(2px)" }}
        />
        {/* Small accent - top left */}
        <div
          className="absolute top-40 left-1/4 w-[120px] h-[120px] rounded-full bg-blush-light/25 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-6 animate-fade-in-up opacity-0 delay-100">
            Luxury In-Home Fitness
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light leading-[0.95] text-deep-brown mb-8 animate-fade-in-up opacity-0 delay-200">
            Strength
            <br />
            <span className="italic text-terracotta">for</span>
            <br />
            motherhood.
          </h1>

          {/* Subline */}
          <p className="text-lg sm:text-xl text-warm-gray leading-relaxed max-w-xl mb-10 animate-fade-in-up opacity-0 delay-300">
            Personalized, expert-led training delivered to your doorstep.
            Every session is crafted to support your body through every stage
            of the journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-400">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-10 py-4 bg-terracotta text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Your First Session
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-4 border border-deep-brown/20 text-deep-brown text-sm font-medium tracking-widest uppercase rounded-full hover:border-terracotta hover:text-terracotta transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-16 flex items-center gap-8 animate-fade-in-up opacity-0 delay-500">
            <div className="flex -space-x-2">
              {[
                "bg-blush",
                "bg-terracotta-light",
                "bg-golden",
                "bg-slate-blue",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${bg} border-2 border-cream flex items-center justify-center`}
                >
                  <span className="text-white text-xs font-medium">
                    {["A", "S", "M", "K"][i]}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-warm-gray">
              <span className="font-semibold text-deep-brown">500+</span>{" "}
              mothers trust Forma for their wellness journey
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-700">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-warm-gray/60">
            Scroll
          </span>
          <div className="w-px h-8 bg-warm-gray/30" />
        </div>
      </div>
    </section>
  );
}
