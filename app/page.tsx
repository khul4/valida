"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  Zap,
  Bot,
  MessageCircle,
  Rocket,
  Upload,
  Eye,
  Share2,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaIsSubmitting, setCtaIsSubmitting] = useState(false);
  const [ctaSubmitMessage, setCtaSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formBody = new URLSearchParams({
        email: email,
        source: "NextDocs project",
        notes: "Main landing page signup",
      }).toString();

      const response = await fetch(
        `https://app.loops.so/api/newsletter-form/${process.env.NEXT_PUBLIC_LOOPS_FORM_ID}`,
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("🎉 Thank you! You've been added to our waitlist.");
        setEmail("");
      } else {
        setSubmitMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage(
        "❌ Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCtaIsSubmitting(true);
    setCtaSubmitMessage("");

    try {
      const formBody = new URLSearchParams({
        email: ctaEmail,
        source: "NextDocs project - Final CTA",
        notes: "Final CTA signup",
      }).toString();

      const response = await fetch(
        `https://app.loops.so/api/newsletter-form/${process.env.NEXT_PUBLIC_LOOPS_FORM_ID}`,
        {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const result = await response.json();

      if (result.success) {
        setCtaSubmitMessage("🎉 Thank you! You've been added to our waitlist.");
        setCtaEmail("");
      } else {
        setCtaSubmitMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setCtaSubmitMessage(
        "❌ Network error. Please check your connection and try again."
      );
    } finally {
      setCtaIsSubmitting(false);
    }
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-6xl w-full px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl px-5 py-4 shadow-lg border border-gray-200 max-w-7xl">
          <div className="flex items-center justify-between space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Arek</span>
            </div>

            <Button
              size="sm"
              onClick={scrollToHero}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-32 pb-20 px-4 bg-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-blue-400 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10 bg-gray-50 py-10 px-4 rounded-2xl ">
          <div className="mb-12 mt-10">
            <Badge
              variant="outline"
              className="mb-6 py-2 px-4 text-sm bg-white/50 backdrop-blur-sm"
            >
              Join beta
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Beautiful, Interactive API docs
              <br />
              for Next.js teams
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Upload your OpenAPI spec and get stunning, framework-optimized
              docs in minutes. Deploy to Vercel or use our hosted platform.
            </p>
          </div>

          {/* Email Form */}
          <div className="max-w-md mx-auto mb-16">
            <form className="flex gap-3" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-2xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 px-4"
              />
              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-2xl px-8 font-semibold h-12"
              >
                {isSubmitting ? "..." : "Join Waitlist"}
              </Button>
            </form>
            {submitMessage && (
              <div
                className={`text-sm text-center mt-3 p-3 rounded-lg ${
                  submitMessage.includes("🎉")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {submitMessage}
              </div>
            )}

            {/* Trust indicators */}
            {/* <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
              </div>
              <span>Trusted by 1,000+ early adopters</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Ship docs 10× faster
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ship docs 10× faster with features designed for Next.js developers
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 - Next.js-native */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="bg-black rounded-2xl p-6 mb-6 mx-auto max-w-sm">
                <div className="text-white text-left text-xs font-mono">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>next build</span>
                  </div>
                  <div className="mb-2">
                    ✓ Creating an optimized production build
                  </div>
                  <div className="mb-2">✓ Compiled successfully</div>
                  <div className="mb-2">✓ Collecting page data</div>
                  <div className="mb-2">✓ Generating static pages (4/4)</div>
                  <div className="mb-3">✓ Finalizing page optimization</div>
                  <div className="text-green-400">Build completed in 12.3s</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Next.js-native
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                SSG/ISR for blazing load times.
              </p>
            </div>

            {/* Card 2 - AI Code Samples */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="bg-black rounded-2xl p-6 mb-6 mx-auto max-w-sm">
                <div className="text-white text-xs font-mono text-left">
                  <div className="text-blue-300 mb-1">
                    // AI Generated Code Sample
                  </div>
                  <div className="text-green-300 mb-1">
                    const response = await fetch(
                  </div>
                  <div className="text-yellow-300 mb-1"> '/api/users',</div>
                  <div className="text-yellow-300 mb-1">
                    {" "}
                    {`{ method: 'GET' }`}
                  </div>
                  <div className="text-green-300 mb-2">)</div>
                  <div className="text-purple-300 mb-1">curl -X GET \\</div>
                  <div className="text-purple-300 mb-1">
                    {" "}
                    https://api.example.com/users \\
                  </div>
                  <div className="text-purple-300">
                    {" "}
                    -H "Content-Type: application/json"
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                AI Code Samples
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fetch for Next.js, Python requests, and cURL generated
                instantly.
              </p>
            </div>

            {/* Card 3 - Built-in Collaboration */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="bg-black rounded-2xl p-6 mb-6 mx-auto max-w-sm">
                <div className="text-white text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold">API Endpoint</span>
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-black"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-black"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-black"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded p-2 mb-2 text-xs">
                    <span className="text-green-300">GET</span>{" "}
                    <span className="text-white">/api/users/{`{id}`}</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    💬 Sarah: "Should we add pagination here?"
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    💬 Mike: "Yes, let's limit to 20 results"
                  </div>
                  <div className="text-xs text-blue-300">
                    💬 You: "Added pagination docs ✓"
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Built-in Collaboration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comment directly on endpoints.
              </p>
            </div>

            {/* Card 4 - Instant Deployment */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="bg-black rounded-2xl p-6 mb-6 mx-auto max-w-sm">
                <div className="text-white text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-4 h-4">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-white"
                      >
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold">Vercel Deploy</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Build completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Deploy preview ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span>Going live...</span>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-blue-300">
                    🚀 docs.nextdocs.io
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Instant Deployment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                1-click Vercel deploy or hosted in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How does our service compare?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't settle for slow, generic documentation tools. Arek
                delivers Next.js-optimized performance and AI-generated code
                samples at a fraction of the cost.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-900"></th>
                    <th className="text-center p-4 font-semibold text-gray-900">
                      <div className="font-bold text-green-700">Arek</div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600">
                      <div className="font-bold">Mintlify</div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600">
                      <div className="font-bold">Scalar</div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600">
                      <div className="font-bold">Bump</div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600">
                      <div className="font-bold">ReadMe</div>
                    </th>
                    <th className="text-center p-4 font-semibold text-gray-600">
                      <div className="font-bold">Redoc</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">
                      Next.js-first
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">
                      AI Code Samples
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-sm text-gray-600">Limited</span>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-sm text-gray-600">Limited</span>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">
                      Built-in Collaboration
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-900">
                      Open Source Option
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    </td>
                    <td className="text-center p-4">
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-1 text-xs text-gray-500">
              <p>
                Compare features across leading API documentation platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta py-20 px-4 bg-black text-white">
        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to ship better docs?
          </h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join the waitlist and be among the first to experience
            Next.js-native documentation with AI-powered code samples.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <form className="flex gap-3 max-w-md w-full" onSubmit={handleCtaSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              value={ctaEmail}
              onChange={(e) => setCtaEmail(e.target.value)}
              required
              className="flex-1 rounded-2xl border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-white focus:ring-white h-12 px-4"
            />
            <Button 
              type="submit"
              disabled={ctaIsSubmitting || !ctaEmail}
              className="bg-white hover:bg-gray-100 disabled:bg-gray-400 disabled:text-gray-600 text-black rounded-2xl px-8 font-semibold h-12"
            >
              {ctaIsSubmitting ? "..." : "Join Waitlist"}
            </Button>
          </form>
        </div>
        
        {ctaSubmitMessage && (
          <div
            className={`text-sm text-center mt-6 p-3 rounded-lg max-w-md mx-auto ${
              ctaSubmitMessage.includes("🎉")
                ? "bg-green-900 text-green-300 border border-green-700"
                : "bg-red-900 text-red-300 border border-red-700"
            }`}
          >
            {ctaSubmitMessage}
          </div>
        )}
       
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white border-t border-gray-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-white">Arek</span>
            </div>
            
          </div>
          
        </div>
      </footer>
    </div>
  );
}
