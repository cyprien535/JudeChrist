import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const title = "Jude Christ — L'Architecte Bleu | Portraits Pro par IA"
const description =
  "Obtenez des portraits professionnels ultra réalistes grâce à l'IA, à partir de vos selfies. Sans studio, sans rendez-vous, dès 1 000 FCFA. Livraison en 24 à 72h."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | L'Architecte Bleu",
  },
  description,
  applicationName: SITE_NAME,
  generator: 'v0.app',
  keywords: [
    'portrait professionnel IA',
    'photo professionnelle IA',
    'branding personnel',
    'optimisation profil Facebook',
    'photo de profil LinkedIn',
    'Architecte Bleu',
    'Jude Christ',
    'portrait IA Bénin',
    'portrait IA Cotonou',
    'image de marque',
  ],
  authors: [{ name: 'Jude Christ', url: SITE_URL }],
  creator: 'Jude Christ',
  publisher: 'Jude Christ',
  category: 'business',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Jude Christ, l'Architecte Bleu — Portraits professionnels par IA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'd86piX9YaDWKtvdjJ9DTXDbbNickOK47GFScWAXzd_w',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1a3f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background overflow-x-clip">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} font-sans antialiased overflow-x-clip`}
      >
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
