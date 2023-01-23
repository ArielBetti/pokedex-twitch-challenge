/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'inter'
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      }
    },
    extend: {
      colors: {
        illusion: {
          5: '#240046',
          4: '#3C096C',
          3: '#5A189A',
          2: '#7B2CBF',
          1: '#9D4EDD',
        },
        luminous: {
          5: '#BBADFF',
          4: '#CBB2FE',
          3: '#DAB6FC',
          2: '#DDBDFC',
          1: '#E0C3FC',
        },
        primary: '#ff7900'
      },
      keyframes: {
        infinityParallax: {
          "0%, 100%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "300px 300px" },
        },
        blurIn: {
          "0%, 100%": { backdropFilter: "blur(1px)" },
          "100%": { backdropFilter: "blur(5px)" },
        },
        fadeIn: {
          "0%, 100%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        downSlide: {
          "0%, 100%": {
            transform: "translateY(-20px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        upSlide: {
          "0%, 100%": {
            transform: "translateY(20px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        leftSlide: {
          "0%, 100%": {
            transform: "translateX(20px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        rightSlide: {
          "0%": {
            transform: "translateX(-20px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        hide: {
          "0%, 100%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
      animation: {
        blurIn: "blurIn 0.45s ease-in-out forwards",
        fadeIn: "fadeIn 0.4s ease forwards",
        downSlide: "downSlide 0.25s ease forwards",
        leftSlide: "leftSlide 0.25s ease forwards",
        rightSlide: "rightSlide 0.25s ease forwards",
        upSlide: "upSlide 0.25s ease forwards",
        hide: "hide 0.25s  ease forwards",
        infinityParallax: "infinityParallax 18s linear infinite",
      },
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}
