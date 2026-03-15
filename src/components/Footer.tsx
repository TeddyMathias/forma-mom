export default function Footer() {
  return (
    <footer className="bg-deep-brown pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl font-semibold tracking-wide text-cream mb-4">
              FORMA
            </h3>
            <p className="text-cream/50 leading-relaxed max-w-sm mb-6">
              Strength for motherhood. Luxury in-home fitness designed for
              every stage of the journey.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta/30 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-cream/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta/30 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-cream/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.88a8.27 8.27 0 004.76 1.5V6.93a4.84 4.84 0 01-1-.24z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:hello@forma.mom"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta/30 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-cream/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Services", "Our Approach", "Testimonials", "Book a Session"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-cream/60 hover:text-terracotta-light transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-cream/40 mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li>
                <a href="mailto:hello@forma.mom" className="hover:text-terracotta-light transition-colors">
                  hello@forma.mom
                </a>
              </li>
              <li>New York City</li>
              <li>Tribeca &bull; Upper West Side</li>
              <li>Brooklyn &bull; Virtual</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Forma. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
