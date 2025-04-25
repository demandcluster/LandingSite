"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const node = ref.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const observerParams = { threshold, rootMargin }
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting && freezeOnceVisible) {
        observer.unobserve(node)
      }
    }, observerParams)

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, freezeOnceVisible])

  return { ref, isIntersecting }
}
