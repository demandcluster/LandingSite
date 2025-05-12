import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata: Metadata = {
  title: "AI Companion Development Case Study | AI Relationship Solutions",
  description: "Learn about our development of AI companions that provide meaningful emotional support and companionship.",
}

export default function CaseStudyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="container px-4 mx-auto max-w-[980px] py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <AnimatedSection>
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </AnimatedSection>

        <article className="prose prose-gray max-w-none dark:prose-invert">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">AI Companion Development</h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/portfolio/ai-companion-hero.jpg"
                alt="AI Companion Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="not-prose mb-8 rounded-lg border bg-muted p-4 transition-all hover:shadow-md">
              <h2 className="text-lg font-semibold">Project Overview</h2>
              <ul className="mt-2 space-y-2 text-sm md:text-base">
                <li><strong>Client:</strong> Healthcare Provider</li>
                <li><strong>Duration:</strong> 24 months</li>
                <li><strong>Technologies:</strong> Natural Language Processing, Emotional Intelligence, Personalization Engine</li>
              </ul>
            </div>
          </AnimatedSection>

          <StaggeredChildren>
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold">Challenge</h2>
              <p className="text-sm md:text-base">
                Our client needed an AI companion system that could provide meaningful
                emotional support and companionship to users while maintaining appropriate
                boundaries and promoting healthy relationship development. The challenge
                was to create a system that could adapt to individual needs while
                ensuring user safety and well-being.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
              <p className="text-sm md:text-base">
                We developed a sophisticated AI companion platform with advanced
                personalization capabilities. The system includes:
              </p>
              <ul className="text-sm md:text-base">
                <li>Adaptive personality development based on user interaction</li>
                <li>Emotional support and companionship features</li>
                <li>Personal growth and development tracking</li>
                <li>Safety protocols and boundary management</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/ai-companion-solution.jpg"
                  alt="AI Companion System Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-bold">Results</h2>
              <p className="text-sm md:text-base">
                The AI companion platform has successfully provided support to thousands
                of users. Key achievements include:
              </p>
              <ul className="text-sm md:text-base">
                <li>90% user satisfaction with emotional support quality</li>
                <li>Significant improvement in user emotional well-being</li>
                <li>Positive impact on personal growth and development</li>
                <li>Recognition for innovation in AI companionship</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/ai-companion-results.jpg"
                  alt="User Experience Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <h2 className="text-2xl md:text-3xl font-bold">Impact</h2>
              <p className="text-sm md:text-base">
                This project has demonstrated the potential of AI companions to provide
                meaningful emotional support while maintaining healthy boundaries. The
                platform continues to evolve based on user feedback and ongoing research,
                setting new standards for AI companionship technology.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="not-prose mt-8 rounded-lg border bg-muted p-4 transition-all hover:shadow-md">
                <h2 className="text-lg font-semibold">Key Learnings</h2>
                <ul className="mt-2 space-y-2 text-sm md:text-base">
                  <li>Importance of personalization in AI companionship</li>
                  <li>Balance between emotional support and healthy boundaries</li>
                  <li>Role of continuous learning in relationship development</li>
                  <li>Impact of AI companions on personal growth</li>
                </ul>
              </div>
            </AnimatedSection>
          </StaggeredChildren>
        </article>
      </div>
    </div>
  )
} 