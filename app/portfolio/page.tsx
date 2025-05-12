import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata: Metadata = {
  title: "Portfolio | AI Relationship Solutions",
  description: "Explore our successful AI relationship projects and case studies.",
}

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="w-full py-8 md:py-12 lg:py-16 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Our Portfolio
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90">
              Discover how we've helped organizations build meaningful AI relationships
              and create emotionally intelligent digital experiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container px-4 mx-auto grid max-w-[980px] gap-6 md:gap-8 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <StaggeredChildren className="grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Case Study 1 */}
          <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/portfolio/ai-relationship-platform-hero.jpg"
                alt="AI Relationship Platform Interface"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">AI Relationship Platform</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Development of an advanced AI platform that enables meaningful
                  relationships between humans and AI entities, focusing on
                  emotional intelligence and natural interaction.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/portfolio/ai-relationship-platform"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/portfolio/emotional-ai-research-hero.jpg"
                alt="Emotional AI Research Laboratory"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">Emotional AI Research</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Collaborative research project exploring the development of
                  emotional connections between humans and AI, with a focus on
                  ethical considerations and user well-being.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/portfolio/emotional-ai-research"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/portfolio/ai-companion-hero.jpg"
                alt="AI Companion Interface"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">AI Companion Development</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Creation of AI companions that provide meaningful emotional
                  support and companionship, with a focus on natural interaction
                  and personal growth.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/portfolio/ai-companion"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/portfolio/ai-therapy-hero.jpg"
                alt="AI Relationship Therapy Interface"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between space-y-4 p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold">AI Relationship Therapy</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Development of AI-powered therapeutic tools that help users
                  understand and improve their relationships with AI entities,
                  promoting healthy digital interactions.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/portfolio/ai-therapy"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </StaggeredChildren>
      </section>
    </div>
  )
} 