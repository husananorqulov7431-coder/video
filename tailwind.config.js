/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        antidark: "#090d16",
        antisurface: "#121826",
        antiblue: "#38bdf8",
        antipurple: "#a855f7",
        antigreen: "#10b981",
        antiaccent: "#6366f1"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"]
      }
    }
  },
  plugins: []
};
