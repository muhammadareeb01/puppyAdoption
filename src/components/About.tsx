"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bullets = [
    { icon: "🎓", text: "Certified puppy trainers & professional caretakers" },
    { icon: "🏠", text: "Safe, clean & playful environments for every pup" },
    { icon: "❤️", text: "Affordable, reliable, and genuinely loving service" },
    { icon: "🌱", text: "Tailored care plans for every breed and personality" },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: "#fffef7" }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ffd8c0, transparent)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c8e6f9, transparent)", transform: "translate(-30%, 30%)" }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            {/* Main image */}
            <div className="relative rounded-4xl overflow-hidden shadow-hover"
              style={{ border: "6px solid white" }}>
              <Image
                src="/puppy2.jpg"
                alt="Cute corgi puppy playing in garden"
                width={560}
                height={600}
                className="object-cover w-full h-full"
                style={{ height: "480px" }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(244,162,97,0.15) 0%, transparent 60%)"
              }} />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-card px-5 py-4 shadow-hover animate-float">
              <p className="text-3xl font-heading font-black text-orange-500">10+</p>
              <p className="text-sm text-gray-500 font-medium">Years of Love</p>
            </div>

            {/* Decorative circle */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-60"
              style={{ background: "linear-gradient(135deg, #ffd8c0, #ffecd2)" }} />
            <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full flex items-center justify-center text-2xl animate-bounce-soft">
              🐾
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            {/* Label */}
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 text-orange-600"
              style={{ background: "rgba(244,162,97,0.15)" }}>
              🐶 Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-800 leading-tight mb-5">
              More Than Just a{" "}
              <span style={{ background: "linear-gradient(135deg, #f4a261, #e76f51)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Pet Care
              </span>{" "}
              Service
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              At Puppy Haven, we believe every puppy deserves more than just care—they deserve a
              second family. Founded in 2015, we&apos;ve been the trusted home away from home for
              thousands of furry friends and their loving owners. Our expert team of certified
              trainers and passionate caretakers work tirelessly to ensure every pup thrives.
            </p>

            {/* Bullets */}
            <div className="flex flex-col gap-4 mb-8">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(244,162,97,0.12)" }}>
                    {b.icon}
                  </div>
                  <p className="text-gray-600 font-medium mt-1.5">{b.text}</p>
                </div>
              ))}
            </div>

            <a href="#services" className="btn-primary inline-block">
              Explore Our Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
