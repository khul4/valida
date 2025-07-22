import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileCheck, Users, Zap, Shield, Clock, Target, ArrowRight, Mail, BarChart, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ValidationToolPage() {
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
            <Button size="sm">Start Free Trial</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                ✨ Modern Validation Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Validate Smarter
                <br />
                <span className="text-green-600">Not Harder</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The modern alternative to Scribe and traditional validation tools. 
                Streamline your validation workflows with intelligent automation and real-time collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="px-8 bg-green-600 hover:bg-green-700">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.jpg"
                alt="Validation Platform Dashboard"
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
          <p className="text-gray-600 mb-8">Trusted by 800+ validation teams worldwide</p>
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
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">Faster Validation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">3hrs</div>
              <p className="text-gray-600">Saved Per Project</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">800+</div>
              <p className="text-gray-600">Active Teams</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Help Your Validation Succeed
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Validation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent validation algorithms detect errors, inconsistencies, and missing 
                data automatically across all your workflows.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together seamlessly with live editing, comments, and approval workflows 
                that keep everyone in sync.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Workflows</h3>
              <p className="text-gray-600 leading-relaxed">
                Create custom validation pipelines that automatically route, review, 
                and approve your content based on your rules.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with end-to-end encryption, audit trails, 
                and compliance with industry standards.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive insights into validation performance, bottlenecks, 
                and team productivity with actionable reports.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Integrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly integrate with your existing tools and systems through 
                our robust API and pre-built connectors.
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Setup & Configure</h3>
              <p className="text-gray-600 leading-relaxed">
                Quickly configure your validation rules, workflows, and team permissions 
                with our intuitive setup wizard.
              </p>
              <Button variant="outline" className="mt-6">
                Get Started
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Validate & Collaborate</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with your team to validate content in real-time with intelligent 
                suggestions and automated quality checks.
              </p>
              <Button variant="outline" className="mt-6">
                Get Started
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analyze & Improve</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor performance with detailed analytics and continuously optimize 
                your validation processes for better results.
              </p>
              <Button variant="outline" className="mt-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us Over Traditional Tools
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Tools</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>❌ Manual validation processes</li>
                  <li>❌ Limited collaboration features</li>
                  <li>❌ Complex setup and maintenance</li>
                  <li>❌ Basic reporting capabilities</li>
                  <li>❌ Expensive licensing fees</li>
                </ul>
              </div>
              
              <div className="p-8 text-center bg-green-50">
                <h3 className="text-lg font-semibold text-green-600 mb-4">Our Platform</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✅ AI-powered smart validation</li>
                  <li>✅ Real-time team collaboration</li>
                  <li>✅ Quick setup in minutes</li>
                  <li>✅ Advanced analytics & insights</li>
                  <li>✅ Transparent, fair pricing</li>
                </ul>
              </div>
              
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Scribe Alternative</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>⚡ 10x faster validation</li>
                  <li>⚡ Modern, intuitive interface</li>
                  <li>⚡ Cloud-native architecture</li>
                  <li>⚡ Seamless integrations</li>
                  <li>⚡ 50% cost reduction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We switched from Scribe and couldn't be happier. The validation process is now 
                3x faster and our team actually enjoys using the platform. The collaboration features are outstanding."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Jennifer"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Jennifer Lopez</p>
                  <p className="text-sm text-gray-600">Quality Lead, DataFlow Inc</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The automated validation catches errors we would have missed manually. 
                Our accuracy has improved significantly while reducing the time spent on reviews."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="David"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">David Park</p>
                  <p className="text-sm text-gray-600">Operations Manager, TechCorp</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Finally, a modern validation tool that doesn't feel like it's from the 90s. 
                The interface is beautiful and the features are exactly what we needed."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Maria"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">Maria Garcia</p>
                  <p className="text-sm text-gray-600">Product Manager, InnovateLabs</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Validation Process?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join hundreds of teams who've already made the switch to smarter validation. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-green-600">
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
              <h3 className="font-semibold text-gray-900 mb-4">Validation Platform</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The modern alternative to traditional validation tools.
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
