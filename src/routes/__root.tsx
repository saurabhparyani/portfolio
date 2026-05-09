/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'
import * as React from 'react'

import ThemeContextProvider from '@/context/theme-context'
import ThemeSwitch from '@/components/theme-switch'
import Loader from '@/components/Loader'
import ScrollToTop from '@/components/scroll-to-top'

import appCss from '@/src/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Saurabh Paryani' },
      { name: 'description', content: 'Full-stack web developer in the making!' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50/90">
        <Loader />
        <ThemeContextProvider>
          <Outlet />
          <Toaster position="top-right" />
          <ScrollToTop />
          <ThemeSwitch />
        </ThemeContextProvider>
        <Scripts />
      </body>
    </html>
  )
}
