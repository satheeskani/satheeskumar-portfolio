/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        indigo: {
          DEFAULT: '#4338ca',
          dark:    '#3730a3',
          light:   '#eef2ff',
          mid:     '#c7d2fe',
        },
        ink: {
          DEFAULT: '#0f172a',
          2:       '#334155',
          3:       '#64748b',
          4:       '#94a3b8',
        },
        border: '#e2e8f0',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)',
        panel: '0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
        lift:  '0 8px 24px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)',
        float: '0 12px 32px rgba(0,0,0,0.11), 0 4px 12px rgba(0,0,0,0.05)',
        cta:   '0 4px 16px rgba(67,56,202,0.32), 0 1px 4px rgba(67,56,202,0.18)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
        pingSlow: {
          '0%':   { transform: 'scale(1)', opacity: 0.7 },
          '100%': { transform: 'scale(2.2)', opacity: 0 },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'float-0':   'float 3.0s ease-in-out infinite',
        'float-1':   'float 3.3s ease-in-out 0.25s infinite',
        'float-2':   'float 3.6s ease-in-out 0.5s infinite',
        'float-3':   'float 3.9s ease-in-out 0.75s infinite',
        'ping-slow': 'pingSlow 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
