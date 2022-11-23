/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: "'IBM Plex Sans', sans-serif",
        mono: "'IBM Plex Mono', monospace",
        hackernoon: 'Hackernoon',
        hackernoonv2: 'HackernoonV2',
      },
      container: {
        center: true,
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1140px',
        },
      },
      colors: {
        white: {
          200: 'rgb(255, 255, 255)',
          100: 'rgb(246, 247, 249)',
        },
        black: {
          100: 'rgb(0, 0, 0)',
        },
        gray: {
          100: 'rgb(60, 60, 59)',
          200: 'rgb(33, 36, 40)',
        },
        green: {
          100: 'rgb(98, 255, 134)',
          200: 'rgb(0, 255, 0)',
          300: 'rgb(0, 187, 0)',
          400: 'rgb(0, 59, 0)',
        },
      },
      height: {
        header: '56px',
        navbar: '42px',
      },
      spacing: {
        header: '56px',
        top: '98px',
      },
      backgroundImage: {
        grad: 'linear-gradient(transparent 0%, transparent calc(50% - 9px), rgba(0, 255, 0, 0.35) calc(50% - 9px), rgba(0, 255, 0, 0.35) 100%)',
        'grad-hover':
          'linear-gradient(transparent 0%, transparent calc(50% - 9px), rgb(0, 255, 0) calc(50% - 9px), rgb(0, 255, 0) 100%)',
      },
    },
    keyframes: {
      typing: {
        from: {width: 0},
        to: {width: '100%'},
      },
    },
    animation: {
      typing: 'typing 3.5s steps(40, end)',
    },
  },
  plugins: [],
}
