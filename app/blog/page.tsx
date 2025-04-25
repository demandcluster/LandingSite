import Link from "next/link"
import Image from "next/image"
import { Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Insights & Perspectives
            </h1>
            <p className="mt-4 text-white/90 md:text-xl">
              Explore the latest trends, insights, and thought leadership from our experts.
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

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured Articles</h2>
              <p className="text-muted-foreground">Our most popular and insightful content.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="grid grid-cols-4 w-full md:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </AnimatedSection>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <AnimatedSection direction="up" className="col-span-1 md:col-span-2">
                <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-60 w-full md:w-2/5">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
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
                          <Image src="/placeholder.svg?height=40&width=40" alt="Author" fill className="object-cover" />
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
            </div>

            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard
                title="The Future of Digital Transformation"
                excerpt="How businesses can prepare for the next wave of digital innovation and stay ahead of the competition."
                image="/placeholder.svg?height=200&width=300"
                category="Tech"
                date="March 28, 2023"
                author="Michael Chen"
                authorRole="CTO"
                authorImage="/placeholder.svg?height=40&width=40"
                slug="future-of-digital-transformation"
              />
              <BlogCard
                title="Building Resilient Supply Chains"
                excerpt="Strategies for creating adaptable and resilient supply chains that can withstand global disruptions."
                image="/placeholder.svg?height=200&width=300"
                category="Business"
                date="March 15, 2023"
                author="Emily Rodriguez"
                authorRole="Supply Chain Director"
                authorImage="/placeholder.svg?height=40&width=40"
                slug="building-resilient-supply-chains"
              />
              <BlogCard
                title="AI-Powered Customer Experience"
                excerpt="How artificial intelligence is revolutionizing customer service and creating personalized experiences."
                image="/placeholder.svg?height=200&width=300"
                category="Tech"
                date="February 22, 2023"
                author="David Kim"
                authorRole="AI Specialist"
                authorImage="/placeholder.svg?height=40&width=40"
                slug="ai-powered-customer-experience"
              />
              <BlogCard
                title="Sustainable Business Practices"
                excerpt="Implementing eco-friendly strategies that benefit both the environment and your bottom line."
                image="/placeholder.svg?height=200&width=300"
                category="Insights"
                date="February 10, 2023"
                author="Lisa Patel"
                authorRole="Sustainability Lead"
                authorImage="/placeholder.svg?height=40&width=40"
                slug="sustainable-business-practices"
              />
              <BlogCard
                title="Navigating Regulatory Compliance"
                excerpt="A comprehensive guide to understanding and implementing regulatory requirements in your industry."
                image="/placeholder.svg?height=200&width=300"
                category="Business"
                date="January 25, 2023"
                author="Robert Johnson"
                authorRole="Legal Advisor"
                authorImage="/placeholder.svg?height=40&width=40"
                slug="navigating-regulatory-compliance"
              />
              <BlogCard
                title="The Power of Data Visualization"
                excerpt="How effective data visualization can transform complex information into actionable insights."
                image="/placeholder.svg?height=200&width=300"
                category="Tech"
                date="January 12, 2023"
                author="Jennifer Lee"
                authorRole="Data Scientist"
                authorImage="/placeholder.svg?height=40&width=40"
                slug="power-of-data-visualization"
              />
            </StaggeredChildren>

            <AnimatedSection className="flex justify-center mt-12">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    1
                  </Button>
                  <Button variant="outline" size="icon">
                    2
                  </Button>
                  <Button variant="outline" size="icon">
                    3
                  </Button>
                  <span className="mx-2">...</span>
                  <Button variant="outline" size="icon">
                    8
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Showing 6 of 24 articles</p>
              </div>
            </AnimatedSection>
          </TabsContent>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mt-2">
              Get the latest insights and trends delivered straight to your inbox.
            </p>
          </AnimatedSection>
          <AnimatedSection className="mx-auto max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
