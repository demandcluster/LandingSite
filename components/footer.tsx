import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Demand Cluster Logo" width={150} height={30} priority />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              We specialize in creating AI solutions that understand and enhance human emotional well-being. Our technology builds genuine connections and provides meaningful support through advanced emotional intelligence. From personal AI companions to enterprise solutions, we're revolutionizing how humans interact with artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#ai-relationships"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  AI Relationships
                </Link>
              </li>
              <li>
                <Link
                  href="/services#emotional-intelligence"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Emotional Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-companions"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  AI Companions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#enterprise-solutions"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consultancy"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  AI Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#research"
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  AI Research
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-muted-foreground">
                  Diemermere 1
                  <br />
                  1112 TA Diemen
                  <br />
                  Netherlands
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-muted-foreground">+31-(0)203695905</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-muted-foreground">info@demandcluster.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Demand Cluster. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
