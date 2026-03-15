"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-serif text-[1.6rem] font-medium tracking-[0.04em] text-deep-earth"
          >
            Forma
          </a>

          <div className="hidden md:flex items-center gap-10">
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
                className="text-[13px] tracking-[0.12em] uppercase text-warm-brown hover:text-amber transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              className="ml-2 px-7 py-2.5 bg-amber text-white text-[13px] tracking-[0.1em] uppercase rounded-full hover:bg-amber-dark transition-colors duration-300"
            >
              Book a Session
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-deep-earth"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-cream border-t border-sand animate-fade-in">
          <div className="px-6 py-8 space-y-6">
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
                className="block text-[13px] tracking-[0.12em] uppercase text-warm-brown"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="block text-center px-7 py-3 bg-amber text-white text-[13px] tracking-[0.1em] uppercase rounded-full"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
