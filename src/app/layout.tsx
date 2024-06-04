import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'

import Header from '@/Layouts/Header'
import Footer from '@/Layouts/Footer'
import RightMenu from '@/Layouts/RightMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tris Ielts',
  description: 'Tris Ielts'
}

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className='bg-[#f8f8f8]'>
            <div className='ct-container min-h-dvh w-full py-10'>
              <div className='grid gap-20 lg:grid-cols-3'>
                <div className='flex flex-col gap-10 lg:col-span-2'>{children}</div>
                <RightMenu />
              </div>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
