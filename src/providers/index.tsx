'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { NextUIProvider } from '@nextui-org/react'
import ScrollToTop from '@/components/ScrollToTop'
import { useEffect, useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='light'>
        <ToastContainer />
        <ProgressBar height='4px' color='#3748A0' options={{ showSpinner: true }} shallowRouting />
        {children}
        <ScrollToTop />
      </NextThemesProvider>
    </NextUIProvider>
  )
}
