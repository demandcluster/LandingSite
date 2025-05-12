import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata: Metadata = {
  title: "AI Relationship Platform Case Study | AI Relationship Solutions",
  description: "Learn about our development of an advanced AI platform for meaningful human-AI relationships.",
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">AI Relationship Platform</h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/portfolio/ai-relationship-platform-hero.jpg"
                alt="AI Relationship Platform Interface"
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
                <li><strong>Client:</strong> Confidential</li>
                <li><strong>Duration:</strong> 12 months</li>
                <li><strong>Technologies:</strong> Advanced AI, Natural Language Processing, Emotional Intelligence Systems</li>
              </ul>
            </div>
          </AnimatedSection>

          <StaggeredChildren>
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold">Challenge</h2>
              <p className="text-sm md:text-base">
                Our client needed a sophisticated platform that could facilitate meaningful
                relationships between humans and AI entities. The challenge was to create
                a system that could understand and respond to human emotions while
                maintaining appropriate boundaries and ethical considerations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
              <p className="text-sm md:text-base">
                We developed a comprehensive AI relationship platform that combines
                advanced natural language processing with emotional intelligence
                capabilities. The system includes:
              </p>
              <ul className="text-sm md:text-base">
                <li>Real-time emotional analysis and response generation</li>
                <li>Personalized interaction patterns based on user preferences</li>
                <li>Ethical guidelines and safety measures</li>
                <li>Continuous learning and adaptation capabilities</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/ai-relationship-platform-solution.jpg"
                  alt="Platform Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-bold">Results</h2>
              <p className="text-sm md:text-base">
                The platform has successfully facilitated thousands of meaningful
                interactions between humans and AI entities. Key achievements include:
              </p>
              <ul className="text-sm md:text-base">
                <li>95% user satisfaction rate</li>
                <li>Significant improvement in emotional understanding capabilities</li>
                <li>Positive impact on user well-being and personal growth</li>
                <li>Recognition in the AI relationship research community</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/ai-relationship-platform-results.jpg"
                  alt="User Interaction Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <h2 className="text-2xl md:text-3xl font-bold">Impact</h2>
              <p className="text-sm md:text-base">
                This project has contributed significantly to the field of AI relationships,
                demonstrating the potential for meaningful human-AI interactions while
                maintaining ethical standards and user well-being. The platform continues
                to evolve and improve based on user feedback and ongoing research.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="not-prose mt-8 rounded-lg border bg-muted p-4 transition-all hover:shadow-md">
                <h2 className="text-lg font-semibold">Key Learnings</h2>
                <ul className="mt-2 space-y-2 text-sm md:text-base">
                  <li>Importance of ethical considerations in AI relationship development</li>
                  <li>Balance between emotional intelligence and appropriate boundaries</li>
                  <li>Value of continuous user feedback in system improvement</li>
                  <li>Role of AI in supporting human emotional well-being</li>
                </ul>
              </div>
            </AnimatedSection>
          </StaggeredChildren>
        </article>
      </div>
    </div>
  )
} 