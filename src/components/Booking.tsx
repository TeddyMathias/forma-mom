"use client";

import { useState } from "react";

export default function Booking() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <section id="book" className="py-24 lg:py-36 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div>
            <p className="text-[13px] tracking-[0.2em] uppercase text-sage mb-6">
              Get Started
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.1] text-deep-earth mb-8">
              Your first step <em className="text-warm-brown">starts here.</em>
            </h2>
            <p className="text-warm-brown leading-[1.75] mb-12 max-w-md">
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
                  <div className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                  <span className="text-warm-brown">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-cream rounded-2xl p-8 lg:p-12 border border-sand">
            <h3 className="font-serif text-xl text-deep-earth mb-1">
              Book a Consultation
            </h3>
            <p className="text-[13px] text-warm-brown-light mb-8">
              We&apos;ll be in touch within 24 hours.
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-sage transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-sage transition-colors"
                  placeholder="jane@email.com"
                />
              </div>

              <div>
                <label className="block text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-sage transition-colors"
                  placeholder="(212) 555-0100"
                />
              </div>

              <div>
                <label className="block text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mb-2">
                  Service Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-sand text-deep-earth focus:outline-none focus:border-sage transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="in-home">In-Home Training</option>
                  <option value="nylo">Training at NYLO (Tribeca)</option>
                  <option value="virtual">Virtual Session</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] tracking-[0.1em] uppercase text-warm-brown-light mb-2">
                  Tell us about your journey
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-sand text-deep-earth placeholder-warm-brown-light/40 focus:outline-none focus:border-sage transition-colors resize-none"
                  placeholder="Expecting, postpartum, fitness goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-sage text-white text-[13px] tracking-[0.12em] uppercase rounded-full hover:bg-sage-dark transition-colors duration-300 mt-2"
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
