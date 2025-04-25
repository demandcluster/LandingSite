"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, Children, cloneElement, isValidElement, forwardRef } from "react"

interface StaggeredChildrenProps extends HTMLAttributes<HTMLDivElement> {
  staggerDelay?: number
  baseDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export const StaggeredChildren = forwardRef<HTMLDivElement, StaggeredChildrenProps>(
  (
    {
      children,
      className,
      staggerDelay = 0.1,
      baseDelay = 0,
      direction = "up",
      once = true,
      threshold = 0.1,
      rootMargin = "0px",
      ...props
    },
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

    // Clone children and add staggered animation styles
    const staggeredChildren = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const delay = baseDelay + index * staggerDelay

        return cloneElement(child, {
          style: {
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? "none" : transformInitial[direction],
            transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
            transitionDelay: `${delay}s`,
          },
        })
      }
      return child
    })

    return (
      <div ref={setRefs} className={cn(className)} {...props}>
        {staggeredChildren}
      </div>
    )
  },
)

StaggeredChildren.displayName = "StaggeredChildren"
