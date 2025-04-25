"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Close mobile menu when route changes
    const closeEvent = new CustomEvent("close-mobile-menu")
    document.dispatchEvent(closeEvent)
  }, [pathname])

  useEffect(() => {
    // Handle custom close event
    const handleCloseMenu = () => {
      // Find all sheet-close buttons and click the first one
      const closeButtons = document.querySelectorAll("[data-radix-collection-item]")
      const closeButton = Array.from(closeButtons).find(
        (button) => button.textContent === "Close" || button.getAttribute("aria-label") === "Close",
      )

      if (closeButton && closeButton instanceof HTMLElement) {
        closeButton.click()
      }
    }

    document.addEventListener("close-mobile-menu", handleCloseMenu)
    return () => {
      document.removeEventListener("close-mobile-menu", handleCloseMenu)
    }
  }, [])

  return <>{children}</>
}
