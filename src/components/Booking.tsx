"use client";

import { useState } from "react";

export default function Booking() {
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = [
    { value: "in-home", label: "In-Home Training" },
    { value: "nylo", label: "Training at NYLO (Tribeca)" },
    { value: "virtual", label: "Virtual Session" },
  ];

  return (
    <section id="book" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[500px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-blush/10 translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] rounded-full bg-golden/8" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-terracotta mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-deep-brown mb-8">
              Your first step
              <br />
              <span className="italic text-terracotta">starts here.</span>
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-10 max-w-lg">
              Book a complimentary consultation and discover how Forma can
              support your unique journey. No commitment, no pressure — just a
              conversation about what strength means to you.
            </p>

            {/* Features list */}
            <div className="space-y-5">
              {[
                "Complimentary 30-minute consultation",
                "Personalized program recommendation",
                "Flexible scheduling around your life",
                "No long-term contracts required",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-terracotta"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-deep-brown">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl shadow-deep-brown/5 border border-cream-dark/30">
            <h3 className="font-serif text-2xl font-medium text-deep-brown mb-2">
              Book a Consultation
            </h3>
            <p className="text-warm-gray text-sm mb-8">
              Fill in your details and we&apos;ll be in touch within 24 hours.
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  "https://calendly.com",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-warm-gray mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-cream border border-cream-dark/30 text-deep-brown placeholder-warm-gray/40 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase text-warm-gray mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-cream border border-cream-dark/30 text-deep-brown placeholder-warm-gray/40 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-warm-gray mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border border-cream-dark/30 text-deep-brown placeholder-warm-gray/40 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all"
                  placeholder="jane@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-warm-gray mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border border-cream-dark/30 text-deep-brown placeholder-warm-gray/40 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all"
                  placeholder="(212) 555-0100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-warm-gray mb-2">
                  Service Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border border-cream-dark/30 text-deep-brown focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider uppercase text-warm-gray mb-2">
                  Tell us about your journey
                </label>
                <textarea
                  rows={3}
                  className="w-full px-5 py-3.5 rounded-xl bg-cream border border-cream-dark/30 text-deep-brown placeholder-warm-gray/40 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta/50 transition-all resize-none"
                  placeholder="Expecting, postpartum, fitness goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-terracotta text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 mt-4"
              >
                Book Your Consultation
              </button>

              <p className="text-center text-xs text-warm-gray/60 mt-4">
                By submitting, you agree to our privacy policy. We&apos;ll never
                share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
