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
    colors: {
      "primary": "#193569",
      "secondary": "#3167D1",
      "tartiary": "#333333",
      "l-blue": "#F4FBFF",
      "red": "#C00000"
    },
    background: {
      'custom-gradient': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
      'custom-gradient2': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
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
    scrollBehavior: {
      smooth: 'smooth',
    },
    width:{
      'custom-size': '400px',
      'logo':'200px',
    },
    height:{
      'custom-height': '503px',
      'footer': '94px',
    },
    },
  },
  plugins: [],
}

