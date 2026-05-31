/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}" // Added to catch files in root
  ],
  theme: {
    extend: {
      backgroundColor: { 'neo-bg': '#e6eef8' },
      boxShadow: {
        'neo-out': '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff',
        'neo-in': 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff',
      }
    },
  },
  plugins: [],
}
