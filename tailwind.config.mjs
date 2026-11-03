/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        dark: {
          950: '#070a12',
          900: '#0b1120',
          850: '#0f172a',
          800: '#1e293b',
        }
      },
      fontFamily: {
        sans: [
          'JetBrainsMono Nerd Font',
          'JetBrainsMono NF',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        mono: [
          'JetBrainsMono Nerd Font',
          'JetBrainsMono NF',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        display: [
          'JetBrainsMono Nerd Font',
          'JetBrainsMono NF',
          'JetBrains Mono',
          'monospace',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
