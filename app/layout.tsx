

import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'


const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
      <ClerkProvider>

    <html lang="en">
      <body className='h-screen overflow-hidden'>
        <Navbar/>
        {children}
      
      </body>

    </html>
      </ClerkProvider>
  )
}
