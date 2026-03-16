"use client";

import { useState } from "react";
import NotificationBar from "./NotificationBar";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Notification bar */}
      <NotificationBar />

      {/* Main nav */}
      <div className="bg-sand rounded-t-2xl -mt-3 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a
              href="#"
              className="font-serif text-[2.125rem] text-ink"
            >
              F<span className="inline-block relative top-[-0.05em] mx-[0.04em] w-[0.6em] h-[0.6em]"><span className="absolute inset-0 bg-camel logo-blob" /><span className="absolute inset-0 border-[1px] border-ink logo-blob z-10" style={{ animationDelay: '-1s' }} /></span>RMA
            </a>

            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "About", href: "#about" },
                { label: "Lane", href: "#lane" },
                { label: "Services", href: "#services" },
                { label: "Approach", href: "#approach" },
                { label: "Stories", href: "#stories" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[13px] text-ink-muted hover:text-ink transition-colors duration-200 font-light"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                className="ml-3 px-6 py-2.5 bg-espresso text-cream text-[11px] tracking-[0.08em] uppercase rounded-md hover:opacity-85 transition-opacity duration-200 font-normal"
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ink"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-cream border-t border-border anim-appear">
            <div className="px-6 py-8 space-y-5">
              {[
                { label: "About", href: "#about" },
                { label: "Lane", href: "#lane" },
                { label: "Services", href: "#services" },
                { label: "Approach", href: "#approach" },
                { label: "Stories", href: "#stories" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[15px] text-ink/70"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="block text-center px-6 py-3 bg-espresso text-cream text-[11px] tracking-[0.08em] uppercase rounded-md"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
