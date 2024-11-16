const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "minion-yellow": "#f0db4f",
        "soft-yellow": "#f5e06a",
        "dark-yellow": "#d4b61b",
        "dark-charcoal": "#323330",
        "light-charcoal": "#4e4e4e",
        "accent-blue": "#2965f1",
        "light-gray": "#e1e1e1",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
