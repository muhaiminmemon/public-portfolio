"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar } from "lucide-react"

export default function Education() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="text-xl">University of Toronto</CardTitle>
              <p className="text-lg font-medium text-primary">
              </p>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Expected Graduation, May 2027</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-2 mb-4">
              <BookOpen className="h-5 w-5 mt-0.5 text-primary" />
              <div>
                <h3 className="font-medium">Relevant Coursework:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                  <li>Data Structures & Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>Discrete Math</li>
                  <li>Linear Algebra</li>
                  <li>Databases & Web Applications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

