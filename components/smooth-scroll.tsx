"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, useScroll, useSpring } from "framer-motion"

export default function SmoothScroll() {
  const { scrollYProgress } = useScroll()
  const pathname = usePathname()

  // Reset scroll position when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Create smooth spring animation for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[9999] origin-left"
        style={{ scaleX }}
      />
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
} 