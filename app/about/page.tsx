import Image from "next/image"
import Link from "next/link"
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
              Pioneering the future of AI relationships, we create technology that understands human emotions and builds genuine connections.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Founded in 2020, Demand Cluster emerged from a vision to revolutionize how humans interact with artificial intelligence. We recognized that while AI technology was advancing rapidly, there was a crucial gap in emotional intelligence and genuine human connection.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our journey began with a simple yet profound question: How can we create AI that not only understands human emotions but also responds to them in a way that feels authentic and meaningful? This question has guided our development of innovative AI relationship solutions.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Today, we stand at the forefront of emotional AI technology, helping people build meaningful relationships with technology that complements their human connections. Our solutions provide safe spaces for emotional expression, understanding, and growth.
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
                Our mission is to create AI solutions that enhance human emotional well-being by providing genuine understanding, support, and companionship. We believe in building technology that respects human emotions and creates meaningful connections that enrich people's lives.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Emotional Intelligence</p>
                    <p className="text-sm text-muted-foreground">
                      We prioritize understanding and responding to human emotions with sensitivity and authenticity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Ethical AI</p>
                    <p className="text-sm text-muted-foreground">
                      We develop AI with strong ethical principles, ensuring user safety, privacy, and emotional well-being.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Human-Centered Design</p>
                    <p className="text-sm text-muted-foreground">
                      We put human needs and emotions at the center of our technology development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-600 text-white p-1 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Continuous Learning</p>
                    <p className="text-sm text-muted-foreground">
                      We constantly evolve our understanding of human-AI relationships to create better experiences.
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
              Meet our experienced founders who bring decades of expertise in technology, security, and innovation.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/founder1.png?height=128&width=128" alt="Ron van Etten" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Ron van Etten</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Founder</p>
                <p className="text-muted-foreground text-sm">
                  Active as a developer since 1982, Ron brings over 40 years of programming expertise. Featured at Young Business'86 in Brussels and recognized as the youngest entrepreneur in Dutch Quote magazine. With a background in lighting/laser programming and web development, he has contributed to numerous open source projects and holds over 20 certificates in online security. Currently moderating the Mailchimp Open Commerce community and recognized by MongoDB for his contributions.
                </p>
                <div className="mt-4">
                  <a href="https://profile.codersrank.io/user/rondlite" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                    View Profile
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src="/founder2.png?height=128&width=128" alt="Gilbert Flechsig" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1">Gilbert Flechsig</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Founder</p>
                <p className="text-muted-foreground text-sm">
                  With a career spanning from mortgage software development to ethical hacking, Gilbert brings extensive experience in security and scalability. He successfully built and managed a text-based MMORPG with 10,000 concurrent users, created a news server community with 15 million users, and developed a recipe site with 28 million recipes. His expertise in efficiency, security, and rapid development has been instrumental in building successful platforms.
                </p>
                <div className="mt-4">
                  <a href="https://receptengids.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm">
                    View Project
                  </a>
                </div>
              </CardContent>
            </Card>
          </StaggeredChildren>

          {/* <AnimatedSection className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
              Meet Our Full Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection> */}
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
              <div className="flex justify-center p-4 transition-all">
                <Image
                  src="/vd.svg?height=80&width=200"
                  alt="VD.nl"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
              <div className="flex justify-center p-4 transition-all">
                <Image
                  src="/schiphol.svg?height=80&width=200"
                  alt="Schiphol.nl"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
              <div className="flex justify-center p-4 transition-all">
                <Image
                  src="/tobeDressed.svg?height=80&width=200"
                  alt="To-Be-Dressed.nl"
                  width={200}
                  height={80}
                  className="object-contain h-16"
                />
              </div>
              <div className="flex justify-center p-4 transition-all">
                <Image
                  src="/Charluv.png?height=80&width=200"
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
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                  Contact Us
                </Button>
              </Link>
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
