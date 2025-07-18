// app/layout.tsx
import React from 'react'
import { type Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Head } from '@/components/head'
import { TooltipProvider } from '@/components/ui/tooltip'
import { RESUME_DATA } from '@/data/resume-data'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: `CV | ${RESUME_DATA.name}`,
  description: `${RESUME_DATA.about}`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative overflow-x-hidden',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {/* Gradient Background Image */}
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 w-full h-full animate-gradient-zoom bg-no-repeat bg-cover bg-center dark:opacity-20"
            style={{
              backgroundImage: "url('/Gradient-Background-Best-Wallpaper-16349.jpg')"
            }}
          >
            {/* Optional: Overlay for readability */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
          </div>
          {/* Floating SVG Blob Graphic */}
          <svg
            aria-hidden="true"
            className="fixed left-1/2 top-1/3 -z-10 w-[600px] h-[600px] -translate-x-1/2 opacity-40 dark:opacity-20 blur-2xl animate-blob-float pointer-events-none select-none"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blobGradient" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7F7FD5" />
                <stop offset="0.5" stopColor="#86A8E7" />
                <stop offset="1" stopColor="#91EAE4" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blobGradient)"
              d="M300,60Q370,120,420,200Q470,280,420,360Q370,440,300,500Q230,440,180,360Q130,280,180,200Q230,120,300,60Z"
            />
          </svg>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
