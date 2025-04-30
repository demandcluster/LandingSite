import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Server, Code, Cloud, Database, Users, BrainCircuit, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { SecurityBadge } from "@/components/security-badge"

export const metadata = {
  title: "Services - Demand Cluster",
  description:
    "Comprehensive business solutions designed to help your business thrive in today's competitive landscape.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Our Services</h1>
            <p className="mt-4 text-white/90 md:text-xl">
              Comprehensive technology solutions designed to help your business thrive in today's competitive landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How We Can Help You</h2>
            <p className="text-muted-foreground md:text-lg">
              At Demand Cluster, we offer a wide range of services tailored to meet your specific business needs. Our
              team of experts is dedicated to helping you achieve your goals and drive sustainable growth.
            </p>
          </AnimatedSection>

          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="hosting">Hosting</TabsTrigger>
              <TabsTrigger value="aws">Mini AWS</TabsTrigger>
              <TabsTrigger value="consultancy">Consultancy</TabsTrigger>
              <TabsTrigger value="ai">AI Solutions</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Server className="h-6 w-6" />
                    </div>
                    <CardTitle>Infrastructure Solutions</CardTitle>
                    <CardDescription>Robust and scalable infrastructure for your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our infrastructure solutions provide the foundation for your digital transformation, ensuring
                      reliability, scalability, and security for your business operations.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Network architecture design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Server optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Disaster recovery planning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Infrastructure monitoring</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/infrastructure-solutions"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Code className="h-6 w-6" />
                    </div>
                    <CardTitle>Software House</CardTitle>
                    <CardDescription>Custom software development for your needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our software development team creates custom applications tailored to your specific business
                      requirements, from web and mobile apps to enterprise solutions.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Custom application development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Web and mobile solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Legacy system modernization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Quality assurance and testing</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/software-house"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Cloud className="h-6 w-6" />
                    </div>
                    <CardTitle>Hosting Solutions</CardTitle>
                    <CardDescription>Reliable and secure hosting for your applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We provide reliable, secure, and scalable hosting solutions for your websites and applications,
                      ensuring optimal performance and uptime.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Managed hosting services</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Cloud hosting solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Performance optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>24/7 monitoring and support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/hosting-solutions"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Database className="h-6 w-6" />
                    </div>
                    <CardTitle>Mini AWS Solutions</CardTitle>
                    <CardDescription>Simplified cloud infrastructure for businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our Mini AWS platform provides enterprise-grade cloud capabilities tailored for small to medium
                      businesses, with simplified management and cost-effective pricing.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Simplified cloud infrastructure</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Scalable computing resources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Managed database services</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Cost-effective cloud solutions</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/mini-aws"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <CardTitle>Consultancy</CardTitle>
                    <CardDescription>Expert advice on technology strategy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our consultancy services provide expert guidance to help you navigate complex technology
                      challenges and make informed decisions for your business.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Technology strategy development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Digital transformation roadmaps</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>IT assessment and optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Technology vendor selection</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/consultancy"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <CardTitle>AI Solutions</CardTitle>
                    <CardDescription>Intelligent automation for your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our AI solutions help businesses leverage artificial intelligence and machine learning to automate
                      processes, gain insights, and create innovative customer experiences.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>AI strategy and implementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Machine learning models</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Natural language processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Predictive analytics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/ai-solutions"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </StaggeredChildren>
            </TabsContent>

            {/* Other tab contents would be similar but filtered by category */}
            <TabsContent value="infrastructure" className="mt-8">
              {/* Infrastructure service cards */}
            </TabsContent>
            {/* Additional tab contents */}
          </Tabs>
        </div>
      </section>

      {/* 60 Years Experience Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              60 Years of Excellence
            </div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Six Decades of Technology Leadership</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              With 60 years of experience in the technology industry, we've helped countless businesses transform,
              innovate, and succeed through changing technological landscapes.
            </p>
          </AnimatedSection>

          <ExperienceTimeline />
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How We Deliver Results</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                At Demand Cluster, we follow a proven methodology to ensure we deliver consistent results for our
                clients. Our approach is tailored to your specific needs and challenges.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Thorough Assessment</p>
                    <p className="text-sm text-muted-foreground">
                      We begin by understanding your business, challenges, and goals through in-depth discovery
                      sessions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Customized Solutions</p>
                    <p className="text-sm text-muted-foreground">
                      We develop tailored strategies that address your specific needs and align with your business
                      objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Collaborative Implementation</p>
                    <p className="text-sm text-muted-foreground">
                      Our team works closely with yours to implement solutions efficiently and effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Continuous Improvement</p>
                    <p className="text-sm text-muted-foreground">
                      We continuously monitor progress, measure results, and refine our approach to maximize outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  Learn More About Our Approach
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Our Approach"
                  className="rounded-lg object-cover relative"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Security First
            </div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Enterprise-Grade Security</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We implement industry-leading security practices to protect your data, applications, and infrastructure
              from threats and vulnerabilities.
            </p>
          </AnimatedSection>

          <SecurityBadge />
        </div>
      </section>

      <section className="w-full py-12 md:py-16 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-white/90 md:text-xl">
              Contact us today to schedule a consultation and discover how our services can help you achieve your
              business goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
              >
                View Case Studies
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
