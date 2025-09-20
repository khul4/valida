import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import FloatingLogos from './FloatingLogos'

export default function Hero() {
  return (
    <section className="relative pt-24 pb-28">
      <Container>
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Badge */}
{/*           
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-primary/30 bg-white/60 shadow-sm mb-6 relative z-20">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#FFDAB9] ring-2 ring-white" />
              <div className="w-6 h-6 rounded-full bg-[#B0E0E6] ring-2 ring-white" />
              <div className="w-6 h-6 rounded-full bg-[#C7CEEA] ring-2 ring-white" />
            </div>
            <span className="text-sm font-medium text-primary">Trusted by 1M+ users</span>
          </div> */}

          {/* Headline */}
          <h1 className="font-medium text-5xl sm:text-5xl leading-[1.02] tracking-[-0.02em] mb-3 relative z-20">
            Stop wasting hours creating reports. Let&apos;s Arek AI do it for you.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-5 relative z-20">
            Arek helps digital marketing agencies create faster, smarter, and customizable reports with AI-powered insights
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 relative z-20">
            <Button variant="default" size="lg" className="rounded-full px-8 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:translate-y-[-2px]">
              Get Started For Free
            </Button>

            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <svg width="16" height="12" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="2" width="18" height="10" rx="2" stroke="#0EA5E9"/>
                <path d="M3 6.5H6" stroke="#0EA5E9" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              No credit card required
            </div>
          </div>
        </div>
      </Container>
      <FloatingLogos />
    </section>
  )
}
