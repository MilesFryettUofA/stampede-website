import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(table|checkbox|spacer).js',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#FFFFF', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      fontSize: {
        'responsive-lg': '2vw', // Responsive font size for larger screens
        'responsive-md': '3vw', // Responsive font size for medium screens
        'responsive-sm': '4vw', // Responsive font size for small screens
        'responsive-xs': '5vw', // Responsive font size for extra small screens
      },
    },
  },
  plugins: [nextui()],
};

export default config;