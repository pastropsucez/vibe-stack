import { type Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        // Gray Scale
        white: "#fff",
        silver: "hsl(var(--silver))",
        grey: "#aaa",
        black: "#111",
        "grey-10": "hsl(var(--grey10))",
        "grey-15": "hsl(var(--grey15))",
        "grey-30": "hsl(var(--grey30))",
        "grey-50": "hsl(var(--grey50))",

        // Semantic colors
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        tertiary: {
          DEFAULT: "rgb(var(--tertiary) / <alpha-value>)",
          foreground: "rgb(var(--tertiary-foreground) / <alpha-value>)",
        },
        disabled: "#b3b5b8",
        bad: "#ff4136",
        good: "#56af8a",
        info: "#0074d9",
        warning: "#ff851b",
        subtle: "#aaa",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          input: "rgb(var(--border-input) / <alpha-value>)",
          card: "rgb(var(--border-card) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        label: "rgb(var(--label) / <alpha-value>)",
        link: "rgb(var(--secondary) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "5px",
        btn: "5px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        DEFAULT: "20px",
        unit: "4px",
      },
      boxShadow: {
        DEFAULT:
          "0 5px 15px 0 rgba(0, 0, 0, 0.07), 0 15px 35px 0 rgba(49, 49, 93, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
