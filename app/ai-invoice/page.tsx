import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Bot, Zap, Shield, Clock, DollarSign, ArrowRight, Mail, Users, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIInvoicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">Arek</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Button size="sm">Request Access</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                🤖 AI-Powered Automation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Scale Smarter
                <br />
                <span className="text-blue-600">Not Harder</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlock the full potential of your invoice processing through tailored AI automation 
                that drives measurable results. Save hours daily with intelligent validation and routing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="px-8">
                  Request Access
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="AI Invoice Processing Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600 mb-8">Trusted by 1.2K+ businesses</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here */}
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Impact In Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5hrs</div>
              <p className="text-gray-600">Saved Daily</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Invoices Processed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Automated Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Help Your Business Succeed
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced machine learning algorithms automatically extract, validate, and categorize 
                invoice data with 98% accuracy.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">PO Validation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent validation against purchase orders ensures compliance and prevents 
                unauthorized payments before approval.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Routing</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically routes invoices to appropriate managers based on amount, department, 
                and approval hierarchy rules.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Process invoices instantly as they arrive, eliminating bottlenecks and reducing 
                payment delays significantly.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboards and reports provide insights into processing times, 
                costs, and approval patterns.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless collaboration tools allow teams to review, comment, and approve 
                invoices from anywhere.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Proven Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Receive & Extract</h3>
              <p className="text-gray-600 leading-relaxed">
                AI automatically receives invoices via email and extracts all relevant data 
                including vendor, amounts, and line items.
              </p>
              <Button variant="outline" className="mt-6">
                Get Started
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Validate & Match</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent validation against purchase orders and company policies ensures 
                accuracy and compliance before processing.
              </p>
              <Button variant="outline" className="mt-6">
                Get Started
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Route & Approve</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart routing sends invoices to the right approvers with complete audit trails 
                and automated follow-ups.
              </p>
              <Button variant="outline" className="mt-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                "This AI system has completely transformed our invoice processing. What used to take 
                our team 5 hours daily now happens automatically. The accuracy is incredible."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Sophia"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sophia Chen</p>
                  <p className="text-sm text-gray-600">CFO, TechFlow</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The ROI was immediate. We're saving thousands in processing costs and our approval 
                times dropped from days to hours. Best investment we've made."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Michael"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Michael Torres</p>
                  <p className="text-sm text-gray-600">Finance Director, GlobalCorp</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Finally, a solution that actually works. The AI learns our approval patterns and 
                handles exceptions intelligently. Our team can focus on strategic work now."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Sarah"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Sarah Kim</p>
                  <p className="text-sm text-gray-600">Operations Manager, InnovateB2B</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Invoice Processing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of businesses saving hours daily with AI-powered automation. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">AI Invoice Agent</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming invoice processing with intelligent automation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-gray-900 transition-colors">Portfolio</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Arek. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
