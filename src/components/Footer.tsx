"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Puppy Grooming",
  "Training Programs",
  "Healthy Meal Plans",
  "Adoption Support",
  "Puppy Boarding",
  "Vet Consultation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background: "linear-gradient(160deg, #fff5ec 0%, #ffecd8 40%, #fce8ff 100%)",
      }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0L60 6.7C120 13.3 240 26.7 360 33.3C480 40 600 40 720 33.3C840 26.7 960 13.3 1080 10C1200 6.7 1320 13.3 1380 16.7L1440 20V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V0Z"
            fill="#fff5ec"
          />
        </svg>
      </div>

      {/* Decorative paws */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["5%", "25%", "50%", "75%", "95%"].map((left, i) => (
          <div key={i} className="absolute text-orange-200 select-none"
            style={{ left, top: `${10 + i * 15}%`, fontSize: `${2 + (i % 2)}rem`, opacity: 0.12, transform: `rotate(${i * 18}deg)` }}>
            🐾
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #f4a261, #e76f51)" }}
              >
                🐾
              </div>
              <div>
                <span
                  className="font-heading font-extrabold text-xl block leading-none"
                  style={{ background: "linear-gradient(135deg, #f4a261, #e76f51)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Puppy Haven
                </span>
                <span className="text-xs text-gray-400 font-medium">Premium Pet Care</span>
              </div>
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Bringing happiness, one puppy at a time. Your trusted partner in premium puppy care since 2015.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                  gradient: "linear-gradient(135deg, #1877f2, #0c5fcd)",
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  ),
                  gradient: "linear-gradient(135deg, #f77f00, #d62828)",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110 hover:shadow-md"
                  style={{ background: social.gradient }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-gray-800 mb-5 text-base flex items-center gap-2">
              <span className="text-orange-400">🐾</span> Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-orange-500 font-medium transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-200 group-hover:bg-orange-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-gray-800 mb-5 text-base flex items-center gap-2">
              <span className="text-orange-400">🐕</span> Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-sm text-gray-500 hover:text-orange-500 font-medium transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-200 group-hover:bg-orange-400 transition-colors" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-gray-800 mb-5 text-base flex items-center gap-2">
              <span className="text-orange-400">📩</span> Stay in the Loop
            </h4>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Get weekly puppy care tips and exclusive offers in your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-orange-100 text-sm font-medium text-gray-600 outline-none focus:border-orange-400 transition-all bg-white/70"
              />
              <button
                id="footer-newsletter-btn"
                className="btn-primary text-sm py-3 w-full"
              >
                🐾 Subscribe
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex gap-3 mt-5">
              {["✅ Certified", "🏆 Award Winning", "❤️ 2500+ Happy Pups"].map((badge) => (
                <span key={badge} className="text-xs text-orange-600 font-semibold px-2 py-1 rounded-lg"
                  style={{ background: "rgba(244,162,97,0.1)" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(244,162,97,0.3), transparent)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>
            © {year} <span className="text-orange-500 font-semibold">Puppy Haven</span>. Made with ❤️ for puppies everywhere.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="hover:text-orange-400 transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
