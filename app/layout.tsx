import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Hero from "@/components/hero"
import { prisma } from "@/server/prisma"
import { Toaster } from "@/components/ui/sonner"
import ProductList from "@/components/product-list"
import { GoogleAnalytics } from '@next/third-parties/google'
import image from './/opengraph-image.png';

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " - " + siteConfig.description,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    url: image.src,
  },
  metadataBase: new URL("https://www.pmaker.club"),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  const productList = await prisma.product.findMany({
    where: {
      isFeatured: true,
    },
  });

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">
                {children}
                <Hero />
                <ProductList data={productList} />
              </div>
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-4TEH853HHD" />
      </html>
    </>
  )
}
