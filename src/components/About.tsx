export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blush/8 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-cream-dark">
              {/* Abstract art composition inspired by the screenshots */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream-dark to-cream" />
              <div className="absolute top-[15%] right-[10%] w-[55%] h-[45%] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] bg-blush/60" />
              <div className="absolute top-[30%] left-[15%] w-[50%] h-[40%] rounded-[45%_55%_60%_40%/55%_45%_50%_50%] bg-terracotta-light/50" />
              <div className="absolute bottom-[15%] left-[25%] w-[40%] h-[35%] rounded-[50%_50%_45%_55%/45%_55%_50%_50%] bg-golden/40" />
              <div className="absolute bottom-[10%] right-[15%] w-[35%] h-[30%] rounded-[55%_45%_50%_50%/50%_50%_55%_45%] bg-slate-blue/35" />

              {/* Overlay text */}
              <div className="absolute inset-0 flex items-end p-10">
                <p className="font-serif text-4xl text-slate-blue-dark/80 italic leading-tight">
                  Support for birth
                  <br />
                  and beyond.
                </p>
              </div>
            </div>

            {/* Stats floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-8 py-6 border border-cream-dark/30">
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-terracotta">98%</p>
                <p className="text-xs tracking-widest uppercase text-warm-gray mt-1">
                  Client satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
              About Forma
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight text-deep-brown mb-8">
              Where luxury meets
              <br />
              <span className="italic text-terracotta">the art of fitness.</span>
            </h2>
            <div className="space-y-6 text-warm-gray leading-relaxed">
              <p className="text-lg">
                Introducing FORMA — where luxury and fitness converge to create an
                unparalleled in-home training experience. Our white-glove service
                brings personalized, expert-led workouts directly to your
                doorstep, transforming your space into a private sanctuary.
              </p>
              <p>
                Each session is meticulously tailored to your unique goals,
                ensuring that every movement, every breath, and every moment is
                perfected to elevate your body and mind. With Forma, you&apos;re not
                just working out — you&apos;re engaging in the art of fitness,
                refined and delivered with the utmost sophistication and care.
              </p>
              <p>
                From prenatal preparation to postpartum recovery and beyond, our
                certified specialists understand the profound physical
                transformations of motherhood and design each program to honor
                that journey.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { label: "Certified Trainers", value: "15+" },
                { label: "Sessions Delivered", value: "5,000+" },
                { label: "Years Experience", value: "8+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl font-semibold text-terracotta">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-warm-gray mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
