"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <p className="text-lg mb-6">
            <p className="text-lg mb-6">
  Hey! I'm Muhaimin, a third-year CS & Management student at the University of Toronto, passionate about building AI-powered tools, full-stack web apps, and automation systems that enhance productivity and solve real-world problems. My strengths lie in AI/ML, cloud-based development, and backend engineering.
</p>

<p className="text-lg mb-6">
  At my core, I believe in giving my full effort to everything I care about — whether that’s building something, learning a new concept, or pushing myself in life. This mindset shapes how I approach my work, my personal growth, and the way I show up for others. I’m not driven by titles or external validation — I just believe that the more seriously I take my own development, the more value I can create for the people and projects around me.
</p>

<p className="text-lg mb-6">
Outside of tech, I play basketball weekly and lift four times a week. I'm always open to connecting with developers, designers, and builders working on meaningful, ambitious projects.
</p>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">
                  <a
s

                  >
                    muhaiminmemon@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground">Toronto, Canada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

