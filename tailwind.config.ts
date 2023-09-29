import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'dark-soft': 'hsl(0, 0%, 55%)',
        'dark-accent': 'hsl(0, 0%, 41%)',
        'link-footer': 'hsl(228, 45%, 44%)',
      },
      margin: {
        '15percen': '15%',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
