import type { Config } from "tailwindcss";

const config: Config = {
  // Tell Tailwind where to look for classes in your files
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      // Liquid glass UI theme extensions
      colors: {
        // Neutral base colors with subtle tints for the liquid glass aesthetic
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.15)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
      },
      backdropBlur: {
        // Custom blur values for frosted glass effect
        xs: "2px",
      },
      backgroundImage: {
        // Apple-style soft gradient background
        "app-gradient": "linear-gradient(135deg, #f9fbff 0%, #ecf2ff 40%, #e6f0ff 100%)",
        // Subtle gradients for depth
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        // Soft shadows for floating glass effect
        "soft": "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
        "soft-sm": "0 1px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03)",
        "soft-lg": "0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        // Ensure 3xl is large enough for glass panels
        "3xl": "1.5rem",
      },
      animation: {
        // Smooth fade and slide animations
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;


