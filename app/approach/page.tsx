import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata = {
  title: "Our Approach - Demand Cluster",
  description: "Learn about Demand Cluster's proven methodology for delivering consistent results for our clients.",
}

export default function ApproachPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Our Approach</h1>
            <p className="mt-4 text-white/90 md:text-xl">
              A proven methodology that ensures we deliver consistent results for our clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Our approach is designed to address your unique business challenges and deliver measurable results. We
              follow a structured yet flexible methodology that adapts to your specific needs.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded-br-lg">
                1
              </div>
              <CardHeader className="pt-16">
                <CardTitle>Discover</CardTitle>
                <CardDescription>Understanding your business and challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We begin by understanding your business, challenges, and goals through in-depth discovery sessions.
                  This phase involves:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Stakeholder interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Current state assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Goal definition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Success metrics establishment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded-br-lg">
                2
              </div>
              <CardHeader className="pt-16">
                <CardTitle>Analyze</CardTitle>
                <CardDescription>Identifying opportunities for improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our experts analyze your current situation and identify opportunities for improvement and growth. This
                  phase includes:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Data collection and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Process mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Gap identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Opportunity prioritization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded-br-lg">
                3
              </div>
              <CardHeader className="pt-16">
                <CardTitle>Strategize</CardTitle>
                <CardDescription>Developing tailored solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop a tailored strategy that addresses your specific needs and aligns with your business
                  objectives. This involves:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Solution design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Roadmap development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Resource planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Risk assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded-br-lg">
                4
              </div>
              <CardHeader className="pt-16">
                <CardTitle>Implement</CardTitle>
                <CardDescription>Executing the strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team works closely with yours to implement the strategy efficiently and effectively. This phase
                  includes:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Project management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Change management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Training and enablement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Stakeholder communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded-br-lg">
                5
              </div>
              <CardHeader className="pt-16">
                <CardTitle>Measure</CardTitle>
                <CardDescription>Tracking progress and results</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We continuously monitor progress and measure results against key performance indicators. This
                  involves:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Performance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Data collection and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Regular reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Outcome assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all">
              <div className="absolute top-0 left-0 w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded-br-lg">
                6
              </div>
              <CardHeader className="pt-16">
                <CardTitle>Optimize</CardTitle>
                <CardDescription>Refining for maximum impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Based on data and feedback, we refine our approach to maximize results and ensure long-term success.
                  This includes:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Continuous improvement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Strategy refinement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Innovation integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span>Long-term planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </StaggeredChildren>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Difference
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Our Approach Works</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our approach has been refined over years of experience working with businesses across industries. What
                sets us apart is our commitment to:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Customization</p>
                    <p className="text-sm text-muted-foreground">
                      We tailor our approach to your specific needs, challenges, and goals, ensuring solutions that fit
                      your unique context.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Collaboration</p>
                    <p className="text-sm text-muted-foreground">
                      We work closely with your team, leveraging your knowledge and expertise to develop and implement
                      effective solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Data-Driven Decisions</p>
                    <p className="text-sm text-muted-foreground">
                      We base our recommendations and strategies on thorough analysis and data, ensuring objective and
                      effective solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Continuous Improvement</p>
                    <p className="text-sm text-muted-foreground">
                      We constantly refine our approach based on results and feedback, ensuring ongoing optimization and
                      long-term success.
                    </p>
                  </div>
                </div>
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

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Case Studies
            </div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Our Approach in Action</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              See how our approach has helped businesses across industries achieve their goals and drive sustainable
              growth.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Case Study 1"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Global Retail Chain</CardTitle>
                <CardDescription>Supply Chain Optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We helped a global retail chain optimize their supply chain, reducing costs by 25% and improving
                  delivery times by 30%.
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Case Study 2"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Financial Services Firm</CardTitle>
                <CardDescription>Digital Transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our approach helped a financial services firm modernize their systems, improving customer satisfaction
                  by 40%.
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Case Study 3"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>Healthcare Provider</CardTitle>
                <CardDescription>Process Optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We helped a healthcare provider streamline their operations, reducing wait times by 50% and increasing
                  patient throughput.
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" className="w-full">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </StaggeredChildren>

          <AnimatedSection className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
              View All Case Studies
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-white/90 md:text-xl">
              Contact us today to learn how our approach can help your business achieve its goals and drive sustainable
              growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
