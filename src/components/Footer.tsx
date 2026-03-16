"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer className="bg-ink pt-16 pb-8" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-4 scroll-reveal rv-up">
            <h3 className="font-serif text-[1.75rem] text-cream/50 mb-3">
              F<span className="inline-block relative top-[-0.05em] mx-[0.04em] w-[0.6em] h-[0.6em]"><span className="absolute inset-0 bg-camel logo-blob" /><span className="absolute inset-0 border-[1px] border-cream/50 logo-blob z-10" style={{ animationDelay: '-1s' }} /></span>RMA
            </h3>
            <p className="text-cream/30 leading-[1.8] max-w-xs text-[13.5px] font-light">
              Strength for motherhood. Personalized fitness designed for
              every stage of the journey.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-6 scroll-reveal rv-up rv-d1">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-cream/20 mb-5">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Approach", href: "#approach" },
                { label: "Stories", href: "#stories" },
                { label: "Book a Session", href: "#book" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream/35 hover:text-cream/70 transition-colors text-[13.5px] font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 scroll-reveal rv-up rv-d2">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-cream/20 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-cream/35 text-[13.5px] font-light">
              <li>
                <a href="mailto:hello@forma.mom" className="hover:text-cream/70 transition-colors">
                  hello@forma.mom
                </a>
              </li>
              <li>New York City</li>
              <li>Tribeca &middot; UWS &middot; Brooklyn</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" className="text-cream/20 hover:text-cream/50 transition-colors" aria-label="Instagram">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-cream/20 hover:text-cream/50 transition-colors" aria-label="TikTok">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.27 8.27 0 004.76 1.5V6.93a4.84 4.84 0 01-1-.24z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-cream/6 flex flex-col sm:flex-row items-center justify-between gap-3 scroll-reveal rv-up rv-d3">
          <p className="text-cream/15 text-[11px] tracking-wider font-light">
            &copy; {new Date().getFullYear()} Forma. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-cream/15 hover:text-cream/30 text-[11px] transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-cream/15 hover:text-cream/30 text-[11px] transition-colors font-light">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
