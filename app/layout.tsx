import '../styles/globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Navigation } from './components/Navigation'

export const metadata: Metadata = {
  title: 'Bunker app',
  description: 'Purbea next Js'
}

export default function RootLayout ({
  children
}: { children: ReactNode}) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
