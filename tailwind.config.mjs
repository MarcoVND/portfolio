/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#fca311",

          secondary: "#1c1b23",

          accent: "#0099FF",

          neutral: "#ff00ff",

          "base-100": "#1c1b23",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
        light: {
          primary: "#fca311",

          secondary: "#14213d",

          accent: "#0099FF",

          neutral: "#ff00ff",

          "base-100": "#fff",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
