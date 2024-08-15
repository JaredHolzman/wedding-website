import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      // sans: ["Graphik", "sans-serif"],
      // serif: ["adobe-garamond-pro", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["retro"],
  },
};
