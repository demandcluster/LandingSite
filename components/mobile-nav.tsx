"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavItemProps {
  href: string
  title: string
  children?: React.ReactNode
}

export function MobileNavItem({ href, title, children }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = Boolean(children)

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={href}
          className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors"
          onClick={() => {
            if (!hasChildren) {
              // Close the sheet when clicking a link without children
              const closeEvent = new CustomEvent("close-mobile-menu")
              document.dispatchEvent(closeEvent)
            }
          }}
        >
          {title}
        </Link>
        {hasChildren && (
          <button
            className="p-1 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <ChevronDown className={cn("h-5 w-5 text-gray-500 transition-transform", isOpen && "rotate-180")} />
          </button>
        )}
      </div>
      {hasChildren && isOpen && <div className="mt-1">{children}</div>}
    </div>
  )
}

interface MobileNavLinkProps {
  href: string
  title: string
}

export function MobileNavLink({ href, title }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className="block py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
      onClick={() => {
        // Close the sheet when clicking a link
        const closeEvent = new CustomEvent("close-mobile-menu")
        document.dispatchEvent(closeEvent)
      }}
    >
      {title}
    </Link>
  )
}
