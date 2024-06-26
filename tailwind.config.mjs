import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        blurFadeIn: "blurFadeIn 0.7s ease-in-out",
      },
      fontFamily: {
        system: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Gimlet Sans Variable Web", ...defaultTheme.fontFamily.sans],
        display: [
          "Roslindale Display Wide Web",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      keyframes: {
        blurFadeIn: {
          "0%": {
            filter: "blur(4px)",
            opacity: 0,
          },
          "100%": {
            filter: "blur(0px)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
