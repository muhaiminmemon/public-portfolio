import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedBackground from "@/components/animated-background"
import SmoothScroll from "@/components/smooth-scroll"
import "./globals.css"

export const metadata = {
  title: "Muhammad Muhaimin | Portfolio",
  description: "Personal portfolio of Muhammad Muhaimin, Computer Science student and Software Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Client-side only components */}
          <div suppressHydrationWarning>
            {typeof window === "undefined" ? null : (
              <>
                <AnimatedBackground />
                <SmoothScroll />
              </>
            )}
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'