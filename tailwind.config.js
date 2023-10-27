/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lgBackground: "#F3FBF9",
        lgBackgroundElement: "#CCF3EA",
        lgBorder: "#83CDC1",
        lgElementSeparator: "#53B9AB",
        lgText: "#008573",
        lgButton: "#12A594",
      },
    },
  },
  plugins: [],
};
