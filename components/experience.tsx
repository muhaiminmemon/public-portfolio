"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, MapPinIcon } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "DataAnnotation.tech",
    period: "September 2024 – December 2024",
    location: "Toronto, ON",
    responsibilities: [
      "Worked on refining AI/ML model performance through efficient Python development, prompt engineering, and large-scale code reviews. Contributed to increasing model accuracy and code reliability across the pipeline.",
    ],
    skills: ["Python", "AI/ML", "Code Review", "Prompt Engineering"],
  },
  {
    title: "IAM Engineer",
    company: "Symcor",
    period: "Jan 2024 – August 2024",
    location: "Mississauga, ON",
    responsibilities: [
  "Automated large-scale Azure access reviews and feed ingestion workflows using PowerShell and Python. Played a key role in identity and access management operations and Azure Cloud migration efforts.",
    ],
    skills: ["PowerShell", "Microsoft Graph API", "Python", "Azure", "SailPoint"],
  },
  {
    title: "Technical Specialist",
    company: "Minuteman Press",
    period: "June 2020 – February 2022",
    location: "Mississauga, ON",
    responsibilities: [
      "Provided technical support and hands-on repair services for hardware and software issues. Built custom PCs, removed malware, and upgraded systems to maintain operational continuity across the office.",
    ],
    skills: ["Hardware Troubleshooting", "Malware Removal", "PC Building", "Technical Support"],
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:mr-auto md:ml-0"
              } md:w-1/2 z-10`}
            >
              {/* Timeline dot */}
              <div className="absolute top-8 left-0 md:left-auto md:right-auto md:-left-4 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <BriefcaseIcon className="h-4 w-4 text-white" />
              </div>

              {/* Timeline card */}
              <Card className="bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 border-primary/10">
                <CardHeader>
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      {exp.title}
                      <Badge variant="outline" className="ml-auto">
                        {exp.period}
                      </Badge>
                    </CardTitle>
                    <div className="text-lg font-medium text-primary flex flex-wrap gap-2 items-center">
                      {exp.company}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm md:text-base">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="animate-in fade-in-50 duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

