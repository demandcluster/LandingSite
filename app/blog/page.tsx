import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"
import { BlogCard } from "@/components/blog-card"

export const metadata = {
  title: "Blog - Demand Cluster",
  description: "Latest insights, trends, and thought leadership from Demand Cluster.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Insights & Analysis
            </h1>
            <p className="mt-6 text-lg text-white/90 md:text-xl">
              Expert perspectives on AI, technology, and business transformation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Featured Post */}
            <AnimatedSection direction="up" className="mb-16">
              <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-lg transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-2/5">
                    <Image
                      src="/home/blog-future-ai.jpg"
                      alt="Featured blog post"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      priority
                    />
                    <Badge className="absolute top-6 left-6 bg-blue-600 hover:bg-blue-700 text-sm px-4 py-1">Featured</Badge>
                  </div>
                  <div className="flex flex-col justify-between p-8 md:w-3/5">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-sm">Business</Badge>
                        <span className="text-sm text-muted-foreground">April 15, 2023</span>
                      </div>
                      <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                        <Link href="/blog/transforming-business-operations">
                          Transforming Business Operations with Data-Driven Insights
                        </Link>
                      </h3>
                      <p className="text-lg text-muted-foreground line-clamp-3">
                        Discover how leading companies are leveraging data analytics to transform their operations,
                        increase efficiency, and drive sustainable growth in today's competitive landscape.
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image src="/team/sarah-johnson-avatar.jpg" alt="Author" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-base font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Chief Data Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Blog Posts Grid */}
            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                title="The Future of Digital Transformation"
                excerpt="How businesses can prepare for the next wave of digital innovation and stay ahead of the competition."
                image="/home/blog-future-ai.jpg"
                category="Tech"
                date="March 28, 2023"
                author="Michael Chen"
                authorRole="CTO"
                authorImage="/team/michael-chen-avatar.jpg"
                slug="future-of-digital-transformation"
              />
              <BlogCard
                title="Building Resilient Supply Chains"
                excerpt="Strategies for creating adaptable and resilient supply chains that can withstand global disruptions."
                image="/home/blog-scalable-platforms.jpg"
                category="Business"
                date="March 15, 2023"
                author="Emily Rodriguez"
                authorRole="Supply Chain Director"
                authorImage="/team/emily-rodriguez-avatar.jpg"
                slug="building-resilient-supply-chains"
              />
              <BlogCard
                title="AI-Powered Customer Experience"
                excerpt="How artificial intelligence is revolutionizing customer service and creating personalized experiences."
                image="/home/blog-mobile-experience.jpg"
                category="Tech"
                date="February 22, 2023"
                author="Sarah Johnson"
                authorRole="AI Specialist"
                authorImage="/team/sarah-johnson-avatar.jpg"
                slug="ai-powered-customer-experience"
              />
              <BlogCard
                title="Sustainable Business Practices"
                excerpt="Implementing eco-friendly strategies that benefit both the environment and your bottom line."
                image="/home/blog-mobile-experience.jpg"
                category="Insights"
                date="February 10, 2023"
                author="Lisa Patel"
                authorRole="Sustainability Lead"
                authorImage="/team/lisa-patel-avatar.jpg"
                slug="sustainable-business-practices"
              />
              <BlogCard
                title="Navigating Regulatory Compliance"
                excerpt="A comprehensive guide to understanding and implementing regulatory requirements in your industry."
                image="/home/blog-compliance.jpg"
                category="Business"
                date="January 25, 2023"
                author="Robert Johnson"
                authorRole="Legal Advisor"
                authorImage="/team/robert-johnson-avatar.jpg"
                slug="navigating-regulatory-compliance"
              />
              <BlogCard
                title="The Power of Data Visualization"
                excerpt="How effective data visualization can transform complex information into actionable insights."
                image="/home/blog-data-viz.jpg"
                category="Tech"
                date="January 12, 2023"
                author="Jennifer Lee"
                authorRole="Data Scientist"
                authorImage="/team/jennifer-lee-avatar.jpg"
                slug="power-of-data-visualization"
              />
            </StaggeredChildren>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mt-4 mb-8">
              Subscribe to our newsletter for the latest insights on AI and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-base">Subscribe</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
