/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "648px",
      md: "768px",
      lg: "1824px",
      xl: "1288px",
    },
    fontFamily: {
      primary: "var(--font-bebas)",
      secondary: "var(--font-inter)",
    },
    extend: {
      colors: {
        primary: "10151F",
        secondary: "#475467",
        accent: {
          DEFAULT: "7edad2",
          HOVER: "#79d3cc",
        },
      },
      boxShadow: {
        custom: "0px 14px 54 rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
