import "./globals.css"

import type { Metadata, Viewport } from "next"

import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"

import ConvexClientProvider from "@/components/providers/ConvexClientProvider"

export const metadata: Metadata = {
  title: "Vibe Stack",
  description: "A production-ready full-stack starter with Next.js 15, Convex, Stripe, and shadcn/ui",
}

export const viewport: Viewport = {
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body>
        <ConvexAuthNextjsServerProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ConvexAuthNextjsServerProvider>
      </body>
    </html>
  )
}
