import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <div className="flex items-center space-x-6">
            <Link href="#home" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
          
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 rounded-full px-4">
              Contact
            </Button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hey, We are Arek
            <br />
            <span className="text-gray-600">Developer & Innovator</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Crafting intelligent solutions that streamline business processes. 
            Currently building AI automation tools, but always exploring new possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
              Invoice Processing App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              
              Turn Video to Step by step doc
              
            </Button>
          </div>
       
        </div>
      </section>

   







    
     
    </div>
  )
}
