/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#16a34a',
      },
      backgroundImage: {
        site: "url('./assets/site-bg8.png')",
        about: "url('./assets/logo-PhotoRoom.png')",
        services: "url('./assets/logo-PhotoRoom.png')",
      },
    },
  },
  plugins: [],
};