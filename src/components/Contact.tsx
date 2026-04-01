"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-2xl border text-gray-700 font-medium text-sm outline-none transition-all duration-300 bg-white/80";
  const inputStyle = (field: string) =>
    `${inputBase} ${
      focused === field
        ? "border-orange-400 shadow-[0_0_0_3px_rgba(244,162,97,0.2),_0_0_16px_rgba(244,162,97,0.12)]"
        : "border-orange-100 hover:border-orange-200"
    }`;

  const contactInfo = [
    { icon: "📍", label: "Location", value: "123 Puppy Lane, Pet City, CA 90210" },
    { icon: "📞", label: "Phone", value: "+1 (555) 123-PUPS" },
    { icon: "✉️", label: "Email", value: "hello@puppyhaven.com" },
    { icon: "⏰", label: "Hours", value: "Mon–Sat: 8am–7pm, Sun: 10am–5pm" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(160deg, #fff8f3 0%, #fefae0 50%, #f0f9ff 100%)"
    }}>
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffd8c0, transparent)", transform: "translate(25%, -25%)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c8e6f9, transparent)", transform: "translate(-25%, 25%)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-orange-600"
            style={{ background: "rgba(244,162,97,0.12)" }}>
            📬 Get In Touch
          </span>
          <h2 className="section-title">We'd Love to Hear From You</h2>
          <p className="section-subtitle">
            Have a question or want to book a session? Drop us a message and we'll wag our way back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Form */}
          <div
            className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, #f4a261, #e76f51, #8ecae6)" }} />

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="text-6xl mb-4 animate-bounce-soft">🐾</div>
                  <h3 className="font-heading font-bold text-2xl text-gray-800 mb-2">Woof! Message Received!</h3>
                  <p className="text-gray-500">Our team will get back to you within 24 hours. Your furry friend can't wait!</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                    className="mt-6 btn-primary inline-block"
                  >
                    Send Another 🐶
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={inputStyle("name")}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className={inputStyle("email")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        className={inputStyle("phone")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell us about your puppy and how we can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`${inputStyle("message")} resize-none`}
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 flex items-center justify-center gap-3 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        <span>Sending your message...</span>
                      </>
                    ) : (
                      <>
                        <span>🐾 Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Image + Contact Info */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            {/* Puppy image */}
            <div className="relative rounded-4xl overflow-hidden shadow-hover" style={{ border: "5px solid white" }}>
              <Image
                src="/puppy3.jpg"
                alt="Beagle puppy looking up at you"
                width={560}
                height={320}
                className="object-cover w-full"
                style={{ height: "280px" }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(244,162,97,0.2) 0%, transparent 60%)"
              }} />
              <div className="absolute bottom-4 left-4">
                <span className="glass-card px-4 py-2 text-sm font-semibold text-gray-700 flex items-center gap-2">
                  🐾 We're always here for your pup!
                </span>
              </div>
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <div
                  key={info.label}
                  className={`glass-card p-4 flex items-start gap-3 transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(244,162,97,0.1)" }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{info.label}</p>
                    <p className="text-gray-700 text-sm font-medium mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social CTA */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="flex-1">
                <p className="font-heading font-bold text-gray-800 mb-1">Follow Our Puppies 🐶</p>
                <p className="text-gray-500 text-sm">Daily adorable content on Instagram!</p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #f77f00, #d62828)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
