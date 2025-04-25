import Image from "next/image"
import { CheckCircle, Award, Users, Briefcase, Globe, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata = {
  title: "About - Demand Cluster",
  description: "Learn about Demand Cluster, our mission, values, and the team behind our success.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              About Demand Cluster
            </h1>
            <p className="mt-4 text-white/90 md:text-xl">
              We're a team of experts dedicated to helping businesses optimize their operations and achieve sustainable
              growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Who We Are</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Demand Cluster was founded in 2010 with a simple mission: to help businesses thrive in an increasingly
                complex and competitive landscape. What started as a small consulting firm has grown into a
                comprehensive business solutions provider with a global presence.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our team brings together experts from various industries and disciplines, united by a passion for
                innovation and a commitment to delivering exceptional results. We believe in building long-term
                partnerships with our clients, working collaboratively to address their unique challenges and
                opportunities.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Today, Demand Cluster serves clients across industries, from startups to Fortune 500 companies, helping
                them optimize operations, drive growth, and achieve their strategic objectives.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2} className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="About Us"
                  className="rounded-lg object-cover relative"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Our core values guide everything we do, from how we work with clients to how we collaborate as a team.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, setting high standards and continuously raising the bar
                for ourselves and our clients.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of collaboration, working closely with our clients and partners to achieve
                shared goals and drive mutual success.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace innovation, constantly seeking new ideas, approaches, and technologies to solve complex
                business challenges.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with the highest level of integrity, maintaining transparency, honesty, and ethical standards
                in all our interactions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to sustainable business practices, considering the long-term impact of our actions on
                society, the economy, and the environment.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="rounded-full bg-blue-100 p-2 w-fit text-blue-600 dark:bg-blue-900 dark:text-blue-300 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accountability</h3>
              <p className="text-muted-foreground">
                We take ownership of our work and are accountable for our results, ensuring we deliver on our promises
                and exceed expectations.
              </p>
            </div>
          </StaggeredChildren>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-2">Meet Our Leadership</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Our leadership team brings decades of experience across various industries and disciplines.
            </p>
          </AnimatedSection>

          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Executive Officer</p>
              <p className="text-muted-foreground text-sm">
                With over 20 years of experience in business strategy and operations, Sarah leads our company with
                vision and purpose.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Technology Officer</p>
              <p className="text-muted-foreground text-sm">
                Michael brings deep expertise in digital transformation and emerging technologies to drive innovation
                across our solutions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Emily Rodriguez</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Operations Officer</p>
              <p className="text-muted-foreground text-sm">
                Emily oversees our day-to-day operations, ensuring we deliver exceptional service and results to our
                clients.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="CFO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">David Kim</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Financial Officer</p>
              <p className="text-muted-foreground text-sm">
                David manages our financial strategy and operations, ensuring sustainable growth and value creation.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="CMO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Lisa Patel</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Marketing Officer</p>
              <p className="text-muted-foreground text-sm">
                Lisa leads our marketing and communications strategy, building our brand and driving client engagement.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="CHRO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Robert Johnson</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">Chief Human Resources Officer</p>
              <p className="text-muted-foreground text-sm">
                Robert oversees our talent strategy, fostering a culture of excellence, innovation, and continuous
                learning.
              </p>
            </div>
          </StaggeredChildren>

          <AnimatedSection className="flex justify-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
              View Full Team
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection direction="left" className="flex justify-center">
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
            <AnimatedSection direction="right" delay={0.2} className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why We Exist</h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Our mission is to empower businesses with the tools, insights, and strategies they need to thrive in
                today's dynamic market environment. We believe in building long-term partnerships with our clients,
                working collaboratively to drive meaningful results.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                We are committed to delivering innovative solutions that address the unique challenges of each client,
                helping them optimize operations, increase efficiency, and achieve sustainable growth.
              </p>
              <div className="pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  Learn More About Our Vision
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 text-white/90 md:text-xl">
              We're always looking for talented individuals who share our values and passion for excellence. Explore
              career opportunities at Demand Cluster.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                View Open Positions
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
              >
                Our Culture
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
