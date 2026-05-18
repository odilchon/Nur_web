import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Кремовый фон бренда Nur Delivery
        cream: {
          DEFAULT: "#F2EFE5",
          deep: "#EAE6D7",
          card: "#FBFAF4",
        },
        // Королевский синий — основной акцент
        royal: {
          50: "#EEF3F8",
          100: "#D8E3EF",
          200: "#B0C7DD",
          300: "#83A6C6",
          400: "#5C87AE",
          500: "#3F6EA5", // основной
          600: "#345C8C",
          700: "#2B4B72",
          800: "#22324A", // тёмный текст
          900: "#1A2738",
        },
        // Фирменный градиент-glow (использовать дозированно)
        glow: {
          coral: "#DE5246",
          violet: "#9A6FB0",
          blue: "#4A6FB0",
        },
        ink: {
          DEFAULT: "#22324A",
          soft: "#4A5A70",
          muted: "#7C8794",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(34, 50, 74, 0.28)",
        card: "0 10px 34px -16px rgba(34, 50, 74, 0.22)",
      },
      backgroundImage: {
        "nur-glow":
          "radial-gradient(60% 70% at 28% 42%, rgba(222,82,70,0.55) 0%, rgba(222,82,70,0) 60%), radial-gradient(55% 65% at 62% 55%, rgba(154,111,176,0.5) 0%, rgba(154,111,176,0) 65%), radial-gradient(80% 90% at 85% 50%, rgba(74,111,176,0.7) 0%, rgba(74,111,176,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
