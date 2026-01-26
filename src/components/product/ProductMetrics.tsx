'use client';

import Container from '@/components/ui/container';

const metrics = [
  {
    value: '10hrs',
    label: 'Saved per week',
    description: 'Average time saved by agencies',
  },
  {
    value: '95%',
    label: 'Client satisfaction',
    description: 'Clients love our reports',
  },
  {
    value: '3min',
    label: 'Average build time',
    description: 'From data to delivery',
  },
  {
    value: '500+',
    label: 'Agencies trust us',
    description: 'Growing every day',
  },
];

const testimonials = [
  {
    quote: "This tool cut our reporting time from 8 hours to 30 minutes. Game changer for our agency.",
    author: "Sarah Chen",
    role: "SEO Director",
    company: "Growth Digital",
  },
  {
    quote: "Our clients actually look forward to reports now. The insights are clear and actionable.",
    author: "Michael Torres",
    role: "Founder",
    company: "SEO Collective",
  },
  {
    quote: "Finally, a reporting tool that doesn't require a PhD to use. Setup took 10 minutes.",
    author: "Emily Roberts",
    role: "Marketing Lead",
    company: "Startup Labs",
  },
];

export default function ProductMetrics() {
  return (
    <section className="py-24 border-b border-neutral-100 bg-white">
      <Container>
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold mb-2 text-black">
                {metric.value}
              </div>
              <div className="text-sm font-semibold mb-1 text-black">
                {metric.label}
              </div>
              <div className="text-sm text-neutral-500">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] mb-4 text-black">
            Loved by SEO professionals.
          </h2>
          <p className="text-lg text-neutral-600">
            Join hundreds of agencies and consultants who trust Arek AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-black transition-all"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <div className="font-semibold text-black">
                  {testimonial.author}
                </div>
                <div className="text-sm text-neutral-500">
                  {testimonial.role} · {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
