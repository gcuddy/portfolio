import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gimlet Sans Variable Web", ...defaultTheme.fontFamily.sans],
        display: [
          "Roslindale Display Wide Web",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [],
};
