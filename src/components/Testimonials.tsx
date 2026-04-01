"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Golden Retriever Mom",
    initials: "SM",
    avatarColor: "from-peach-200 to-peach-400",
    avatarBg: "linear-gradient(135deg, #ffd8c0, #f4a261)",
    puppyEmoji: "🐶",
    rating: 5,
    text: "Puppy Haven completely transformed our puppy Max's behavior! The trainers are so patient and loving. Within just 3 weeks, he went from chewing everything to being the most well-behaved dog in the park. Absolutely recommend!",
    puppy: "Max, 8 months",
  },
  {
    name: "James & Linda Park",
    role: "Corgi Parents",
    initials: "JP",
    avatarColor: "from-sky-light to-sky-pastel",
    avatarBg: "linear-gradient(135deg, #c8e6f9, #8ecae6)",
    puppyEmoji: "🐕",
    rating: 5,
    text: "The grooming service is incredible. Our Coco comes home smelling like heaven and looking like a show dog! The staff knows exactly how to handle small breeds. We've been loyal customers for 3 years now.",
    puppy: "Coco, 2 years",
  },
  {
    name: "Priya Sharma",
    role: "Beagle Mama",
    initials: "PS",
    avatarColor: "from-mint-100 to-mint-300",
    avatarBg: "linear-gradient(135deg, #dcfcee, #81b29a)",
    puppyEmoji: "🐩",
    rating: 5,
    text: "Adopting Biscuit through Puppy Haven was the best decision of my life. They handled everything—vet checks, home visit, and even follow-up calls after adoption. They truly care about both the puppy and the family!",
    puppy: "Biscuit, 1 year",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #fefae0 0%, #fff0e6 40%, #e8f4fd 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-16 left-8 text-6xl opacity-5 select-none rotate-12">❤️</div>
      <div className="absolute bottom-16 right-8 text-6xl opacity-5 select-none -rotate-12">🐾</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #ffd8c0, transparent)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-orange-600"
            style={{ background: "rgba(244,162,97,0.12)" }}>
            ❤️ Happy Pet Parents
          </span>
          <h2 className="section-title">What Puppy Parents Say</h2>
          <p className="section-subtitle">
            Real stories from our community of happy families and their beloved puppies.
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card glass-card p-7 flex flex-col transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* Quote mark */}
              <div className="text-5xl font-heading font-black leading-none mb-3 opacity-20 text-orange-400">&quot;</div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">{t.text}</p>

              {/* Rating */}
              <div className="mt-4 mb-5">
                <StarRating count={t.rating} />
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-orange-50">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
                <span className="text-2xl animate-bounce-soft">{t.puppyEmoji}</span>
              </div>

              {/* Puppy tag */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-orange-600 self-start"
                style={{ background: "rgba(244,162,97,0.1)" }}>
                🐾 {t.puppy}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-full px-2">
                  <div className="glass-card p-7">
                    <div className="text-5xl font-heading font-black leading-none mb-3 opacity-20 text-orange-400">&quot;</div>
                    <p className="text-gray-600 text-sm leading-relaxed italic">{t.text}</p>
                    <div className="mt-4 mb-5"><StarRating count={t.rating} /></div>
                    <div className="flex items-center gap-3 pt-4 border-t border-orange-50">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm"
                        style={{ background: t.avatarBg }}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-gray-800 text-sm">{t.name}</p>
                        <p className="text-gray-400 text-xs">{t.role}</p>
                      </div>
                      <span className="ml-auto text-2xl">{t.puppyEmoji}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  active === i ? "w-8 h-2.5 bg-orange-400" : "w-2.5 h-2.5 bg-orange-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
