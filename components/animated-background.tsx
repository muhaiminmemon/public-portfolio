"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Particles
    const particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 150
    const mouseRadius = 150

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Reinitialize particles when canvas is resized
      initParticles()
    }

    // Initialize canvas size
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const mousePosition = {
      x: null as number | null,
      y: null as number | null,
    }

    interface Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.x
      mousePosition.y = e.y
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Initialize particles
    function initParticles() {
      if (!canvas) return
      // Clear the array
      while (particles.length > 0) {
        particles.pop()
      }

      // Add new particles
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 1
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          baseSize: size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: theme === "dark" ? "#ffffff" : "#000000",
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    initParticles()

    // Draw particles and connections
    function drawParticles() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Mouse interaction
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const dx = mousePosition.x - p.x
          const dy = mousePosition.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            // Increase size when mouse is near
            p.size = p.baseSize * (1 + (mouseRadius - distance) / mouseRadius)

            // Move away from mouse
            const angle = Math.atan2(dy, dx)
            const pushX = Math.cos(angle) * (mouseRadius - distance) * 0.01
            const pushY = Math.sin(angle) * (mouseRadius - distance) * 0.01
            p.x -= pushX
            p.y -= pushY
          } else {
            p.size = p.baseSize
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.floor(p.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = `${p.color}${Math.floor(opacity * 50)
              .toString(16)
              .padStart(2, "0")}`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      drawParticles()
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

