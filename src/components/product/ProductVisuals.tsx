'use client';

import Container from '@/components/ui/container';

export default function ProductVisuals() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        {/* Workflow Section */}
        <div className="mb-32">
          <div className="max-w-2xl mb-12">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] mb-4 text-black">
              Build reports in minutes,
              <br />
              not hours.
            </h2>
            <p className="text-lg text-neutral-600">
              Our streamlined workflow gets you from data to delivery faster than ever. 
              No technical skills required.
            </p>
          </div>

          {/* Visual Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:border-black transition-all h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Connect</h3>
                <p className="text-neutral-600 mb-6 flex-1">
                  Link your SEO tools with one click. Google Analytics, Search Console, Ahrefs, SEMrush—all supported.
                </p>
                <div className="mt-auto space-y-2">
                  <div className="h-8 bg-neutral-100 rounded-lg flex items-center px-3 text-sm text-neutral-500">
                    <div className="w-4 h-4 rounded-full bg-neutral-300 mr-2" />
                    Google Analytics
                  </div>
                  <div className="h-8 bg-neutral-100 rounded-lg flex items-center px-3 text-sm text-neutral-500">
                    <div className="w-4 h-4 rounded-full bg-neutral-300 mr-2" />
                    Search Console
                  </div>
                  <div className="h-8 bg-neutral-100 rounded-lg flex items-center px-3 text-sm text-neutral-500">
                    <div className="w-4 h-4 rounded-full bg-neutral-300 mr-2" />
                    Ahrefs
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:border-black transition-all h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Customize</h3>
                <p className="text-neutral-600 mb-6 flex-1">
                  Choose from pre-built templates or create your own. Add your branding, select metrics, arrange sections.
                </p>
                <div className="mt-auto">
                  <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded bg-black" />
                      <div className="flex-1">
                        <div className="h-3 bg-neutral-200 rounded w-3/4 mb-1" />
                        <div className="h-2 bg-neutral-200 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 bg-white border border-neutral-200 rounded" />
                      <div className="h-6 bg-white border border-neutral-200 rounded" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:border-black transition-all h-full flex flex-col">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Deliver</h3>
              <p className="text-neutral-600 mb-6 flex-1">
                Schedule automatic delivery or share instantly. PDF, interactive dashboard, or email—your choice.
              </p>
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 p-2 bg-neutral-100 rounded-lg">
                  <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">Email delivery</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-neutral-100 rounded-lg">
                  <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-600">PDF export</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] mb-4 text-black">
            Beautiful reports.
            <br />
            Powerful insights.
          </h2>
          <p className="text-lg text-neutral-600">
            Every report is designed to be clear, actionable, and impressive. 
            Your clients will love them.
          </p>
        </div>

        {/* Mock Dashboard */}
        <div className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
              <div>
                <div className="h-8 w-32 bg-neutral-900 rounded mb-2" />
                <div className="h-4 w-48 bg-neutral-200 rounded" />
              </div>
              <div className="h-10 w-10 rounded-full bg-neutral-200" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Organic Traffic', value: '45.2K', change: '+12.3%' },
                { label: 'Keywords', value: '1,247', change: '+8.7%' },
                { label: 'Backlinks', value: '8.9K', change: '+5.2%' },
                { label: 'DA Score', value: '68', change: '+3' },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-xs text-neutral-500 mb-1">{stat.label}</div>
                  <div className="text-2xl font-semibold text-black mb-1">{stat.value}</div>
                  <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="h-64 bg-neutral-50 rounded-xl border border-neutral-200 flex items-end justify-around p-6">
              {[40, 65, 55, 80, 70, 90, 85].map((height, i) => (
                <div key={i} className="flex-1 mx-1">
                  <div
                    className="bg-black rounded-t transition-all hover:bg-neutral-700"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
