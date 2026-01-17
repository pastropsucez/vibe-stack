import "./globals.css"

import type { Metadata, Viewport } from "next"
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"

import ConvexClientProvider from "@/components/providers/ConvexClientProvider"

const siteConfig = {
  name: "Vibe Stack",
  description:
    "A production-ready full-stack starter with Next.js 15, Convex, Stripe, and shadcn/ui. Start building your SaaS in minutes.",
  url: process.env.SITE_URL || "http://localhost:3000",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["SaaS", "Next.js", "Convex", "Stripe", "React", "TypeScript"],
  authors: [{ name: "Vibe Stack" }],
  creator: "Vibe Stack",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
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
