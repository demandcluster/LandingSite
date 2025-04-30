"use client"

import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, FileCheck, AlertTriangle, CheckCircle, Server } from "lucide-react"

export function SecurityBadge() {
  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "End-to-end encryption for all data at rest and in transit",
      icon: <Lock className="h-8 w-8" />,
    },
    {
      title: "Compliance",
      description: "Adherence to industry standards including GDPR, HIPAA, and ISO 27001",
      icon: <FileCheck className="h-8 w-8" />,
    },
    {
      title: "Threat Detection",
      description: "Advanced monitoring systems to identify and mitigate security threats",
      icon: <AlertTriangle className="h-8 w-8" />,
    },
    {
      title: "Regular Audits",
      description: "Comprehensive security audits and penetration testing",
      icon: <CheckCircle className="h-8 w-8" />,
    },
    {
      title: "Secure Infrastructure",
      description: "Hardened infrastructure with multiple layers of protection",
      icon: <Server className="h-8 w-8" />,
    },
    {
      title: "Security Expertise",
      description: "Dedicated security team with industry certifications",
      icon: <Shield className="h-8 w-8" />,
    },
  ]

  return (
    <div>
      <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {securityFeatures.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-md hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-blue-100 p-4 text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </StaggeredChildren>

      <AnimatedSection className="mt-12 p-6 border rounded-lg bg-muted/30 flex items-center justify-center gap-4 flex-col md:flex-row">
        <Shield className="h-12 w-12 text-blue-600" />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Security Guarantee</h3>
          <p className="text-muted-foreground">
            We implement industry-leading security practices and provide a comprehensive security guarantee for all our
            services.
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
