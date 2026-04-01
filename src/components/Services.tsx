"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "✂️",
    emoji: "🐩",
    title: "Puppy Grooming",
    description:
      "Premium spa-quality grooming sessions with gentle, pet-friendly products. Bath, trim, nail care, and styling—your pup leaves looking fabulous!",
    color: "from-peach-100 to-peach-50",
    accent: "#f4a261",
    bgIcon: "rgba(244,162,97,0.12)",
  },
  {
    icon: "🏆",
    emoji: "🐕‍🦺",
    title: "Training Programs",
    description:
      "Science-backed positive reinforcement training by certified experts. From basic commands to advanced behavior, we shape well-mannered, happy dogs.",
    color: "from-sky-light to-sky-pastel/30",
    accent: "#8ecae6",
    bgIcon: "rgba(142,202,230,0.15)",
  },
  {
    icon: "🥗",
    emoji: "🦴",
    title: "Healthy Meal Plans",
    description:
      "Veterinarian-approved, breed-specific nutritional plans. Fresh, wholesome ingredients delivering balanced diet tailored to your puppy's needs.",
    color: "from-mint-100 to-mint-50",
    accent: "#81b29a",
    bgIcon: "rgba(129,178,154,0.15)",
  },
  {
    icon: "🏡",
    emoji: "🐾",
    title: "Adoption Support",
    description:
      "End-to-end adoption assistance: matching, home visits, vet checks, and ongoing guidance. We help create perfect forever families.",
    color: "from-lilac-100 to-lilac-50",
    accent: "#b8a9c9",
    bgIcon: "rgba(184,169,201,0.15)",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #fefae0 0%, #fff8f0 50%, #f0f9ff 100%)"
    }}>
      {/* BG decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {["10%", "40%", "70%", "90%"].map((left, i) => (
          <span key={i} className="absolute text-5xl select-none"
            style={{ left, top: `${20 + i * 15}%`, opacity: 0.08, transform: `rotate(${i * 25}deg)` }}>
            🐾
          </span>
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-orange-600"
            style={{ background: "rgba(244,162,97,0.12)" }}>
            🐾 What We Offer
          </span>
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Everything your puppy needs—from daily grooming to lifelong training—delivered with
            love and expertise by our certified team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`service-card glass-card p-7 flex flex-col cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              {/* Icon area */}
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: svc.bgIcon }}>
                  {svc.icon}
                </div>
                <span className="absolute -top-1 -right-1 text-2xl animate-bounce-soft">
                  {svc.emoji}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-gray-800 mb-3">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.description}</p>

              {/* Learn More */}
              <a
                href="#contact"
                className="mt-6 flex items-center gap-1.5 text-sm font-semibold transition-all group"
                style={{ color: svc.accent }}
              >
                <span>Learn More</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              {/* bottom accent line */}
              <div className="mt-4 h-1 rounded-full opacity-40"
                style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
