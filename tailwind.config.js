/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["mono-bold", "mono-regular"],
      },
      colors: {
        primaryBg: "var(--background)",
        secondaryBg: "var(--secondary-bg)",
        primaryText: "var(--primary-text)",
        secondaryText: "var(--secondary-text)",
        TertiaryBg: "var(--tertiary-bg)",
        navBg: "var(--nav-bg)",
      },
    },
  },
  plugins: [],
};
