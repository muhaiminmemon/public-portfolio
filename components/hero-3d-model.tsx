"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { useTheme } from "next-themes"

export default function Hero3DModel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(300, 300)
    renderer.setClearColor(0x000000, 0)

    // Clear container and append renderer
    containerRef.current.innerHTML = ""
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.5

    // Create a complex geometric shape
    const geometry = new THREE.IcosahedronGeometry(2, 1)

    // Material with wireframe
    const material = new THREE.MeshBasicMaterial({
      color: theme === "dark" ? 0xa855f7 : 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    })

    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    // Add inner sphere
    const innerGeometry = new THREE.SphereGeometry(1.5, 16, 16)
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: theme === "dark" ? 0xa855f7 : 0x000000,
      transparent: true,
      opacity: 0.2,
    })
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial)
    scene.add(innerSphere)

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: theme === "dark" ? 0xffffff : 0x000000,
      transparent: true,
      opacity: 0.5,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the shapes
      icosahedron.rotation.x += 0.001
      icosahedron.rotation.y += 0.002

      innerSphere.rotation.x -= 0.001
      innerSphere.rotation.y -= 0.002

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      renderer.setSize(300, 300)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      controls.dispose()
    }
  }, [theme])

  return <div ref={containerRef} className="w-[300px] h-[300px] mx-auto" />
}

