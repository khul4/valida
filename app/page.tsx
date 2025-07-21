import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CheckCircle, FileText, Shield, Zap, DollarSign, Clock, Mail } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Arek</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Request Access</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Save Your Time, Automate Your Invoice Processing with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your invoice workflow with our custom AI agent that receives, validates against POs, and routes
            approvals to managers automatically. No more manual processing delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Request Access
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introducing Arek, Invoice Processing Agent</h2>
          <p className="text-lg text-gray-600">
            Our AI agent handles every aspect of invoice processing, from receipt to approval, with enterprise-grade
            accuracy and security.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Smart Invoice Receipt</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Automatically receive and process invoices from multiple channels including email, file uploads, and
                  API integrations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">PO Validation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  AI-powered validation against purchase orders with intelligent matching and discrepancy detection for
                  accurate processing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Approval Routing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Intelligent routing to appropriate managers based on amount thresholds, departments, and custom
                  business rules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Automated Workflow</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Custom-built automation that eliminates manual tasks and reduces processing time from days to minutes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Cost Optimization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Reduce operational costs by up to 80% while improving accuracy and compliance with automated
                  processing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-lg">Enterprise Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Bank-level security with end-to-end encryption, audit trails, and compliance with industry standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our AI Agent Works</h2>
            <p className="text-lg text-gray-600">Simple 3-step process that transforms your invoice workflow</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Invoice Receipt</h3>
                <p className="text-gray-600">
                  AI agent automatically receives invoices from email and extracts key information using advanced OCR
                  technology.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PO Validation</h3>
                <p className="text-gray-600">
                  Smart validation against existing purchase orders with intelligent matching algorithms that identify
                  discrepancies and flag exceptions.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manager Approval</h3>
                <p className="text-gray-600">
                  Automated routing to appropriate managers based on business rules, with real-time notifications and
                  approval tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Access</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the waitlist to be among the first to experience automated invoice processing with enterprise-grade AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" className="flex-1" />
            <Button className="px-8">Request Access</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No spam. We'll only contact you about product updates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold text-gray-900">Arek</span>
              </div>
              <p className="text-gray-600 text-sm">AI-powered invoice processing automation for modern businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Arek. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
