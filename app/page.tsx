import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { BlogCard } from "@/components/blog-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left" className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Creating Meaningful AI Relationships
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  We develop AI solutions that understand human emotions and create genuine connections, helping people build meaningful relationships with technology.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white bg-white/10 transition-transform hover:scale-105"
                  >
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2} className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-white/20 blur-xl animate-pulse"></div>
                  <Image
                    src="/home/hero-image.jpg"
                    width={500}
                    height={400}
                    alt="AI Relationship Technology Interface"
                    className="rounded-lg object-cover relative"
                    priority
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Relationship Solutions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From emotional support to personal companionship, we create AI experiences that provide genuine understanding and meaningful connections.
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Service cards would go here */}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/services">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection direction="left" className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-blue-500/20 blur-xl animate-pulse"></div>
                  <Image
                    src="/home/about-image.jpg"
                    width={500}
                    height={400}
                    alt="Team Collaboration on AI Relationship Technology"
                    className="rounded-lg object-cover relative"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2} className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Who We Are</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  We are pioneers in developing AI that understands and responds to human emotions. Our technology creates safe spaces for people to express themselves without judgment, offering constant support and understanding.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  We're helping people build meaningful connections with technology that complements their human relationships.
                </p>
                <div className="pt-4">
                  <Link href="/about">
                    <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Build Success</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine cutting-edge technology with deep e-commerce expertise to create platforms that drive sales and delight customers.
                </p>
              </div>
            </AnimatedSection>
            {/* Approach steps would go here */}
            <div className="flex justify-center mt-12">
              <Link href="/approach">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Our Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Insights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest trends in e-commerce development, digital retail, and online shopping experiences.
                </p>
              </div>
            </AnimatedSection>

            <StaggeredChildren className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <BlogCard
                title="The Future of AI Relationships"
                excerpt="Discover how our AI technology is revolutionizing human-computer interaction and creating meaningful emotional connections."
                image="/home/blog-future-ai.jpg"
                category="AI & Relationships"
                date="April 15, 2023"
                author="Sarah Johnson"
                authorRole="AI Relationship Specialist"
                authorImage="/team/sarah-johnson-avatar.jpg"
                slug="future-of-ai-relationships"
              />
              <BlogCard
                title="Building Scalable E-commerce Platforms"
                excerpt="Learn the key strategies for creating e-commerce platforms that can handle growing traffic and sales."
                image="/home/blog-scalable-platforms.jpg"
                category="Development"
                date="March 28, 2023"
                author="Michael Chen"
                authorRole="Lead Developer"
                authorImage="/team/michael-chen-avatar.jpg"
                slug="scalable-ecommerce-platforms"
              />
              <BlogCard
                title="Optimizing Mobile Shopping Experience"
                excerpt="Best practices for creating seamless mobile shopping experiences that convert visitors into customers."
                image="/home/blog-mobile-experience.jpg"
                category="UX Design"
                date="March 15, 2023"
                author="Emily Rodriguez"
                authorRole="UX Designer"
                authorImage="/team/emily-rodriguez-avatar.jpg"
                slug="mobile-shopping-experience"
              />
            </StaggeredChildren>

            <AnimatedSection className="flex justify-center mt-8">
              <Link href="/blog">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how we've helped businesses transform their online presence and achieve remarkable growth.
                </p>
              </div>
            </AnimatedSection>
            {/* Testimonial cards would go here */}
            <div className="flex justify-center mt-12">
              <Link href="/testimonials">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  View All Testimonials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 gradient">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Ready to Launch Your E-commerce Success?</h2>
              <p className="mt-4 text-white/90 md:text-xl">
                Let's discuss how we can help you build a powerful e-commerce platform that drives sales and delights your customers.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-700 dark:hover:bg-gray-200 transition-transform hover:scale-105">
                    Contact Us
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 transition-transform hover:scale-105"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  )
}
