import "@/app/globals.css"

import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { MobileMenuProvider } from "@/components/mobile-menu-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Demand Cluster - Business Solutions Provider",
  description:
    "Demand Cluster helps businesses optimize their operations, increase efficiency, and drive sustainable growth through innovative solutions.",
    generator: 'Riku'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MobileMenuProvider>
            <Header />
            {children}
            <Footer />
          </MobileMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
