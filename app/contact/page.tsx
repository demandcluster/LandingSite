import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Contact - Demand Cluster",
  description: "Get in touch with Demand Cluster to discuss how we can help your business grow.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="w-full py-12 md:py-16 lg:py-20 gradient">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="mt-4 text-white/90 md:text-xl">
              Ready to transform your business? Contact us today to schedule a consultation with one of our experts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimatedSection direction="left" className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and one of our experts will get back to you within 24 hours.
                </p>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
                <div className="space-y-2">
                  <Label>I'm interested in</Label>
                  <RadioGroup defaultValue="consultation">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consultation" id="consultation" />
                      <Label htmlFor="consultation">Consultation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="services" id="services" />
                      <Label htmlFor="services">Specific Services</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partnership" id="partnership" />
                      <Label htmlFor="partnership">Partnership Opportunities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry"
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                  <Send className="mr-2 h-4 w-4" /> Submit
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly using the information below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@demandcluster.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        123 Business Ave, Suite 500
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Locations</CardTitle>
                  <CardDescription>Visit us at one of our global offices.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">San Francisco (Headquarters)</p>
                    <p className="text-muted-foreground">
                      123 Business Ave, Suite 500
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">New York</p>
                    <p className="text-muted-foreground">
                      456 Madison Ave, 8th Floor
                      <br />
                      New York, NY 10022
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">London</p>
                    <p className="text-muted-foreground">
                      78 Chancery Lane
                      <br />
                      London, WC2A 1AA
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Singapore</p>
                    <p className="text-muted-foreground">
                      10 Marina Boulevard
                      <br />
                      Singapore 018983
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Find answers to common questions about working with Demand Cluster.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <AnimatedSection className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What industries do you serve?</h3>
                <p className="text-muted-foreground">
                  We work with clients across various industries, including technology, healthcare, finance, retail,
                  manufacturing, and more. Our solutions are adaptable to different business contexts and challenges.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary depending on scope and complexity. Small projects may take a few weeks, while
                  larger transformations can span several months. We'll provide a detailed timeline during our initial
                  consultation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer ongoing support?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer various support options after project completion, including maintenance, training, and
                  continuous improvement services. We're committed to your long-term success.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What is your pricing model?</h3>
                <p className="text-muted-foreground">
                  Our pricing depends on project scope, complexity, and duration. We offer fixed-price projects,
                  retainer arrangements, and value-based pricing options. We'll discuss the best approach for your needs
                  during our consultation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do you measure success?</h3>
                <p className="text-muted-foreground">
                  We establish clear key performance indicators (KPIs) at the beginning of each project and track
                  progress throughout. Our focus is on delivering measurable business outcomes aligned with your goals.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can you work with our existing team?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We believe in collaboration and knowledge transfer. We'll work closely with your team,
                  providing training and support to ensure they can maintain and build upon the solutions we implement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Take the first step toward transforming your business. Schedule a consultation with one of our experts
              today.
            </p>
            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105">
                Schedule a Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968870204824!2d-122.39997368468215!3d37.78779997975723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd1a22965d31c4b!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Demand Cluster Office Location"
        ></iframe>
      </div>
    </div>
  )
}
