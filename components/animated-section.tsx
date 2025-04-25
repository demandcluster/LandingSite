"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  (
    { children, className, delay = 0, direction = "up", once = true, threshold = 0.1, rootMargin = "0px", ...props },
    ref,
  ) => {
    const { ref: inViewRef, isIntersecting } = useIntersectionObserver({
      threshold,
      rootMargin,
      freezeOnceVisible: once,
    })

    // Combine refs
    const setRefs = (node: HTMLDivElement) => {
      // @ts-ignore - forwardRef types are tricky
      if (typeof ref === "function") ref(node)
      else if (ref) ref.current = node
      inViewRef.current = node
    }

    // Define transform values based on direction
    const transformInitial = {
      up: "translateY(20px)",
      down: "translateY(-20px)",
      left: "translateX(20px)",
      right: "translateX(-20px)",
      none: "none",
    }

    return (
      <div
        ref={setRefs}
        className={cn(className)}
        style={{
          opacity: isIntersecting ? 1 : 0,
          transform: isIntersecting ? "none" : transformInitial[direction],
          transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
          transitionDelay: `${delay}s`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)

AnimatedSection.displayName = "AnimatedSection"
