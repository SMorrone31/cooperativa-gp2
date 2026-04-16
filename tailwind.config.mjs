@import "tailwindcss";

@theme {
  /* Colori custom */
  --color-salvia:          #7A9E7E;
  --color-salvia-light:    #A8C5AC;
  --color-salvia-dark:     #5A7D5E;
  --color-terracotta:      #C47B5A;
  --color-terracotta-light:#D9A08A;
  --color-terracotta-dark: #A05C3C;
  --color-ocra:            #D4A843;
  --color-ocra-light:      #E8C97A;
  --color-ocra-dark:       #B08A20;
  --color-avorio:          #F7F3EC;
  --color-avorio-dark:     #EDE6D6;
  --color-caldo:           #FAF6EE;
  --color-marrone:         #4A3728;
  --color-marrone-light:   #6B5040;

  /* Font */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans:  'Nunito', system-ui, sans-serif;

  /* Shadow */
  --shadow-warm:    0 4px 24px -4px rgb(74 55 40 / 0.12);
  --shadow-warm-lg: 0 12px 48px -8px rgb(74 55 40 / 0.18);
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette calda e vitale — zero blu freddo, zero grigio ospedaliero
        salvia:    { DEFAULT: '#7A9E7E', light: '#A8C5AC', dark: '#5A7D5E' },
        terracotta:{ DEFAULT: '#C47B5A', light: '#D9A08A', dark: '#A05C3C' },
        ocra:      { DEFAULT: '#D4A843', light: '#E8C97A', dark: '#B08A20' },
        avorio:    { DEFAULT: '#F7F3EC', dark: '#EDE6D6' },
        caldo:     { DEFAULT: '#FAF6EE' },          // background principale
        marrone:   { DEFAULT: '#4A3728', light: '#6B5040' }, // testi scuri
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Nunito', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Accessibilità: body minimo 17px
        'body':   ['17px', { lineHeight: '1.75' }],
        'body-lg':['19px', { lineHeight: '1.8'  }],
      },
      spacing: {
        'section': '6rem',         // padding sezioni
        'section-sm': '4rem',
      },
      borderRadius: {
        'organic': '60% 40% 55% 45% / 45% 55% 45% 55%', // forme morbide
      },
      boxShadow: {
        'warm':  '0 4px 24px -4px rgba(74, 55, 40, 0.12)',
        'warm-lg':'0 12px 48px -8px rgba(74, 55, 40, 0.18)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};