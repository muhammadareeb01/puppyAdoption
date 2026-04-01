"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background image with parallax */}
      <div ref={heroRef} className="absolute inset-0 will-change-transform" style={{ height: "120%" }}>
        <Image
          src="/puppy1.jpg"
          alt="Happy golden retriever puppy hero background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlay - darker for text readability */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(10,5,0,0.78) 0%, rgba(10,5,0,0.58) 50%, rgba(10,5,0,0.28) 100%)"
        }} />
      </div>

      {/* Floating Paw Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {([
          { top: "15%", left: "8%", size: "text-2xl", delay: "0s", cls: "paw-float-1" },
          { top: "70%", left: "12%", size: "text-3xl", delay: "1s", cls: "paw-float-2" },
          { top: "25%", right: "10%", size: "text-xl", delay: "2s", cls: "paw-float-3" },
          { top: "60%", right: "15%", size: "text-2xl", delay: "0.5s", cls: "paw-float-1" },
          { top: "80%", left: "30%", size: "text-lg", delay: "3s", cls: "paw-float-2" },
          { top: "40%", right: "5%", size: "text-3xl", delay: "1.5s", cls: "paw-float-3" },
        ] as { top: string; left?: string; right?: string; size: string; delay: string; cls: string }[]).map((paw, i) => (
          <span
            key={i}
            className={`absolute ${paw.size} ${paw.cls} select-none`}
            style={{ top: paw.top, left: paw.left, right: paw.right, animationDelay: paw.delay }}
          >
            🐾
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(244, 162, 97, 0.25)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(244, 162, 97, 0.4)",
              color: "#ffd8a8",
              animation: "fadeInUp 0.8s ease-out 0.1s both",
            }}
          >
            <span>🏆</span>
            <span>Award-Winning Puppy Care Since 2015</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)", animation: "fadeInUp 0.8s ease-out 0.2s both" }}
          >
            Bringing{" "}
            <span style={{
              background: "linear-gradient(135deg, #ffd8a8, #f4a261)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Happiness,
            </span>
            <br />
            One Puppy at<br />a Time
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl"
            style={{ animation: "fadeInUp 0.8s ease-out 0.35s both" }}
          >
            We provide premium puppy care, grooming, training, and adoption support—ensuring
            every furry friend gets the love they deserve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4" style={{ animation: "fadeInUp 0.8s ease-out 0.5s both" }}>
            <a href="#services" className="btn-primary text-base px-10 py-4">
              🐾 Get Started
            </a>
            <a href="#about" className="btn-outline text-base px-10 py-4">
              Learn More →
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-14"
            style={{ animation: "fadeInUp 0.8s ease-out 0.65s both" }}
          >
            {[
              { count: "2,500+", label: "Happy Puppies" },
              { count: "98%", label: "Satisfaction Rate" },
              { count: "10+", label: "Years of Care" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-heading font-black text-white"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                  {stat.count}
                </p>
                <p className="text-white/70 text-sm mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 72C960 74.7 1056 69.3 1152 61.3C1248 53.3 1344 42.7 1392 37.3L1440 32V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="#fffef7"/>
        </svg>
      </div>
    </section>
  );
}
