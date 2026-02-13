import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'

import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Geschichte der Animation | 1659 - 1895',
  description: 'Eine interaktive Reise durch die Anfaenge der Animation - von der Laterna Magica bis zu den Bruedern Lumiere.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${coordinatesFallback.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
