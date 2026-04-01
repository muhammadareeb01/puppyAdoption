"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  { src: "/puppy1.jpg", alt: "Golden retriever puppy sitting", span: "row-span-2", label: "Golden Joy" },
  { src: "/puppy2.jpg", alt: "Corgi puppy in garden", span: "", label: "Garden Explorer" },
  { src: "/puppy3.jpg", alt: "Beagle puppy portrait", span: "", label: "Curious Beagle" },
  { src: "/puppy4.jpg", alt: "Samoyed puppy running", span: "row-span-2", label: "Snow Runner" },
  { src: "/puppy5.jpg", alt: "Labrador puppy smiling", span: "", label: "Happy Lab" },
  { src: "/puppy6.jpg", alt: "Dalmatian puppy playing", span: "", label: "Spotty Charm" },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  type PawPos = { top?: string; bottom?: string; left?: string; right?: string; rot: string; size: string };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #f0f9ff 0%, #fefae0 100%)"
    }}>
      {/* Floating bg paws */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {([
          { top: "10%", left: "5%", rot: "15deg", size: "4rem" },
          { top: "60%", right: "4%", rot: "-20deg", size: "5rem" },
          { top: "30%", right: "8%", rot: "30deg", size: "3rem" },
          { bottom: "15%", left: "7%", rot: "-10deg", size: "4rem" },
        ] as PawPos[]).map((paw, i) => (
          <div key={i} className="absolute select-none text-orange-200"
            style={{ top: paw.top, left: paw.left, right: paw.right, bottom: paw.bottom, fontSize: paw.size, transform: `rotate(${paw.rot})`, opacity: 0.18 }}>
            🐾
          </div>
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-orange-600"
            style={{ background: "rgba(244,162,97,0.12)" }}>
            📸 Our Puppies
          </span>
          <h2 className="section-title">Meet Our Puppies!</h2>
          <p className="section-subtitle">
            Each one more adorable than the last. Hover to fall in love. 🐾
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px] transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`gallery-item rounded-3xl overflow-hidden relative cursor-pointer ${img.span} transition-all duration-500`}
              style={{
                boxShadow: hovered === i
                  ? "0 20px 50px rgba(244, 162, 97, 0.3)"
                  : "0 4px 20px rgba(0,0,0,0.08)",
                transform: hovered === i ? "scale(1.02)" : "scale(1)",
                transitionDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-400 ${
                hovered === i ? "opacity-100" : "opacity-0"
              }`}
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}>
                <span className="text-white font-heading font-bold text-sm">{img.label}</span>
                <span className="text-white/70 text-xs">🐾 Puppy Haven</span>
              </div>

              {/* Corner paw badge on hover */}
              <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 ${
                hovered === i ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
                style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)" }}>
                🐾
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.5s" }}>
          <p className="text-gray-500 mb-4">Want to meet them in person?</p>
          <a href="#contact" className="btn-primary inline-block">
            🐶 Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
}
