"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ACUITY_OWNER = "38771341";
const ACUITY_BASE = `https://app.acuityscheduling.com/schedule.php?owner=${ACUITY_OWNER}`;

export default function Booking() {
  const ref = useScrollReveal();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(820);

  /* Listen for Acuity's postMessage resize events */
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (typeof e.data === "string" && e.data.indexOf("acuity") === 0) {
        // Acuity sends messages like "acuity:800" for height
        const parts = e.data.split(":");
        if (parts[1]) {
          const h = parseInt(parts[1], 10);
          if (h > 0) setIframeHeight(h);
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  /* Load Acuity embed script for auto-resizing */
  useEffect(() => {
    if (document.querySelector('script[src*="embed.acuityscheduling.com"]')) return;
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="book" className="py-24 lg:py-36 bg-cream" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header area */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left column — context */}
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
                  <span className="text-ink-muted text-[14.5px] font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Acuity embed */}
          <div className="scroll-reveal rv-up rv-d2">
            <div className="relative rounded-xl overflow-hidden bg-cream-warm">
              {/* Loading skeleton */}
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-cream-warm p-10">
                  <div className="space-y-4 w-full max-w-md">
                    <div className="h-5 w-40 bg-sand/60 rounded animate-pulse" />
                    <div className="h-3 w-60 bg-sand/60 rounded animate-pulse" style={{ animationDelay: "0.1s" }} />
                    <div className="mt-6 space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-16 bg-sand/40 rounded-lg animate-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-center text-ink/30 text-[13px] font-light mt-8">
                      Loading scheduler&hellip;
                    </p>
                  </div>
                </div>
              )}

              {/* Acuity iframe */}
              <iframe
                ref={iframeRef}
                src={ACUITY_BASE}
                title="Schedule Appointment"
                width="100%"
                height={iframeHeight}
                frameBorder="0"
                onLoad={() => setIframeLoaded(true)}
                className={`acuity-iframe block w-full transition-opacity duration-500 ${
                  iframeLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ minHeight: 600 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
