export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Full-width headline */}
        <div className="max-w-4xl mb-20">
          <p className="text-[13px] tracking-[0.2em] uppercase text-amber mb-6">
            About Forma
          </p>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-deep-earth">
            Where luxury and fitness converge to create an unparalleled
            <em> in-home training experience.</em>
          </h2>
        </div>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6 text-warm-brown leading-[1.8] text-[15px]">
            <p>
              Our white-glove service brings personalized, expert-led workouts
              directly to your doorstep, transforming your space into a private
              sanctuary. Each session is meticulously tailored to your unique
              goals, ensuring that every movement, every breath, and every
              moment is perfected to elevate your body and mind.
            </p>
            <p>
              With Forma, you&apos;re not just working out — you&apos;re engaging in
              the art of fitness, refined and delivered with the utmost
              sophistication and care.
            </p>
          </div>
          <div className="space-y-6 text-warm-brown leading-[1.8] text-[15px]">
            <p>
              From prenatal preparation to postpartum recovery and beyond,
              our certified specialists understand the profound physical
              transformations of motherhood. Every program is designed to
              honor that journey — supporting you through each stage with
              clinical knowledge and genuine care.
            </p>
            <p>
              We believe that investing in your body is investing in your
              family. When you feel strong, everything else follows.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-16 border-t border-sand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Mothers served" },
              { value: "5,000+", label: "Sessions delivered" },
              { value: "15+", label: "Certified trainers" },
              { value: "98%", label: "Client satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl lg:text-4xl font-normal text-deep-earth mb-2">
                  {stat.value}
                </p>
                <p className="text-[12px] tracking-[0.12em] uppercase text-warm-brown-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
