"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Stats() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-12 bg-cream border-t border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-center divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
          {[
            { value: "100%", label: "5-Star Google Reviews" },
            { value: "2K+", label: "Sessions Delivered" },
            { value: "3.5K+", label: "Clients Served" },
          ].map((s) => (
            <div key={s.label} className="text-center py-6 sm:py-0 sm:px-12 lg:px-20 scroll-reveal rv-up rv-d1">
              <p className="font-serif text-[clamp(2rem,4vw,3rem)] text-ink leading-none mb-2">
                {s.value}
              </p>
              <p className="text-[12px] tracking-[0.1em] uppercase text-ink/40 font-light">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
