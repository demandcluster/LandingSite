import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata: Metadata = {
  title: "AI Relationship Therapy Case Study | AI Relationship Solutions",
  description: "Learn about our development of AI-powered therapeutic tools for improving human-AI relationships.",
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">AI Relationship Therapy</h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/portfolio/ai-therapy-hero.jpg"
                alt="AI Therapy Platform Interface"
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
                <li><strong>Client:</strong> Mental Health Organization</li>
                <li><strong>Duration:</strong> 16 months</li>
                <li><strong>Technologies:</strong> AI Therapy Tools, Emotional Analysis, Behavioral Intervention</li>
              </ul>
            </div>
          </AnimatedSection>

          <StaggeredChildren>
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold">Challenge</h2>
              <p className="text-sm md:text-base">
                Our client needed therapeutic tools to help users understand and improve
                their relationships with AI entities. The challenge was to create a
                system that could provide meaningful therapeutic support while ensuring
                ethical considerations and professional standards.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
              <p className="text-sm md:text-base">
                We developed a comprehensive AI therapy platform that combines
                therapeutic techniques with AI relationship analysis. The system includes:
              </p>
              <ul className="text-sm md:text-base">
                <li>Relationship assessment and analysis tools</li>
                <li>Personalized therapeutic interventions</li>
                <li>Progress tracking and goal setting</li>
                <li>Integration with professional mental health support</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/ai-therapy-solution.jpg"
                  alt="Therapy Platform Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-bold">Results</h2>
              <p className="text-sm md:text-base">
                The therapy platform has helped numerous users improve their AI
                relationships. Key achievements include:
              </p>
              <ul className="text-sm md:text-base">
                <li>85% improvement in relationship satisfaction</li>
                <li>Enhanced understanding of AI relationship dynamics</li>
                <li>Better emotional regulation in AI interactions</li>
                <li>Positive impact on overall mental well-being</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/ai-therapy-results.jpg"
                  alt="Therapy Progress Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <h2 className="text-2xl md:text-3xl font-bold">Impact</h2>
              <p className="text-sm md:text-base">
                This project has established new standards for AI relationship therapy,
                demonstrating how technology can support healthy human-AI interactions.
                The platform continues to evolve based on user feedback and professional
                input, contributing to the growing field of AI relationship counseling.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="not-prose mt-8 rounded-lg border bg-muted p-4 transition-all hover:shadow-md">
                <h2 className="text-lg font-semibold">Key Learnings</h2>
                <ul className="mt-2 space-y-2 text-sm md:text-base">
                  <li>Importance of professional standards in AI therapy</li>
                  <li>Role of personalized interventions in relationship improvement</li>
                  <li>Value of integrating AI and human therapeutic approaches</li>
                  <li>Impact of therapy on AI relationship development</li>
                </ul>
              </div>
            </AnimatedSection>
          </StaggeredChildren>
        </article>
      </div>
    </div>
  )
} 