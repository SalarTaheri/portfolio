import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F19',
        surface: '#111827',
        'surface-2': '#1a2235',
        border: '#1E2D3D',
        'border-bright': '#2E4A6A',
        accent: {
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          'blue-dark': '#1D4ED8',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          'cyan-dark': '#0891B2',
        },
        text: {
          primary: '#F0F4FF',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        vazir: ['var(--font-vazirmatn)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
        `,
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(59,130,246,0.15), transparent)',
        'blue-glow': 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
        'cyan-glow': 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        'float-up': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-up': 'float-up 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)',
        glass: '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        card: '0 2px 16px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
