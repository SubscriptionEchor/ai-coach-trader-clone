/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'xs': ['0.8125rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'sm': ['0.9375rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '3xl': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '4xl': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      colors: {
        primary: {
          light: "rgb(191, 231, 255)",
          DEFAULT: "rgb(51, 144, 255)",
          dark: "rgb(0, 99, 235)",
        },
        secondary: {
          light: "rgb(191, 231, 255)",
          DEFAULT: "rgb(51, 144, 255)",
          dark: "rgb(0, 99, 235)",
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(309deg, rgb(191,231,255) 2.25%, rgb(51,144,255) 48.08%, rgb(0,99,235) 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(ellipse at 40% 20%, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};