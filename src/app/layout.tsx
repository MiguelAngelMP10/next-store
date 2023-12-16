"use client"

import { Inter } from 'next/font/google'
import { Header } from 'app/components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('Hola mundo layout')
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      </body>
    </html>
  )
}