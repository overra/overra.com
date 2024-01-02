import type { Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [typographyPlugin],
} satisfies Config
