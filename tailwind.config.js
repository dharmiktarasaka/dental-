/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          navy: {
            DEFAULT: '#0F172A',
            light: '#1E293B',
            dark: '#020617',
          },
          sky: {
            DEFAULT: '#38BDF8',
            light: '#E0F2FE',
            dark: '#0369A1',
          },
          aqua: {
            DEFAULT: '#0EA5E9',
            light: '#F0F9FF',
            dark: '#0284C7',
          },
          mint: {
            DEFAULT: '#10B981',
            light: '#D1FAE5',
            dark: '#047857',
          },
          turquoise: {
            DEFAULT: '#06B6D4',
            light: '#ECFEFF',
            dark: '#0891B2',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
        'premium-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.1)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}


