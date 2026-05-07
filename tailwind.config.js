/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111418',
        paper: '#FAFAF7',
        accent: '#C8553D',
        mark: '#0CC19E',
        neutral: {
          900: '#111418',
          700: '#3A3F45',
          500: '#6B7280',
          300: '#C9CDD2',
          200: '#E4E5E1',
          100: '#F2F1EC',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '1280px',
        prose: '680px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
