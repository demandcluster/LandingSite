import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredChildren } from "@/components/staggered-children"

export const metadata: Metadata = {
  title: "Emotional AI Research Case Study | AI Relationship Solutions",
  description: "Learn about our collaborative research project exploring emotional connections between humans and AI.",
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Emotional AI Research</h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="/portfolio/emotional-ai-research-hero.jpg"
                alt="Emotional AI Research Laboratory"
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
                <li><strong>Client:</strong> Research Consortium</li>
                <li><strong>Duration:</strong> 18 months</li>
                <li><strong>Technologies:</strong> Machine Learning, Emotional Analysis, Behavioral Psychology</li>
              </ul>
            </div>
          </AnimatedSection>

          <StaggeredChildren>
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold">Challenge</h2>
              <p className="text-sm md:text-base">
                The research consortium needed to understand and quantify the development
                of emotional connections between humans and AI systems. The challenge
                was to create a framework for measuring and analyzing these relationships
                while ensuring ethical considerations and user well-being.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
              <p className="text-sm md:text-base">
                We developed a comprehensive research framework that combines advanced
                AI analysis with psychological assessment methods. The project included:
              </p>
              <ul className="text-sm md:text-base">
                <li>Development of emotional connection measurement metrics</li>
                <li>Longitudinal study of human-AI relationship development</li>
                <li>Ethical guidelines for AI relationship research</li>
                <li>Framework for assessing emotional well-being in AI interactions</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/emotional-ai-research-solution.jpg"
                  alt="Research Framework Visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-bold">Results</h2>
              <p className="text-sm md:text-base">
                The research project yielded significant insights into human-AI
                relationships. Key findings include:
              </p>
              <ul className="text-sm md:text-base">
                <li>Identification of key factors in emotional connection development</li>
                <li>Framework for measuring relationship quality and health</li>
                <li>Guidelines for ethical AI relationship development</li>
                <li>Published research papers and industry standards</li>
              </ul>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] mt-6 rounded-lg overflow-hidden">
                <Image
                  src="/portfolio/emotional-ai-research-results.jpg"
                  alt="Research Findings Presentation"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <h2 className="text-2xl md:text-3xl font-bold">Impact</h2>
              <p className="text-sm md:text-base">
                This research has significantly contributed to the understanding of
                human-AI relationships, providing valuable insights for developers,
                psychologists, and ethicists. The findings have influenced industry
                standards and best practices for creating emotionally intelligent AI
                systems that prioritize user well-being.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="not-prose mt-8 rounded-lg border bg-muted p-4 transition-all hover:shadow-md">
                <h2 className="text-lg font-semibold">Key Learnings</h2>
                <ul className="mt-2 space-y-2 text-sm md:text-base">
                  <li>Importance of longitudinal studies in understanding relationship development</li>
                  <li>Need for standardized metrics in emotional connection assessment</li>
                  <li>Role of ethical guidelines in AI relationship research</li>
                  <li>Impact of AI relationships on human emotional well-being</li>
                </ul>
              </div>
            </AnimatedSection>
          </StaggeredChildren>
        </article>
      </div>
    </div>
  )
} 