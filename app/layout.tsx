import type { Metadata } from 'next'
import { Geist, Poppins } from 'next/font/google'

import './globals.css'
import Header from '@/components/common/header'
import FooterPro from '@/components/common/footer-pro'

const geist = Geist({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Fargeaux - Learn Road Rules Before You Drive',
  description: 'Master foreign road rules with interactive flashcards and instinct training maps. Stay safe on every road. Start your free 24-hour trial today.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <FooterPro />
      </body>
    </html>
  )
}
