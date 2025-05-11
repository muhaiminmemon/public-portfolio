"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Code, Database, Server, Shield, Wrench, Cpu, Globe, Terminal, Bug, Network, Cloud } from "lucide-react"
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiIntellijidea,
  SiPostman,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiPowers,
  SiWireshark,
  SiMamp,
  SiDocker,
  SiAmazon,
  SiSupabase,
} from "react-icons/si"

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "C#", "HTML", "CSS", "SQL"],
  },
  {
    id: "tools",
    name: "Developer Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      "Microsoft Azure",
      "VS Code",
      "Git",
      "SailPoint",
      "IntelliJ",
      "Postman",
      "RESTful APIs",
      "AWS",
      "Supabase",
      "Docker",
    ],
  },
  {
    id: "frameworks",
    name: "Technologies & Frameworks",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "SpringBoot",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "PowerShell",
    ],
  },
  {
    id: "security",
    name: "Network Security Tools",
    icon: <Shield className="h-5 w-5" />,
    skills: ["Wireshark", "NMap", "Metasploit", "Bettercap", "Veil", "Burp Suite", "OWASP ZAP", "Kali Linux"],
  },
]

export default function Skills() {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState("languages")

  // Map of skill icons
  const skillIcons: Record<string, React.ReactElement> = {
    // Languages
    Java: <SiC className="h-4 w-4" />,
    Python: <SiPython className="h-4 w-4" />,
    JavaScript: <SiJavascript className="h-4 w-4" />,
    TypeScript: <SiTypescript className="h-4 w-4" />,
    C: <SiC className="h-4 w-4" />,
    "C++": <SiCplusplus className="h-4 w-4" />,
    "C#": <SiSharp className="h-4 w-4" />,
    HTML: <SiHtml5 className="h-4 w-4" />,
    CSS: <SiCss3 className="h-4 w-4" />,
    SQL: <Database className="h-4 w-4" />,

    // Developer Tools
    "Microsoft Azure": <Cloud className="h-4 w-4" />,
    "VS Code": <Code className="h-4 w-4" />,
    Git: <SiGit className="h-4 w-4" />,
    SailPoint: <Shield className="h-4 w-4" />,
    IntelliJ: <SiIntellijidea className="h-4 w-4" />,
    Postman: <SiPostman className="h-4 w-4" />,
    "RESTful APIs": <Globe className="h-4 w-4" />,
    AWS: <SiAmazon className="h-4 w-4" />,
    Supabase: <SiSupabase className="h-4 w-4" />,
    Docker: <SiDocker className="h-4 w-4" />,

    // Technologies & Frameworks
    SpringBoot: <SiSpringboot className="h-4 w-4" />,
    React: <SiReact className="h-4 w-4" />,
    "Next.js": <SiNextdotjs className="h-4 w-4" />,
    "Node.js": <SiNodedotjs className="h-4 w-4" />,
    Express: <SiExpress className="h-4 w-4" />,
    PostgreSQL: <SiPostgresql className="h-4 w-4" />,
    MongoDB: <SiMongodb className="h-4 w-4" />,
    "Tailwind CSS": <SiTailwindcss className="h-4 w-4" />,
    Redux: <SiRedux className="h-4 w-4" />,
    PowerShell: <SiPowers className="h-4 w-4" />,

    // Network Security Tools
    Wireshark: <SiWireshark className="h-4 w-4" />,
    NMap: <SiMamp className="h-4 w-4" />,
    Metasploit: <Bug className="h-4 w-4" />,
    Bettercap: <Network className="h-4 w-4" />,
    Veil: <Shield className="h-4 w-4" />,
    "Burp Suite": <Bug className="h-4 w-4" />,
    "OWASP ZAP": <Shield className="h-4 w-4" />,
    "Kali Linux": <Terminal className="h-4 w-4" />,
  }

  // Default icon for skills without a specific icon
  const defaultIcon = <Terminal className="h-4 w-4" />

  // Function to get icon for a skill
  const getSkillIcon = (skill: string): React.ReactElement => {
    return skillIcons[skill] || defaultIcon
  }

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>

        <Tabs defaultValue="languages" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="group"
                        >
                          <Card className="h-full border border-primary/10 hover:border-primary/30 transition-colors">
                            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                <div className="text-[#007396]">{skill === "Java" && getSkillIcon(skill)}</div>
                                <div className="text-[#3776AB]">{skill === "Python" && getSkillIcon(skill)}</div>
                                <div className="text-[#F7DF1E]">{skill === "JavaScript" && getSkillIcon(skill)}</div>
                                <div className="text-[#3178C6]">{skill === "TypeScript" && getSkillIcon(skill)}</div>
                                <div className="text-[#A8B9CC]">{skill === "C" && getSkillIcon(skill)}</div>
                                <div className="text-[#00599C]">{skill === "C++" && getSkillIcon(skill)}</div>
                                <div className="text-[#68217A]">{skill === "C#" && getSkillIcon(skill)}</div>
                                <div className="text-[#E34F26]">{skill === "HTML" && getSkillIcon(skill)}</div>
                                <div className="text-[#1572B6]">{skill === "CSS" && getSkillIcon(skill)}</div>
                                <div className="text-[#336791]">{skill === "SQL" && getSkillIcon(skill)}</div>
                                <div className="text-[#0078D4]">{skill === "Microsoft Azure" && getSkillIcon(skill)}</div>
                                <div className="text-[#007ACC]">{skill === "VS Code" && getSkillIcon(skill)}</div>
                                <div className="text-[#F05032]">{skill === "Git" && getSkillIcon(skill)}</div>
                                <div className="text-[#00A4EF]">{skill === "SailPoint" && getSkillIcon(skill)}</div>
                                <div className="text-[#000000]">{skill === "IntelliJ" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "Postman" && getSkillIcon(skill)}</div>
                                <div className="text-[#232F3E]">{skill === "AWS" && getSkillIcon(skill)}</div>
                                <div className="text-[#3ECF8E]">{skill === "Supabase" && getSkillIcon(skill)}</div>
                                <div className="text-[#2496ED]">{skill === "Docker" && getSkillIcon(skill)}</div>
                                <div className="text-[#6DB33F]">{skill === "SpringBoot" && getSkillIcon(skill)}</div>
                                <div className="text-[#61DAFB]">{skill === "React" && getSkillIcon(skill)}</div>
                                <div className="text-[#000000]">{skill === "Next.js" && getSkillIcon(skill)}</div>
                                <div className="text-[#339933]">{skill === "Node.js" && getSkillIcon(skill)}</div>
                                <div className="text-[#000000]">{skill === "Express" && getSkillIcon(skill)}</div>
                                <div className="text-[#4169E1]">{skill === "PostgreSQL" && getSkillIcon(skill)}</div>
                                <div className="text-[#47A248]">{skill === "MongoDB" && getSkillIcon(skill)}</div>
                                <div className="text-[#06B6D4]">{skill === "Tailwind CSS" && getSkillIcon(skill)}</div>
                                <div className="text-[#764ABC]">{skill === "Redux" && getSkillIcon(skill)}</div>
                                <div className="text-[#5391FE]">{skill === "PowerShell" && getSkillIcon(skill)}</div>
                                <div className="text-[#1679A7]">{skill === "Wireshark" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "NMap" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "Metasploit" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "Bettercap" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "Veil" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "Burp Suite" && getSkillIcon(skill)}</div>
                                <div className="text-[#FF6C37]">{skill === "OWASP ZAP" && getSkillIcon(skill)}</div>
                                <div className="text-[#557C94]">{skill === "Kali Linux" && getSkillIcon(skill)}</div>
                                {!["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "C#", "HTML", "CSS", "SQL", "Microsoft Azure", "VS Code", "Git", "SailPoint", "IntelliJ", "Postman", "AWS", "Supabase", "Docker", "SpringBoot", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS", "Redux", "PowerShell", "Wireshark", "NMap", "Metasploit", "Bettercap", "Veil", "Burp Suite", "OWASP ZAP", "Kali Linux"].includes(skill) && getSkillIcon(skill)}
                              </div>
                              <span className="font-medium">{skill}</span>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  )
}

