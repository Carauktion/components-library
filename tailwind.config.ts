import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    colors: {
      primary: {
        shade: 'var(--color-primary-shade)',
        DEFAULT: 'var(--color-primary)',
        tint: 'var(--color-primary-tint)',
        'tint-light': 'var(--color-primary-tint-light)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        tint: 'var(--color-secondary-tint)',
      },
      success: {
        tint: 'var(--color-success-tint)',
        DEFAULT: 'var(--color-success)',
      },
      'success-2': 'var(--color-success-2)',
      warning: {
        tint: 'var(--color-warning-tint)',
        DEFAULT: 'var(--color-warning)',
      },
      danger: {
        tint: 'var(--color-danger-tint)',
        DEFAULT: 'var(--color-danger)',
      },
      dark: 'var(--color-dark)',
      'light-dark': 'var(--color-light-dark)',
      medium: {
        tint: 'var(--color-medium-tint)',
        DEFAULT: 'var(--color-medium)',
      },
      light: 'var(--color-light)',
      'light-2': {
        tint: 'var(--color-light-2-tint)',
        DEFAULT: 'var(--color-light-2)',
      },
      'light-3': {
        tint: 'var(--color-light-3-tint)',
        DEFAULT: 'var(--color-light-3)',
      },
      'light-4': {
        tint: 'var(--color-light-4-tint)',
        DEFAULT: 'var(--color-light-4)',
      },
      'border-light': 'var(--color-border-light)',
      background: 'var(--color-background)',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      'light-grey': 'var(--color-grey-light)',
      'very-light-grey': 'var(--color-grey-very-light)',
      'fo-accent': {
        DEFAULT: 'var(--color-fo-accent)',
        tint: 'var(--color-fo-accent-tint)',
        light: 'var(--color-fo-accent-light)',
      },
      nav: {
        accent: 'var(--color-nav-accent)',
        bg: 'var(--color-nav-bg)',
        hover: {
          DEFAULT: 'var(--color-nav-hover)',
          fo: 'var(--color-nav-hover-fo)',
        },
        text: 'var(--color-nav-text)',
        caption: {
          DEFAULT: 'var(--color-nav-caption)',
          light: 'var(--color-nav-caption-light)',
        },
        border: 'var(--color-nav-border)',
        'popup-border': 'var(--color-nav-popup-border)',
        btn: {
          text: 'var(--color-nav-btn-text)',
          border: 'var(--color-nav-btn-border)',
          bg: 'var(--color-nav-btn-bg)',
        },
      },
      'banner-text': 'var(--color-banner-text)',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary-shade)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
} satisfies Config
