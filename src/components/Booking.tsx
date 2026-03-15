"use client";

import { useState } from "react";

export default function Booking() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <section id="book" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[13px] tracking-[0.2em] uppercase text-amber mb-6">
              Get Started
            </p>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.15] text-deep-earth mb-8">
              Your first step <em>starts here.</em>
            </h2>
            <p className="text-warm-brown leading-[1.8] text-[15px] mb-12 max-w-md">
              Book a complimentary consultation and discover how Forma can
              support your unique journey. No commitment, no pressure — just a
              conversation about what strength means to you.
            </p>

            <div className="space-y-5">
              {[
                "Complimentary 30-minute consultation",
                "Personalized program recommendation",
                "Flexible scheduling around your life",
                "No long-term contracts required",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                  <span className="text-warm-brown text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream-warm rounded-2xl p-8 lg:p-12 border border-sand">
            <h3 className="font-serif text-xl text-deep-earth mb-1">
              Book a Consultation
            </h3>
            <p className="text-[13px] text-warm-brown-light mb-8">
              We&apos;ll be in touch within 24 hours.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] tracking-[0.12em] uppercase text-warm-brown-light mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-amber transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.12em] uppercase text-warm-brown-light mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-amber transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.12em] uppercase text-warm-brown-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-amber transition-colors"
                  placeholder="jane@email.com"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.12em] uppercase text-warm-brown-light mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-amber transition-colors"
                  placeholder="(212) 555-0100"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.12em] uppercase text-warm-brown-light mb-2">
                  Service Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sand text-deep-earth focus:outline-none focus:border-amber transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="in-home">In-Home Training</option>
                  <option value="nylo">Training at NYLO (Tribeca)</option>
                  <option value="virtual">Virtual Session</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.12em] uppercase text-warm-brown-light mb-2">
                  Tell us about your journey
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-cream border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-amber transition-colors resize-none"
                  placeholder="Expecting, postpartum, fitness goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber text-white text-[13px] tracking-[0.12em] uppercase rounded-full hover:bg-amber-dark transition-colors duration-300 mt-2"
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
