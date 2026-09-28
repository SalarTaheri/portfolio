import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { seoMeta, profile, projects } from '@/data/portfolio';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

const jakarta = localFont({
  src: [
    { path: '../../public/fonts/PlusJakartaSans-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaSans-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaSans-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaSans-700.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/PlusJakartaSans-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrainsMono = localFont({
  src: [
    { path: '../../public/fonts/JetBrainsMono-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/JetBrainsMono-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/JetBrainsMono-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-jetbrains',
  display: 'swap',
});

const vazirmatn = localFont({
  src: [
    { path: '../../public/fonts/Vazirmatn-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Vazirmatn-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Vazirmatn-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Vazirmatn-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(seoMeta.url),
  title: seoMeta.title,
  description: seoMeta.description,
  keywords: seoMeta.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: 'profile',
    url: seoMeta.url,
    title: seoMeta.title,
    description: seoMeta.description,
    siteName: `${profile.name} — Portfolio`,
    images: [
      {
        url: seoMeta.ogImage,
        width: 1200,
        height: 630,
        alt: seoMeta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMeta.title,
    description: seoMeta.description,
    images: [seoMeta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: seoMeta.url,
  email: profile.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tehran',
    addressCountry: 'IR',
  },
  sameAs: [profile.linkedin, profile.github],
  description: seoMeta.description,
  knowsAbout: [
    'Android Development',
    'Kotlin',
    'POS Systems',
    'Fintech',
    'ISO 8583',
    'Biometric eKYC',
    'Jetpack Compose',
    'AIDL',
    'Java Card',
    'Linux',
    'Docker',
    'CI/CD',
  ],
};

const jsonLdSoftwareProjects = projects.map((p) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: p.title,
  description: p.tagline,
  programmingLanguage: p.tech.map((t) => t.name),
  author: {
    '@type': 'Person',
    name: profile.name,
  },
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="color-scheme" content="dark light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        {jsonLdSoftwareProjects.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} ${vazirmatn.variable} font-fa bg-[var(--bg)] text-[var(--fg)] antialiased selection:bg-[rgba(16,185,129,0.25)] selection:text-[var(--fg)]`}
      >
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
