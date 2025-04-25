import Image from "next/image"
import { Star, Quote, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata = {
  title: "Testimonials - Demand Cluster",
  description: "See what our clients have to say about working with Demand Cluster.",
}

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Client Testimonials
            </h1>
            <p className="mt-4 text-white/90 md:text-xl">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We're proud of the results we've achieved for our clients and the relationships we've built along the way.
            </p>
          </AnimatedSection>

          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="midmarket">Mid-Market</TabsTrigger>
              <TabsTrigger value="startup">Startup</TabsTrigger>
            </TabsList>
          </Tabs>

          <TabsContent value="all" className="mt-0">
            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-muted-foreground relative z-10">
                      "Demand Cluster transformed our business operations. Their strategic insights and implementation
                      support helped us achieve a 30% increase in efficiency. The team was professional, knowledgeable,
                      and a pleasure to work with."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">CEO, TechInnovate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-muted-foreground relative z-10">
                      "Working with Demand Cluster has been a game-changer for our company. Their data analytics
                      solutions provided insights that directly contributed to our revenue growth. I highly recommend
                      their services."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Michael Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">COO, Global Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-muted-foreground relative z-10">
                      "The team at Demand Cluster exceeded our expectations. Their process optimization strategies
                      helped us reduce costs by 25% while improving customer satisfaction. They're true partners in our
                      success."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Emily Rodriguez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Emily Rodriguez</p>
                      <p className="text-sm text-muted-foreground">VP Operations, Retail Innovations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-muted-foreground relative z-10">
                      "Demand Cluster's strategic consulting services provided us with the clarity and direction we
                      needed during a critical growth phase. Their insights were invaluable to our expansion strategy."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/placeholder.svg?height=48&width=48" alt="David Kim" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">David Kim</p>
                      <p className="text-sm text-muted-foreground">CEO, NextGen Startups</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-muted-foreground relative z-10">
                      "The digital transformation journey with Demand Cluster has revolutionized how we operate. Their
                      expertise in technology integration and change management was crucial to our success."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Lisa Patel" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium">Lisa Patel</p>
                      <p className="text-sm text-muted-foreground">CTO, Enterprise Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2 opacity-50" />
                    <p className="text-muted-foreground relative z-10">
                      "Demand Cluster's talent solutions helped us build a high-performing team during a critical
                      expansion phase. Their understanding of our industry and culture was impressive."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Robert Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Robert Johnson</p>
                      <p className="text-sm text-muted-foreground">HR Director, Growth Industries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggeredChildren>

            <AnimatedSection className="flex justify-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                Load More Testimonials
              </Button>
            </AnimatedSection>
          </TabsContent>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Case Studies</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Explore detailed case studies of how we've helped our clients achieve their business goals.
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
              <CardContent className="p-6">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  Enterprise
                </div>
                <h3 className="text-xl font-bold mb-2">Global Retail Chain</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How we helped a global retail chain optimize their supply chain, reducing costs by 25%.
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
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
              <CardContent className="p-6">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  Mid-Market
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Services Firm</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our approach helped a financial services firm modernize their systems, improving customer
                  satisfaction.
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
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
              <CardContent className="p-6">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  Startup
                </div>
                <h3 className="text-xl font-bold mb-2">Tech Startup</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How we helped a tech startup scale their operations and secure Series B funding.
                </p>
                <Button variant="outline" className="w-full">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </StaggeredChildren>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Become Our Next Success Story
            </h2>
            <p className="mt-4 text-white/90 md:text-xl">
              Join the growing list of businesses that have transformed their operations and achieved sustainable growth
              with Demand Cluster.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
              >
                View All Case Studies
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
