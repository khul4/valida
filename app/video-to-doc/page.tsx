import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckCircle, Play, FileText, Users, Clock, Video, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VideoToDocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-100/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-gray-900">VideoDoc</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#demo" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Demo
            </Link>
            <Link href="#careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Careers
            </Link>
            <Button size="sm" variant="outline" className="rounded-full">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Decentralized all-in-one
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    documentation platform.
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Turn videos into docs, every time.
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Powerful AI transforms your screen recordings into comprehensive documentation 
                      in seconds, with easy search and quick access to all relevant information. 🚀
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Perfect for operation managers.
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Define the visual direction of your processes and translate the 
                      workflows into high-fidelity documentation that successfully 
                      communicates your team's procedures and best practices. 🔥
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Safe and secure environment.
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      There is no fear of losing work by anyone! Extra care is 
                      taken in protecting our users so they can complete the 
                      documentation process in a safe manner with full transparency. 🛡️
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Waitlist Form */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Join our journey and
                    <br />
                    get early access
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Join our exclusive waitlist today to spark connection 
                    and get notified when we launch 🚀
                  </p>
                </div>

                {/* User Avatars */}
                <div className="flex justify-center mb-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-red-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      S
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      M
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      J
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      R
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      A
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      K
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      L
                    </div>
                  </div>
                </div>

                {/* Waitlist Form */}
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Tell us your name..."
                      className="w-full rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address..."
                      className="w-full rounded-lg border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg py-3 font-semibold"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                  By clicking "Continue" you agree to our{" "}
                  <Link href="#" className="text-purple-600 hover:text-purple-700 underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-purple-600 hover:text-purple-700 underline">
                    Terms of Use
                  </Link>
                </p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Operation Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for operation managers who need to create process documentation, 
              onboarding guides, and workflow documentation quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Process Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform complex workflows into clear, step-by-step documentation 
                that anyone can follow.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Onboarding Guides</h3>
              <p className="text-gray-600 leading-relaxed">
                Create comprehensive onboarding materials that get new team members 
                up to speed quickly.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workflow Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                Record once, document forever. Turn any screen recording into 
                searchable, organized documentation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 mb-8">Trusted by operation teams at</p>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">TechCorp</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">DataFlow</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">OptiMax</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 font-semibold">FlowLabs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600 text-sm">
            © 2025 VideoDoc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}