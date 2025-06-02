import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/nav-bar/Navbar'
import './colors.css'
import ThemeInitializer from './hooks/ThemeInitializer'
import '../lib/fontawesome'
import Sidebar from './components/side-bar/Sidebar'
import Footer from './components/footer/Footer'

import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Ehis Fidelis',
  description: 'Portfolio of Ehis Fidelis',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {' '}
        <ThemeInitializer />
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
