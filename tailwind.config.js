/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: {
          DEFAULT: '#111116',
          muted: '#18181f',
          subtle: '#22222c',
        },
        accent: {
          lime: '#def54f',   // Volt Lime matching box1
          sky: '#6ac9ff',    // Electric Sky matching box2
          carbon: '#333333', // Deep Carbon matching box3
          orange: '#fa7328', // Solar Orange matching box4
          emerald: '#45db7d',// Speed Trail Green
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 30px -5px rgba(222, 245, 79, 0.35)',
        'glow-sky': '0 0 30px -5px rgba(106, 201, 255, 0.35)',
        'glow-orange': '0 0 30px -5px rgba(250, 115, 40, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(69, 219, 125, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
