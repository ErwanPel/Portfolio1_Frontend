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
        blBackground: "#0D1514",
        blSubBackground: "#111C1B",
        blBackgroundElement: "#0D2D2A",
        blHoverBackgroundElement: "#023B37",
        blSelectedBackgroundElement: "#084843",
        blBorder: "#145750",
        blElementSeparator: "#207E73",
        blHoverSolidBackground: "#0EB39E",
        blTextMin: "#0BD8B6",
        blTextMax: "#ADF0DD",
        blButton: "#12A594",
      },
    },
  },
  plugins: [],
};
