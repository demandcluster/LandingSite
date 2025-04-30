"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Milestone, Award, Lightbulb, Users, Globe, TrendingUp } from "lucide-react"

export function ExperienceTimeline() {
  const [activeDecade, setActiveDecade] = useState("2020s")

  const decades = [
    { id: "1960s", label: "1960s", icon: <Milestone className="h-5 w-5" /> },
    { id: "1970s", label: "1970s", icon: <Milestone className="h-5 w-5" /> },
    { id: "1980s", label: "1980s", icon: <Milestone className="h-5 w-5" /> },
    { id: "1990s", label: "1990s", icon: <Milestone className="h-5 w-5" /> },
    { id: "2000s", label: "2000s", icon: <Milestone className="h-5 w-5" /> },
    { id: "2010s", label: "2010s", icon: <Milestone className="h-5 w-5" /> },
    { id: "2020s", label: "2020s", icon: <Milestone className="h-5 w-5" /> },
  ]

  const achievements = {
    "1960s": [
      {
        title: "Company Founded",
        description: "Our journey began with a vision to transform how businesses use technology.",
        icon: <Lightbulb className="h-6 w-6" />,
        year: "1963",
      },
      {
        title: "First Major Client",
        description: "Secured our first enterprise client, marking the beginning of our growth.",
        icon: <Users className="h-6 w-6" />,
        year: "1967",
      },
    ],
    "1970s": [
      {
        title: "Expanded Services",
        description: "Introduced new technology services to meet growing market demands.",
        icon: <TrendingUp className="h-6 w-6" />,
        year: "1972",
      },
      {
        title: "Regional Expansion",
        description: "Opened offices in three new locations to serve a broader client base.",
        icon: <Globe className="h-6 w-6" />,
        year: "1978",
      },
    ],
    "1980s": [
      {
        title: "Technology Innovation Award",
        description: "Recognized for pioneering work in early computing solutions.",
        icon: <Award className="h-6 w-6" />,
        year: "1983",
      },
      {
        title: "100th Client Milestone",
        description: "Celebrated serving our 100th enterprise client.",
        icon: <Milestone className="h-6 w-6" />,
        year: "1989",
      },
    ],
    "1990s": [
      {
        title: "Internet Revolution",
        description: "Led the way in helping businesses adapt to the emerging internet era.",
        icon: <Globe className="h-6 w-6" />,
        year: "1994",
      },
      {
        title: "International Expansion",
        description: "Established our first international office to serve global clients.",
        icon: <Globe className="h-6 w-6" />,
        year: "1998",
      },
    ],
    "2000s": [
      {
        title: "Cloud Computing Pioneer",
        description: "Early adoption and implementation of cloud technologies for clients.",
        icon: <TrendingUp className="h-6 w-6" />,
        year: "2003",
      },
      {
        title: "Industry Leadership Award",
        description: "Recognized for excellence in technology consulting and implementation.",
        icon: <Award className="h-6 w-6" />,
        year: "2008",
      },
    ],
    "2010s": [
      {
        title: "Digital Transformation Focus",
        description: "Launched comprehensive digital transformation services.",
        icon: <TrendingUp className="h-6 w-6" />,
        year: "2013",
      },
      {
        title: "500th Enterprise Client",
        description: "Reached milestone of serving 500 enterprise clients worldwide.",
        icon: <Users className="h-6 w-6" />,
        year: "2018",
      },
    ],
    "2020s": [
      {
        title: "AI & ML Solutions",
        description: "Introduced advanced AI and machine learning solutions for businesses.",
        icon: <Lightbulb className="h-6 w-6" />,
        year: "2021",
      },
      {
        title: "60 Years of Excellence",
        description: "Celebrating six decades of technology leadership and innovation.",
        icon: <Award className="h-6 w-6" />,
        year: "2023",
      },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="flex overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-2 mx-auto">
          {decades.map((decade) => (
            <Badge
              key={decade.id}
              variant={activeDecade === decade.id ? "default" : "outline"}
              className={`cursor-pointer text-sm py-2 px-4 ${
                activeDecade === decade.id ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-muted hover:text-foreground"
              }`}
              onClick={() => setActiveDecade(decade.id)}
            >
              <span className="flex items-center gap-2">
                {decade.icon}
                {decade.label}
              </span>
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-900"></div>

        <StaggeredChildren className="space-y-8">
          {achievements[activeDecade as keyof typeof achievements].map((achievement, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="relative flex items-center justify-center">
                <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-900"></div>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  {achievement.icon}
                </div>
              </div>
              <Card className="flex-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {achievement.year}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </StaggeredChildren>
      </div>

      <AnimatedSection className="flex justify-center mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">60+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">1000+</div>
            <div className="text-sm text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-muted-foreground">Global Offices</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">250+</div>
            <div className="text-sm text-muted-foreground">Technology Experts</div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
