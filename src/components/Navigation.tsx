"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-cream-dark/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-serif text-3xl font-semibold tracking-wide text-deep-brown">
            FORMA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className="text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#approach"
              className="text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors duration-300"
            >
              Approach
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors duration-300"
            >
              Stories
            </a>
            <a
              href="#book"
              className="ml-4 inline-flex items-center px-7 py-3 bg-terracotta text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-terracotta-dark transition-all duration-300 hover:shadow-lg"
            >
              Book a Session
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-deep-brown"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark/50 animate-fade-in">
          <div className="px-6 py-8 space-y-6">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors"
            >
              Services
            </a>
            <a
              href="#approach"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors"
            >
              Approach
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium tracking-widest uppercase text-warm-gray hover:text-terracotta transition-colors"
            >
              Stories
            </a>
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-7 py-3.5 bg-terracotta text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-terracotta-dark transition-all"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
