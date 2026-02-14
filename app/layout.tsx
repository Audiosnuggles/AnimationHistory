import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

// 1. HAUPTSCHRIFT: RUBIK (für normalen Text)
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

// 2. "MONO"-ERSATZ: AUCH RUBIK
// Damit auch die Zahlen/Daten (die technisch auf der Mono-Variable liegen)
// in Rubik angezeigt werden, mappen wir Rubik auch auf diese Variable.
const rubikForMonoPlaces = Rubik({
  subsets: ["latin"],
  variable: "--font-coordinates", 
  display: "swap",
})

export const metadata: Metadata = {
  title: "Geschichte der Animation | 1659 - 1895",
  description:
    "Eine interaktive Reise durch die Anfaenge der Animation - von der Laterna Magica bis zu den Bruedern Lumiere.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${rubik.variable} ${rubikForMonoPlaces.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}