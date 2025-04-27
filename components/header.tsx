"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNavItem, MobileNavLink } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${isScrolled ? "shadow-sm" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Image src="/logo.svg" alt="Demand Cluster Logo" width={240} height={60} priority />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/services"
            className={`text-sm font-medium ${isActive("/services") ? "text-blue-600" : "text-muted-foreground"} hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${isActive("/about") ? "text-blue-600" : "text-muted-foreground"} hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
          >
            About
          </Link>
          <Link
            href="/approach"
            className={`text-sm font-medium ${isActive("/approach") ? "text-blue-600" : "text-muted-foreground"} hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
          >
            Our Approach
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${isActive("/blog") ? "text-blue-600" : "text-muted-foreground"} hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
          >
            Blog
          </Link>
          <Link
            href="/testimonials"
            className={`text-sm font-medium ${isActive("/testimonials") ? "text-blue-600" : "text-muted-foreground"} hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${isActive("/contact") ? "text-blue-600" : "text-muted-foreground"} hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full`}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105">
            Get Started
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="px-2 py-6">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Demand Cluster Logo" width={150} height={30} priority />
                  </Link>
                  <ThemeToggle />
                </div>
                <div className="flex flex-col space-y-3 mt-6">
                  <MobileNavItem href="/services" title="Services">
                    <div className="pl-4 mt-2 space-y-2">
                      <MobileNavLink href="/services#data-analytics" title="Data Analytics" />
                      <MobileNavLink href="/services#digital-transformation" title="Digital Transformation" />
                      <MobileNavLink href="/services#talent-solutions" title="Talent Solutions" />
                      <MobileNavLink href="/services#process-optimization" title="Process Optimization" />
                      <MobileNavLink href="/services#strategic-consulting" title="Strategic Consulting" />
                      <MobileNavLink href="/services#quality-assurance" title="Quality Assurance" />
                    </div>
                  </MobileNavItem>
                  <MobileNavItem href="/about" title="About" />
                  <MobileNavItem href="/approach" title="Our Approach" />
                  <MobileNavItem href="/blog" title="Blog" />
                  <MobileNavItem href="/testimonials" title="Testimonials" />
                  <MobileNavItem href="/contact" title="Contact" />
                </div>
                <div className="mt-8 pt-4 border-t">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                    Get Started
                  </Button>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-blue-600 transition-colors hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-blue-600 transition-colors hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-blue-600 transition-colors hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
