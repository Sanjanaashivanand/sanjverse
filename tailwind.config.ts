import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        pulse: 'pulse 2s infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
} satisfies Config;
