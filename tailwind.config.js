/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        main: "#171717",
        "main-tertiary": "#737373",
        body: "#FFFFFF",
        "body-secondary": "#E5E5E5",
        primary: "#3B82F6",
        "log-out": "#DC262610",
        borders: "#DFE2E2",
        error: "#DC2626",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
