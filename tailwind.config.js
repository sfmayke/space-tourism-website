/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      fontSize: {
        h1: ["9.375rem", { lineHeight: "10.744rem" }],
        h2: ["6.25rem", { lineHeight: "7.163rem" }],
        h3: ["3.5rem", { lineHeight: "4.011rem" }],
        h4: ["4.011rem", { lineHeight: "2.292rem" }],
        h5: ["1.75rem", { lineHeight: "2.1rem", letterSpacing: "0.295rem" }],
        sh1: ["1.75rem", { lineHeight: "2.006rem" }],
        sh2: ["0.875rem", { lineHeight: "1.05rem", letterSpacing: "0.148rem" }],
        nav: ["1rem", { lineHeight: "1.2rem", letterSpacing: "0.169rem" }],
        body: ["1.125rem", { lineHeight: "2rem" }],
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        "barlow-condensed": ["var(--font-barlow_condensed)"],
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
    },
  },
  plugins: [],
};
