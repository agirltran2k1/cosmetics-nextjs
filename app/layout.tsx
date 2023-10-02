import './globals.css'
import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'


const bevietnampro = Be_Vietnam_Pro({ subsets: ['latin'], weight:"400" })

export const metadata: Metadata = {
  title: 'Matrix Cosmetic',
  description: 'E-Commerce App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bevietnampro.className}>
        {children}
      </body>
    </html>
  )
}
