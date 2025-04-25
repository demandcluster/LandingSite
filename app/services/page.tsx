import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Users, Layers, MessageSquare, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

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
              Comprehensive business solutions designed to help your business thrive in today's competitive landscape.
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
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
              <TabsTrigger value="talent">Talent</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <CardTitle>Data Analytics</CardTitle>
                    <CardDescription>Transform raw data into actionable insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our data analytics services help you make sense of your data, identify patterns, and make informed
                      decisions that drive business growth.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Predictive analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Business intelligence</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Data visualization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Custom reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/data-analytics"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Globe className="h-6 w-6" />
                    </div>
                    <CardTitle>Digital Transformation</CardTitle>
                    <CardDescription>Modernize your business processes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We help businesses leverage technology to streamline operations, enhance customer experiences, and
                      stay competitive in the digital age.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Digital strategy development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Process automation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Cloud migration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Digital customer experience</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/digital-transformation"
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
                    <CardTitle>Talent Solutions</CardTitle>
                    <CardDescription>Find and retain the right talent</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our talent solutions help you attract, develop, and retain top talent to drive your business
                      forward in today's competitive market.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Talent acquisition</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Workforce planning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Employee development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Retention strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/talent-solutions"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <Layers className="h-6 w-6" />
                    </div>
                    <CardTitle>Process Optimization</CardTitle>
                    <CardDescription>Streamline operations and reduce costs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We help businesses identify inefficiencies, streamline workflows, and implement best practices to
                      improve operational performance.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Process mapping and analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Lean methodology implementation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Continuous improvement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Performance measurement</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/process-optimization"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <CardTitle>Strategic Consulting</CardTitle>
                    <CardDescription>Expert advice on strategic decisions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our strategic consulting services provide expert guidance to help you navigate complex business
                      challenges and seize new opportunities.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Strategic planning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Market analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Competitive positioning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Growth strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/strategic-consulting"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <CardTitle>Quality Assurance</CardTitle>
                    <CardDescription>Ensure highest standards of quality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our quality assurance services help you implement robust quality management systems to ensure your
                      products and services meet the highest standards.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Quality management systems</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Process auditing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Compliance management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span>Continuous improvement</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/services/quality-assurance"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 transition-all hover:translate-x-1"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </StaggeredChildren>
            </TabsContent>

            {/* Other tab contents would be similar but filtered by category */}
            <TabsContent value="data" className="mt-8">
              {/* Data Analytics service card */}
            </TabsContent>
            {/* Additional tab contents */}
          </Tabs>
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
