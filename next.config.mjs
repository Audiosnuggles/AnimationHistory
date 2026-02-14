/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // WICHTIG: Wenn deine Seite unter "meinewebsite.de/animation" läuft,
  // muss hier '/animation' stehen. Wenn sie im Hauptverzeichnis liegt, lösche diese Zeile.
  basePath: '/AM_2', 
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig