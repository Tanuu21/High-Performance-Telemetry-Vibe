/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#e6eef8",
          text: "#3a4759",
          blue: "#3b82f6",
        }
      },
      boxShadow: {
        'neo-out': '-6px -6px 14px rgba(255, 255, 255, 0.85), 6px 6px 14px rgba(163, 177, 198, 0.55)',
        'neo-in': 'inset -3px -3px 7px rgba(255, 255, 255, 0.8), inset 3px 3px 7px rgba(163, 177, 198, 0.5)',
      }
    },
  },
  plugins: [],
};