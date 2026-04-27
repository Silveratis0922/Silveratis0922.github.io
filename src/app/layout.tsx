import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Data Engineer & Analyst',
  description: "Portfolio Data Engineering & Analyse — En recherche d'alternance Master",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
          {children}
        </main>
      </body>
    </html>
  )
}
