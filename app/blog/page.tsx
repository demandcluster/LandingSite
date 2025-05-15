import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-white/90 md:text-xl">
              Latest insights and thought leadership from our experts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
                <Input
                  placeholder="Search articles..."
                  className="w-full bg-white/10 border-white/20 pl-10 text-white placeholder:text-white/70 focus-visible:ring-blue-400"
                />
              </div>
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90">Search</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Featured Post */}
            <AnimatedSection direction="up" className="mb-12">
              <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-60 w-full md:w-2/5">
                    <Image
                      src="/home/blog-future-ai.jpg"
                      alt="Featured blog post"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">Featured</Badge>
                  </div>
                  <div className="flex flex-col justify-between p-6 md:w-3/5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Business</Badge>
                        <span className="text-xs text-muted-foreground">April 15, 2023</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                        <Link href="/blog/transforming-business-operations">
                          Transforming Business Operations with Data-Driven Insights
                        </Link>
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        Discover how leading companies are leveraging data analytics to transform their operations,
                        increase efficiency, and drive sustainable growth in today's competitive landscape.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden">
                        <Image src="/team/sarah-johnson-avatar.jpg" alt="Author" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Chief Data Officer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Blog Posts Grid */}
            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mt-2 mb-4">
              Get the latest insights and trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
