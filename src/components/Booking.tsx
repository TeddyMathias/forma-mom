"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Booking() {
  const [selectedService, setSelectedService] = useState("");
  const ref = useScrollReveal();

  return (
    <section id="book" className="py-24 lg:py-36 bg-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="font-serif text-[14px] italic text-camel mb-3 scroll-reveal rv-up">
              Get Started
            </p>
            <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.6rem)] font-normal leading-[1.22] text-ink mb-6 scroll-reveal rv-up rv-d1">
              Your first step <em className="italic">starts here.</em>
            </h2>
            <p className="text-ink-muted leading-[1.85] text-[15px] mb-10 max-w-md font-light scroll-reveal rv-up rv-d2">
              Book a complimentary consultation and discover how Forma can
              support your unique journey. No commitment, no pressure — just a
              conversation about what strength means to you.
            </p>

            <div className="space-y-4 scroll-reveal rv-up rv-d3">
              {[
                "Complimentary 30-minute consultation",
                "Personalized program recommendation",
                "Flexible scheduling around your life",
                "No long-term contracts required",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-camel shrink-0" />
                  <span className="text-ink-muted text-[14.5px] font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream-warm p-8 lg:p-10 rounded-xl scroll-reveal rv-up rv-d2">
            <h3 className="font-serif text-[1.15rem] text-ink mb-1">
              Book a Consultation
            </h3>
            <p className="text-[13px] text-ink/40 mb-7 font-light">
              We&apos;ll be in touch within 24 hours.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[0.06em] uppercase text-ink/40 mb-1.5 font-normal">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-md text-ink placeholder-ink/20 focus:outline-none focus:border-espresso transition-colors text-[14px]"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.06em] uppercase text-ink/40 mb-1.5 font-normal">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-md text-ink placeholder-ink/20 focus:outline-none focus:border-espresso transition-colors text-[14px]"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.06em] uppercase text-ink/40 mb-1.5 font-normal">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-md text-ink placeholder-ink/20 focus:outline-none focus:border-espresso transition-colors text-[14px]"
                  placeholder="jane@email.com"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.06em] uppercase text-ink/40 mb-1.5 font-normal">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white border border-border rounded-md text-ink placeholder-ink/20 focus:outline-none focus:border-espresso transition-colors text-[14px]"
                  placeholder="(212) 555-0100"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.06em] uppercase text-ink/40 mb-1.5 font-normal">
                  Service Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-border rounded-md text-ink focus:outline-none focus:border-espresso transition-colors appearance-none text-[14px]"
                >
                  <option value="">Select a service</option>
                  <option value="in-home">In-Home Training</option>
                  <option value="nylo">Training at NYLO (Tribeca)</option>
                  <option value="virtual">Virtual Session</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.06em] uppercase text-ink/40 mb-1.5 font-normal">
                  Tell us about your journey
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-border rounded-md text-ink placeholder-ink/20 focus:outline-none focus:border-espresso transition-colors resize-none text-[14px]"
                  placeholder="Expecting, postpartum, fitness goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-espresso text-cream text-[12px] tracking-[0.06em] uppercase rounded-md hover:opacity-85 transition-opacity duration-200 mt-1 border-none cursor-pointer"
              >
                Book Your Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
