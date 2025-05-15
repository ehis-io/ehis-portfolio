import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import './colors.css'
import ThemeInitializer from './components/ThemeInitializer'
import '../lib/fontawesome'
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
    <html lang="en">
      <body>
        <ThemeInitializer />
        <Navbar />

        {children}
      </body>
    </html>
  )
}
