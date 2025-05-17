import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/nav-bar/Navbar'
import './colors.css'
import ThemeInitializer from './hooks/ThemeInitializer'
import '../lib/fontawesome'
import Sidebar from './components/side-bar/Sidebar'
import Footer from './components/footer/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
      <body>
        <ThemeInitializer />
        <Navbar />
        <Sidebar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
