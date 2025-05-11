"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Wisp",
    description: "AI-based Chrome extension that blocks distractions based on user calendar",
    details: [
      "Built an AI based Chrome extension using React/Node.js & Express to block distractions based on user calendar",
      "Integrated GPT API with 90% accuracy in blocking non-relevant content in real-time through fine-tuning",
      "Utilized Google OAuth for authentication and Google Calendar API to sync tasks with browsing behavior",
      "Built a Node.js and Express backend RESTful API server, capable of handling 10,000+ API requests daily",
      "Utilized React framework, incorporating React Router and React hooks combined with Tailwind CSS to create an intuitive dashboard",
    ],
    technologies: [
      "Javascript",
      "React",
      "Node.js",
      "Express",
      "Supabase",
      "GPT API",
      "Google Calendar API",
      "Docker",
      "Azure",
    ],
    demoLink: "#",
    githubLink: "#",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jpaeqleFukSLEmuMU0LWhq7afQNbXe.png",
    videoId: "392SqStBwQ8", // YouTube video ID for Wisp
  },
  {
    title: "AI Bookmark Manager",
    description: "AI Extension for NLP bookmark categorization using a fine-tuned BERT model",
    details: [
      "Developed an AI Extension for NLP bookmark categorization using a fine-tuned BERT model with 87% accuracy",
      "Collected and preprocessed a dataset of categorized bookmarks through web scraping with BeautifulSoup",
      "Trained the BERT model using TensorFlow and the Hugging Face Transformers library",
      "Deployed the containerized backend and model on Azure using Docker, ensuring reliable access for users",
    ],
    technologies: ["TensorFlow", "scikit-learn", "Pandas", "BeautifulSoup", "Docker", "Azure", "Hugging Face"],
    demoLink: "",
    githubLink: "#",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P8WKtIrRL51A570OBrCMvmY1v7lxVK.png",
  },
  {
    title: "HoopStats",
    description: "Full-stack application for NBA player statistics and analysis",
    details: [
      "Developed a full-stack application using Spring Boot (backend), ReactJS (frontend), and PostgreSQL (database)",
      "Utilized BeautifulSoup and pandas to web scrape and process data from over 450 NBA players",
      "Deployed the backend REST API on Azure",
    ],
    technologies: ["JavaScript", "Java", "ReactJS", "SpringBoot", "PostgreSQL", "BeautifulSoup"],
    demoLink: "",
    githubLink: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setShowVideo(false)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setShowVideo(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    if (!carouselRef.current) return

    const scrollToActive = () => {
      const cardWidth = carouselRef.current?.offsetWidth || 0
      carouselRef.current?.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      })
    }

    scrollToActive()

    // Handle resize
    window.addEventListener("resize", scrollToActive)
    return () => window.removeEventListener("resize", scrollToActive)
  }, [activeIndex])

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/20"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/20"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Project carousel */}
          <div
            ref={carouselRef}
            className="overflow-x-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex transition-transform duration-500 ease-out">
              {projects.map((project, index) => (
                <div key={index} className="min-w-full flex-shrink-0 px-4">
                  <Card className="h-full bg-card/90 backdrop-blur-sm border-primary/10 overflow-hidden max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative overflow-hidden group h-[200px] md:h-auto">
                        {project.videoId && index === 0 ? (
                          <>
                            {showVideo ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                                title={project.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full border-0"
                              ></iframe>
                            ) : (
                              <div className="relative w-full h-full">
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-12 w-12 rounded-full bg-primary/80 text-white hover:bg-primary hover:scale-110 transition-all"
                                    onClick={() => setShowVideo(true)}
                                  >
                                    <Play className="h-6 w-6 fill-current" />
                                  </Button>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                          </>
                        )}

                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs bg-background/80 backdrop-blur-sm"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col p-4">
                        <div className="pb-2">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <div className="space-y-4">
                            <p className="text-muted-foreground">{project.description}</p>
                            <ul className="list-disc list-inside space-y-2 text-white text-sm">
                              {project.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-2 flex gap-2">
                          <Button variant="outline" size="sm" className="h-7 text-xs px-2" asChild>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" /> GitHub
                            </a>
                          </Button>
                          {project.demoLink && (
                            <Button size="sm" className="h-7 text-xs px-2" asChild>
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3 mr-1" /> Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setShowVideo(false)
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  activeIndex === index ? "bg-primary scale-110" : "bg-primary/30 hover:bg-primary/50",
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center gap-4 mt-4 md:hidden">
          <Button variant="outline" size="sm" onClick={prevProject} className="h-8 w-8 p-0 rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextProject} className="h-8 w-8 p-0 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

