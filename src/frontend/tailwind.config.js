/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

import plugin from "tailwindcss/plugin";

module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "var(--white)",
        'high-light-gray': "var(--high-light-gray)",
        'almost-light-blue': "var(--almost-light-blue)",
        'high-indigo': "var(--high-indigo)",
        'medium-high-indigo': "var(--medium-high-indigo)",
        'medium-emerald': "var(--medium-emerald)",
        'status-yellow': "var(--status-yellow)",
        'almost-medium-green': "var(--almost-medium-green)",
        'almost-medium-blue': "var(--almost-medium-blue)",
        'medium-indigo': "var(--medium-indigo)",
        'light-slate': "var(--light-slate)",
        'success-background': "var(--success-background)",
        'success-foreground': "var(--success-foreground)",
        'status-green': "var(--status-green)",
        'medium-dark-green': "var(--medium-dark-green)",
        'light-blue': "var(--light-blue)",
        'dark-blue': "var(--dark-blue)",
        'medium-blue': "var(--medium-blue)",
        'medium-dark-blue': "var(--medium-dark-blue)",
        'almost-medium-red': "var(--almost-medium-red)",
        'medium-dark-red': "var(--medium-dark-red)",
        'error-foreground': "var(--error-foreground)",
        'dark-red': "var(--dark-red)",
        'error-background': "var(--error-background)",
        'status-red': "var(--status-red)",
        'almost-medium-gray': "var(--almost-medium-gray)",
        'almost-dark-gray': "var(--almost-dark-gray)",
        'medium-dark-gray': "var(--medium-dark-gray)",
        'medium-low-gray': "var(--medium-low-gray)",
        'medium-gray': "var(--medium-gray)",
        'high-dark-gray': "var(--high-dark-gray)",
        'light-gray': "var(--light-gray)",
        'dark-gray': "var(--dark-gray)",
        'btn-shadow': "var(--round-btn-shadow)",
        buildBackground: "var(--build-background)",
        build: "var(--build-trigger)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  darkMode: "class",
  important: true,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "var(--white)",
        'high-light-gray': "var(--high-light-gray)",
        'almost-light-blue': "var(--almost-light-blue)",
        'high-indigo': "var(--high-indigo)",
        'medium-high-indigo': "var(--medium-high-indigo)",
        'medium-emerald': "var(--medium-emerald)",
        'status-yellow': "var(--status-yellow)",
        'almost-medium-green': "var(--almost-medium-green)",
        'almost-medium-blue': "var(--almost-medium-blue)",
        'medium-indigo': "var(--medium-indigo)",
        'light-slate': "var(--light-slate)",
        'success-background': "var(--success-background)",
        'dark-green': "var(--dark-green)",
        'status-green': "var(--status-green)",
        'medium-dark-green': "var(--medium-dark-green)",
        'medium-light-blue': "var(--medium-light-blue)",
        'almost-dark-blue': "var(--almost-dark-blue)",
        'light-blue': "var(--light-blue)",
        'dark-blue': "var(--dark-blue)",
        'medium-blue': "var(--medium-blue)",
        'medium-dark-blue': "var(--medium-dark-blue)",
        'almost-medium-red': "var(--almost-medium-red)",
        'medium-dark-red': "var(--medium-dark-red)",
        'error-foreground': "var(--error-foreground)",
        'dark-red': "var(--dark-red)",
        'error-background': "var(--error-background)",
        'status-red': "var(--status-red)",
        'almost-medium-gray': "var(--almost-medium-gray)",
        'almost-dark-gray': "var(--almost-dark-gray)",
        'medium-dark-gray': "var(--medium-dark-gray)",
        'medium-low-gray': "var(--medium-low-gray)",
        'medium-gray': "var(--medium-gray)",
        'high-dark-gray': "var(--high-dark-gray)",
        'light-gray': "var(--light-gray)",
        'dark-gray': "var(--dark-gray)",
        'btn-hover-bg': "var(--hover-btn-background)",
        'btn-shadow': "var(--round-btn-shadow)",
        buildBackground: "var(--build-background)",
        build: "var(--build-trigger)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        pulseGreen: {
          "0%": { boxShadow: "0 0 0 0 rgba(72, 187, 120, 0.7)" },
          "100%": { boxShadow: "0 0 0 10px rgba(72, 187, 120, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-green": "pulseGreen 1s linear",
        "spin-once": "spin 1s linear 0.7",
      },
      borderColor: {
        "red-outline": "rgba(255, 0, 0, 0.8)",
        "green-outline": "rgba(72, 187, 120, 0.7)",
      },
      boxShadow: {
        "red-outline": "0 0 5px rgba(255, 0, 0, 0.5)",
        "green-outline": "0 0 5px rgba(72, 187, 120, 0.7)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".truncate-multiline": {
          display: "-webkit-box",
          "-webkit-line-clamp":
            "3" /* Change this number to the number of lines you want to show */,
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
        ".truncate-doubleline": {
          display: "-webkit-box",
          "-webkit-line-clamp":
            "2" /* Change this number to the number of lines you want to show */,
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },

        ".arrow-hide": {
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        },
        ".password": {
          "-webkit-text-security": "disc",
          "font-family": "text-security-disc",
        },
        ".stop": {
          "-webkit-animation-play-state": "paused",
          "-moz-animation-play-state": "paused",
          "animation-play-state": "paused",
        },
        ".custom-scroll": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "999px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bbb",
          },
        },
        ".dark .theme-attribution .react-flow__attribution": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          padding: "0px 5px",
        },
        ".dark .theme-attribution .react-flow__attribution a": {
          color: "black",
        },
      });
    }),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
