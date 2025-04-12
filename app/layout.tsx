import "@/styles/globals.css"
import { Metadata } from "next"
import image from "@/public/opengraph-image.png"
import { GoogleAnalytics } from "@next/third-parties/google"

import { copywritingConfig } from "@/config/copywriting"
import { siteConfig } from "@/config/site"
import { toolsConfig } from "@/config/tools"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Hero from "@/components/hero"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import ToolList from "@/components/tool-list"

export const dynamic = "force-dynamic"

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
  metadataBase: new URL("https://ai-workflow-directory.vercel.app"),
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
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
                <ToolList data={toolsConfig} />
              </div>
              <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                  <p className="text-center text-sm text-muted-foreground md:text-left">
                    {copywritingConfig.footer.description}
                  </p>
                  <p className="text-center text-sm text-muted-foreground md:text-right">
                    {copywritingConfig.footer.copyright}
                  </p>
                </div>
              </footer>
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
