/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PFBeauSansProRegular: ["PFBeauSansProRegular", "sans"],
        PFBeauSansProBlack: ["PFBeauSansProBlack", "sans"],
        PFBeauSansProSemiBold: ["PFBeauSansProSemiBold", "sans"],
        PFBeauSansProLight: ["PFBeauSansProLight", "sans"],
        TekoMedium: ["TekoMedium", "sans"],
        TekoSemiBold: ["TekoSemiBold", "sans"],
        TekoBold: ["TekoBold", "sans"],
        RobotoBold: ["RobotoBold", ["sans"]],
      },
      colors: {
        darkBlue: "rgba(1, 13, 38, 1)",
        customRed: "rgba(190, 10, 47, 1)",
      },
    },
  },
  plugins: [],
};
