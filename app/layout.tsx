import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { MobileNav } from "@/components/sections/mobile-nav"
import { FloatingCTA } from "@/components/sections/floating-cta"
import { PageTransition } from "@/components/page-transition"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Arkel Lahi - Senior Full-Stack Developer | AI · Fintech · Healthcare",
  description:
    "Senior Full-Stack Developer with 8+ years of experience specializing in AI, Fintech, and Healthcare. Expert in React, Next.js, Node.js, and cloud technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "AI", "Fintech", "Healthcare", "TypeScript", "Node.js"],
  authors: [{ name: "Arkel Lahi" }],
  openGraph: {
    title: "Arkel Lahi - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 8+ years of experience specializing in AI, Fintech, and Healthcare.",
    url: "https://arkellahi.com",
    siteName: "Arkel Lahi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkel Lahi - Senior Full-Stack Developer",
    description: "Senior Full-Stack Developer with 8+ years of experience specializing in AI, Fintech, and Healthcare.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <MobileNav />
          <FloatingCTA />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
