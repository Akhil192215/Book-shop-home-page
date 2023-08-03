/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:"#ffca42",
        primary:"#1b3764"
      },
      screens: {
      // Small screens (e.g., smartphones)
        'md': '1200px',   // Medium screens (e.g., tablets)
        'lg': '1024px',  // Large screens (e.g., desktops)
        // Add more custom breakpoints if needed
      },
    },
  },
  plugins: [],
}

