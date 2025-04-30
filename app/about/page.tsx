import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { ExperienceTimeline } from "@/components/experience-timeline"

export const metadata = {
  title: "About Us - Demand Cluster",
  description: "Learn about Demand Cluster's 60-year history, our mission, values, and the team behind our success.",
}

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              About Demand Cluster
            </h1>
            <p className="mt-4 text-white/90 md:text-xl">
              For over 60 years, we've been at the forefront of technology innovation, helping businesses transform,
              adapt, and thrive in an ever-changing digital landscape.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Six Decades of Excellence</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Founded in 1963, Demand Cluster began as a small technology consulting firm with a vision to help
                businesses harness the power of emerging technologies. What started as a team of five passionate
                technologists has grown into a global technology solutions provider with offices in 15 countries and
                over 1,000 employees worldwide.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Throughout our 60-year journey, we've witnessed and participated in the evolution of technology—from
                mainframes to cloud computing, from basic automation to artificial intelligence. At each step, we've
                helped our clients navigate technological shifts and leverage innovations to create business value.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Today, Demand Cluster stands as a testament to resilience, innovation, and unwavering commitment to
                client success. Our rich history provides us with unique insights that inform our forward-thinking
                approach to technology solutions.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Company History"
                  className="rounded-lg object-cover relative"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Milestones Through the Decades</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Explore key moments in our 60-year history that have shaped who we are today.
            </p>
          </AnimatedSection>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Our Mission"
                  className="rounded-lg object-cover relative"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Purpose
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mission & Values</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our mission is to empower organizations to achieve their full potential through innovative technology
                solutions that drive growth, efficiency, and competitive advantage. We believe in building lasting
                partnerships with our clients, understanding their unique challenges, and delivering solutions that
                create measurable business value.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Excellence</p>
                    <p className="text-sm text-muted-foreground">
                      We strive for excellence in everything we do, setting high standards and continuously raising the
                      bar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Innovation</p>
                    <p className="text-sm text-muted-foreground">
                      We embrace innovation, constantly seeking new ideas and approaches to solve complex business
                      challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Integrity</p>
                    <p className="text-sm text-muted-foreground">
                      We operate with the highest level of integrity, maintaining transparency and ethical standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Client Focus</p>
                    <p className="text-sm text-muted-foreground">
                      We put our clients at the center of everything we do, focusing on their success as our primary
                      goal.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Leadership Team</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Meet the experienced professionals who guide our company's strategic direction and growth.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=128&width=128" alt="CEO" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm">
                  With over 25 years of experience in technology leadership, Sarah drives our strategic vision and
                  growth.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=128&width=128" alt="CTO" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Technology Officer</p>
                <p className="text-muted-foreground text-sm">
                  Michael leads our technology strategy, ensuring we remain at the cutting edge of innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=128&width=128" alt="COO" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Emily Rodriguez</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Operations Officer</p>
                <p className="text-muted-foreground text-sm">
                  Emily oversees our global operations, ensuring excellence in service delivery across all regions.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/placeholder.svg?height=128&width=128" alt="CSO" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">David Kim</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Strategy Officer</p>
                <p className="text-muted-foreground text-sm">
                  David shapes our long-term strategy, identifying new opportunities for growth and innovation.
                </p>
              </CardContent>
            </Card>
          </StaggeredChildren>

          <AnimatedSection className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
              Meet Our Full Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Our Clients
            </div>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We're proud to work with organizations of all sizes, from startups to global enterprises.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="VD.nl"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
              <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Schiphol.nl"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
              <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="To-Be-Dressed.nl"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
              <div className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <Image
                  src="/placeholder.svg?height=80&width=200"
                  alt="Charluv.com"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
            </div>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=48&width=48" alt="VD.nl Logo" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">VD.nl</p>
                    <p className="text-sm text-muted-foreground">Digital Media</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Demand Cluster has been instrumental in our digital transformation journey. Their expertise and
                  innovative solutions have helped us stay ahead in a competitive market."
                </p>
                <p className="mt-4 text-sm font-medium">Jan de Vries</p>
                <p className="text-xs text-muted-foreground">Chief Digital Officer, VD.nl</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Schiphol Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Schiphol</p>
                    <p className="text-sm text-muted-foreground">Aviation</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Working with Demand Cluster has transformed our operational efficiency. Their solutions have helped
                  us enhance passenger experience and streamline complex processes."
                </p>
                <p className="mt-4 text-sm font-medium">Marieke van der Berg</p>
                <p className="text-xs text-muted-foreground">Technology Director, Schiphol</p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="To-Be-Dressed Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">To-Be-Dressed</p>
                    <p className="text-sm text-muted-foreground">Fashion Retail</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Demand Cluster's e-commerce solutions have revolutionized our online presence. Their team's expertise
                  has been invaluable in our growth and success in the digital marketplace."
                </p>
                <p className="mt-4 text-sm font-medium">Sophie Jansen</p>
                <p className="text-xs text-muted-foreground">E-Commerce Director, To-Be-Dressed</p>
              </CardContent>
            </Card>
          </StaggeredChildren>

          <AnimatedSection className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Global Reach
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Global Presence</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                With offices in 15 countries across 5 continents, we provide local expertise with global capabilities.
                Our diverse team of over 1,000 professionals brings together a wealth of knowledge, experience, and
                cultural perspectives to deliver innovative solutions to clients worldwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-sm text-muted-foreground">Office Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">40+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-muted-foreground">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
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
                  alt="Global Map"
                  className="rounded-lg object-cover relative"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Join Our Journey</h2>
            <p className="mt-4 text-white/90 md:text-xl">
              Whether you're looking to partner with us, join our team, or learn more about our services, we'd love to
              hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
              >
                View Career Opportunities
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
