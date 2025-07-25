"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Combobox } from "@/components/ui/combobox"
import { CheckCircle, Play, FileText, Users, Clock, Video, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function VideoToDocPage() {
  const [selectedIntegration, setSelectedIntegration] = useState("")
  const [customTool, setCustomTool] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Prepare form data
      const integrationValue = selectedIntegration === "others" ? customTool : selectedIntegration
      
      const formBody = new URLSearchParams({
        firstName: firstName,
        email: email,
        source: "Yopo project",
        integration: integrationValue,
        notes: `Integration preference: ${integrationValue}`
      }).toString()

      const response = await fetch(`https://app.loops.so/api/newsletter-form/${process.env.NEXT_PUBLIC_LOOPS_FORM_ID}`, {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("🎉 Thank you! You've been added to our waitlist.")
        // Reset form
        setFirstName("")
        setEmail("")
        setSelectedIntegration("")
        setCustomTool("")
      } else {
        setSubmitMessage("❌ Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("❌ Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Arek.</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            
           
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
                <Badge variant="default" className="mb-5 py-2 px-3">Project Yopo</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Like <span className="text-blue-500">ScribeHow</span>  but built for Customer Support
                  <br />
                  <span className="text-black">
                  </span>
                </h1>
                <h2 className="text-xl md:text-xl text-gray-600 mb-4">
                  Explain with your voice. Let AI turn it into step-by-step guides.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-600 mb-2 text-xl">
                      Record
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Walk through your process as usual, but this time, talk through it. Our recorder captures both your screen and your voice
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-600 mb-2 text-xl">
                      Transcribe & Summarize
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                     Our AI transcribes your voice into clear paragraphs, pulls out key steps, and generates a clean, structured guide with screenshots and explanations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-600 mb-2 text-xl">
                      Export
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Easily publish to your knowledge base or share a link with your team 

                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Waitlist Form */}
            <div className="relative">
              <div className="bg-white border-2 border-black rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Get early access
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Join our exclusive waitlist today,<br/> and get special discounts when we launch 🚀
                  </p>
                </div>

             

                {/* Waitlist Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      type="text"
                      placeholder="Tell us your first name..."
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Where would you like to share this guide?
                    </label>
                    <Combobox
                      value={selectedIntegration}
                      onValueChange={setSelectedIntegration}
                      placeholder="Select integration..."
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  {selectedIntegration === "others" && (
                    <div>
                      <Input
                        type="text"
                        placeholder="Please specify your tool..."
                        value={customTool}
                        onChange={(e) => setCustomTool(e.target.value)}
                        required
                        className="w-full rounded-lg border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                  )}

                  {submitMessage && (
                    <div className={`text-sm text-center p-3 rounded-lg ${
                      submitMessage.includes('🎉') 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !firstName || !email}
                    className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-lg py-3 font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gray-300 rounded-full opacity-20 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </main>



      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Arek. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}