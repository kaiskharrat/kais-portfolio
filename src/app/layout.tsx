import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kaiskharrat.com'),
  title: {
    default: 'Kais Kharrat — Software Engineer, E-commerce & Digital Builder',
    template: '%s | Kais Kharrat',
  },
  description:
    'Portfolio of Kais Kharrat, a software engineer and multidisciplinary digital builder working across technology, e-commerce, design and automation.',
  keywords: [
    'Kais Kharrat',
    'Software Engineer',
    'Full-Stack Developer',
    'E-commerce',
    'Digital Builder',
    'Brand Design',
    'Automation',
    'Tunisia',
    'Next.js',
    'Angular',
    'Spring Boot',
  ],
  authors: [{ name: 'Kais Kharrat', url: 'https://kaiskharrat.com' }],
  creator: 'Kais Kharrat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaiskharrat.com',
    siteName: 'Kais Kharrat',
    title: 'Kais Kharrat — Digital Builder',
    description: 'I design, build and grow digital experiences.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kais Kharrat — Digital Builder',
    description: 'I design, build and grow digital experiences.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
