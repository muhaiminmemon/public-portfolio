"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Hero3DModel from "./hero-3d-model"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-14 -left-10 text-sm font-mono text-primary/70 dark:text-primary/90"
            >
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              I'm{" "}
              <span
                className={
                  theme === "light"
                    ? "text-black font-extrabold relative"
                    : "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent relative"
                }
              >
                Muhammad Muhaimin
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-0 -left-14 h-1 bg-primary"
                ></motion.span>
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
              
            </h2>

            <p className="text-lg mb-10">
            "If you don't do the best with what you have, you could never have done better with what you could have had." - Ernest Rutherford
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-14 -right-10 text-sm font-mono text-primary/70 dark:text-primary/90"
            >
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="group relative overflow-hidden">
                <a href="#projects">
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </Button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Get in Touch
                </a>
                
              </motion.div>
            </div>

            <div className="flex gap-6">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-colors">
                <a
                  href="https://github.com/muhaiminmemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-colors">
                <a
                  href="https://linkedin.com/in/muhaiminmemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 transition-colors">
                <a href="mailto:muhaiminmemon@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-xl animate-pulse"></div>
            <div className="relative bg-background/50 dark:bg-background/30 backdrop-blur-sm rounded-full p-8 border border-primary/20">
              <Hero3DModel />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

