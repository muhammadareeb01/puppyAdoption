import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fffef7",
          100: "#fefbe8",
          200: "#fdf5c4",
          300: "#fbed97",
          400: "#f8e05e",
          500: "#f3cc2e",
        },
        peach: {
          50: "#fff5f0",
          100: "#ffe8db",
          200: "#ffd0b5",
          300: "#ffb088",
          400: "#ff8c5a",
          500: "#ff6b35",
        },
        sky: {
          pastel: "#c8e6f9",
          light: "#e8f4fd",
          soft: "#b3d9f5",
        },
        lilac: {
          50: "#f5f0ff",
          100: "#ede5ff",
          200: "#d8ccff",
          300: "#bda8ff",
          400: "#9d7dff",
        },
        mint: {
          50: "#f0fdf8",
          100: "#dcfcee",
          200: "#bbf7d8",
          300: "#86efb9",
        },
        pup: {
          gold: "#f4a261",
          coral: "#e76f51",
          sage: "#81b29a",
          sky: "#8ecae6",
          cream: "#fefae0",
          peach: "#ffb4a2",
          lavender: "#b8a9c9",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
        heading: ["Nunito", "Outfit", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "zoom-in": "zoomIn 6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "float-delay": "float 3s ease-in-out 1s infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "paw-float": "pawFloat 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pawFloat: {
          "0%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.3" },
          "50%": { transform: "translateY(-20px) rotate(10deg)", opacity: "0.6" },
          "100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.3" },
        },
      },
      backgroundImage: {
        "pastel-gradient": "linear-gradient(135deg, #fefae0 0%, #ffd8c0 25%, #c8e6f9 50%, #e8d5f5 75%, #dcfcee 100%)",
        "hero-gradient": "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.1) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
      },
      boxShadow: {
        "soft": "0 4px 24px rgba(0,0,0,0.06)",
        "card": "0 8px 32px rgba(0,0,0,0.08)",
        "hover": "0 16px 48px rgba(0,0,0,0.14)",
        "glow-peach": "0 0 20px rgba(255,180,130,0.4)",
        "glow-blue": "0 0 20px rgba(142,202,230,0.4)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
