/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: '#FF3366',
        secondary: '#33CCFF',
        accent: '#FF9900',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        heading: ['Montserrat', 'Georgia', 'serif'],
        code: ['Fira Code', 'monospace'],
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '18px',
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')"
      }
    },
  },
  plugins: [],
};

