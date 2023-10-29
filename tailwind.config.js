/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lgBackground: "#F3FBF9",
        lgSubBackground: "#E0F8F3",
        lgBackgroundElement: "#CCF3EA",
        lgHoverBackgroundElement: "#CCF3EA",
        lgBorder: "#83CDC1",
        lgElementSeparator: "#53B9AB",
        lgTextMin: "#008573",
        lgTextMax: "#0D3D38",
        lgButton: "#12A594",
      },
    },
  },
  plugins: [],
};
