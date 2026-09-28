import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--bg)',
          elevated: 'var(--bg-elevated)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          hover: 'var(--surface-hover)',
          glass: 'var(--surface-glass)',
        },
        foreground: {
          DEFAULT: 'var(--fg)',
          soft: 'var(--fg-soft)',
        },
        muted: 'var(--muted)',
        border: {
          DEFAULT: 'var(--border)',
          light: 'var(--border-light)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          glow: 'var(--accent-glow)',
          soft: 'var(--accent-soft)',
        },
        cyan: {
          DEFAULT: 'var(--cyan)',
          soft: 'var(--cyan-soft)',
        },
        amber: {
          DEFAULT: 'var(--amber)',
          soft: 'var(--amber-soft)',
        },
        // Backwards compatibility aliases
        text: {
          primary: 'var(--fg)',
          secondary: 'var(--fg-soft)',
          muted: 'var(--muted)',
        },
      },
      fontFamily: {
        fa: ['var(--font-vazirmatn)', 'Vazirmatn', 'system-ui', 'sans-serif'],
        en: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '20px',
        full: '9999px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: 'var(--card-shadow)',
        'accent-glow': '0 4px 16px var(--accent-glow)',
      },
    },
  },
  plugins: [],
};

export default config;
