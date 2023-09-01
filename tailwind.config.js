/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "articulat": ["Articulat", "sans-serif"],
        "arial": ["Arial", "sans-serif"]
      },
      colors: {
        "background": "rgb(22, 23, 23)",
        brand: {
          1: "#00ccff",
          2: "#00a3ff",
          3: "#007aff",
          4: "#0052ff",
          5: "#0000ff",
          6: "#0700c4"
        },
        select: "rgba(0, 204, 255, 0.5)"
      },
    }
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

