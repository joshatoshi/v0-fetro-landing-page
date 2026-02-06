import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const _ibmPlexMono = IBM_Plex_Mono({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fetro | Future Retro Devices',
  description: 'Where retro craftsmanship meets quantum-resistant security. Web3, zero-knowledge proofs, and post-quantum cryptography in beautifully crafted hardware.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
