/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('/images/hero1.jpg')",
        cate: "url('/images/category.jpg')",
        login: "url('/images/Top2.png')",
        reg2: "url('/images/reg2.jpeg')",
      },
      fontFamily: {
        // poppins: ["Poppins", "sans-serif"],
        // rale: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      sm: "640px", // Small screens (e.g., smartphones)
      md: "900px", // Medium screens (e.g., tablets)
      // md: "1024px", // Medium screens (e.g., tablets)
      lg: "1200px", // Large screens (e.g., laptops)
      xl: "1480px", // Extra-large screens (e.g., desktops)
      "2xl": "1536px", // 2x extra-large screens (e.g., large desktops)
    },
  },
  plugins: [],
};
