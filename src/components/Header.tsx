"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mounted ? "animate-slide-down" : "opacity-0"
      } ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft py-3"
          : "bg-cream-50/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-transform group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #f4a261, #e76f51)" }}>
              🐾
            </div>
          </div>
          <div>
            <span className="font-heading font-extrabold text-xl leading-none"
              style={{ background: "linear-gradient(135deg, #f4a261, #e76f51)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Puppy Haven
            </span>
            <p className="text-xs text-gray-400 font-medium leading-none mt-0.5">Premium Pet Care</p>
          </div>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link text-sm font-semibold pb-0.5">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm py-2.5 px-6">
            🐶 Book Appointment
          </a>
        </div>

        {/* Mobile burger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-orange-400 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-orange-400 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-orange-400 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 shadow-card border-t border-orange-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 font-semibold hover:text-orange-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm text-center mt-2">
            🐶 Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
