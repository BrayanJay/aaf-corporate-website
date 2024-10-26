/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      'bluegradient': 'linear-gradient(to top, #3558D4 0%, #0085FF 100%)',
      'darkbluegradient': 'linear-gradient(to top, #0D288A 0%, #3558D4 100%)',
      'bluegoldgradient': 'linear-gradient(to bottom 0%, #004FC6, #FFB800 100%)',
      'goldgradient': 'linear-gradient(to top, #E69800 0%, #FFD600 100%)',
      'lightbluegradient': 'linear-gradient(to right, #3558D4 0%, #0085FF 100%)',
      'custom-gradient2': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      'bgdesign': "url('./assets/design.svg')",
      'banner1': "url('./assets/bannerimg1.svg')",
    },
    },
  },
  plugins: [],
}

