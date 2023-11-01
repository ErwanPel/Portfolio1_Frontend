/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lgBackground: "#FAFEFD",
        lgSubBackground: "#F3FBF9",
        lgBackgroundElement: "#E0F8F3",
        lgHoverBackgroundElement: "#CCF3EA",
        lgSelectedBackgroundElement: "#B8EAE0",
        lgBorder: "#83CDC1",
        lgElementSeparator: "#53B9AB",
        lgHoverSolidBackground: "#0D9B8A",
        lgTextMin: "#008573",
        lgTextMax: "#0D3D38",
        lgButton: "#12A594",
      },
    },
  },
  plugins: [],
};
