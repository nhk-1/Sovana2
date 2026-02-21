import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F1A',
        primary: '#1E5EFF',
        secondary: '#2C7BFF',
        accent: '#59C3F7',
        cyan: '#7ED6F9',
        text: '#F5F7FA',
        muted: '#9CA3AF'
      },
      backgroundImage: {
        signature: 'linear-gradient(135deg, #1E5EFF 0%, #2C7BFF 40%, #59C3F7 100%)'
      },
      boxShadow: {
        glow: '0 10px 30px rgba(30, 94, 255, 0.25)'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both'
      }
    }
  },
  plugins: []
};

export default config;
