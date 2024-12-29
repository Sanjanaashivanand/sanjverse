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
        'c-red': '#f94144', // A vibrant red color
        'c-orange': '#f3722c', // A bright orange color
        'c-l-orange': '#f8961e', // A lighter orange
        'c-yellow': '#f9c74f', // Soft yellow
        'c-green': '#90be6d', // A soft green (you can adjust this as needed)
        'c-d-green':'#43aa8b',
        'c-gray': '#577590',
        // 'pastel-pink': '#FAD0C4', // Soft Pink
        // 'pastel-blue': '#A7C7E7', // Soft Blue
        // 'pastel-green': '#A8D5BA', // Soft Green
        // 'pastel-yellow': '#FDFD96', // Soft Yellow
        // 'pastel-purple': '#D8A7CA', // Soft Purple
        // 'pastel-pink-light': '#F8B8D0', // Light Pink
        // 'pastel-teal': '#A1D8D7', // Soft Teal
      },
      animation: {
        pulse: 'pulse 5s infinite',
        bounce: 'bounce 1s infinite',
        'zoom-in-out': 'zoomInOut 3s ease-in-out infinite',
      },
      keyframes:{
        zoomInOut: {
          '0%, 100%': {
            transform: 'scale(1)', // Normal size
          },
          '50%': {
            transform: 'scale(1.1)', // Zoomed in
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
} satisfies Config;
