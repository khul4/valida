'use client';

import { useState } from 'react';

export default function ProductHero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const formBody = `email=${encodeURIComponent(email)}&userGroup=${encodeURIComponent('Website waitlist')}`;
      const response = await fetch('https://app.loops.so/api/newsletter-form/cm0nme3iy00lrao1h8fyxkxz0', {
        method: 'POST',
        body: formBody,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setMessage({ type: 'success', text: "You're on the waitlist! We'll be in touch soon." });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to submit. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex items-center bg-[#FAFAF8] overflow-hidden"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="max-w-[1160px] w-full mx-auto px-6 md:px-10 py-12 md:py-0 flex flex-col md:grid md:gap-14 md:items-center"
        style={{ gridTemplateColumns: '48% 1fr' }}
      >

        {/* LEFT */}
        <div className="flex flex-col gap-4">

          <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-[#2D6A4F]">
            <span className="w-6 h-px bg-[#2D6A4F] flex-shrink-0 inline-block" />
            SEO Reporting for Freelancers &amp; Small Agencies
          </span>

          <h1 className="text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-900">
            The SEO report your<br />
            client will{' '}
            <em className="italic font-normal text-[#2D6A4F]">actually read.</em>
          </h1>

          <p className="text-base leading-relaxed text-neutral-500 max-w-[440px]">
            Most clients don&apos;t churn because your SEO failed. They churn because{' '}
            <strong className="text-neutral-800 font-medium">they couldn&apos;t see the value.</strong>{' '}
            Arek connects to GA4 and Search Console and turns the data into a plain-English narrative — ready to send.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-[400px]">
            <input
              type="email"
              placeholder="Work email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-3.5 py-2.5 border border-neutral-200 rounded-lg bg-white text-sm text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-[#2D6A4F] transition-all"
              style={{ boxShadow: 'none' }}
              onFocus={(e) => { e.target.style.boxShadow = '0 0 0 3px rgba(45,106,79,0.1)'; }}
              onBlur={(e) => { e.target.style.boxShadow = 'none'; }}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1B4332] text-white px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-[#2D6A4F] active:scale-[0.98] transition-all disabled:opacity-70 cursor-pointer"
            >
              {loading ? 'Joining…' : 'Join Waitlist'}
            </button>
          </form>

          {message && (
            <p className={`text-xs ${message.type === 'success' ? 'text-[#2D6A4F]' : 'text-red-600'}`}>
              {message.text}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-[0.72rem] text-neutral-400">
            {['Free early access', 'No credit card', 'GA4 & GSC ready'].map((item) => (
              <span key={item} className="flex items-center gap-1">
                <span className="text-[#2D6A4F] font-bold text-[0.65rem]">✓</span>
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-3.5 border-t border-neutral-200">
            <span className="text-[0.68rem] text-neutral-400 font-medium tracking-[0.04em] uppercase whitespace-nowrap">
              Connects with
            </span>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-md px-2.5 py-1.5 text-[0.72rem] text-neutral-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E37400] flex-shrink-0" />
                Google Analytics 4
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-md px-2.5 py-1.5 text-[0.72rem] text-neutral-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] flex-shrink-0" />
                Search Console
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – Report window mockup */}
        <div className="mt-10 md:mt-0 flex items-center">
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden w-full"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.07), 0 24px 64px rgba(0,0,0,0.05)' }}
          >
            {/* title bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-neutral-100 border-b border-neutral-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[0.7rem] text-neutral-400 font-medium">Weston Dental · February 2026</span>
              <div className="w-11" />
            </div>

            {/* report content */}
            <div className="p-3.5 flex flex-col gap-2.5">

              {/* header row */}
              <div className="flex items-center justify-between pb-2.5 border-b border-neutral-100">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Weston Dental Clinic</div>
                  <div className="text-[0.65rem] text-neutral-400 mt-0.5">Monthly SEO Report · February 2026</div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#EAF2ED] text-[#1B4332] text-[0.62rem] font-semibold px-2 py-1 rounded">
                  <span className="w-1.5 h-1.5 bg-[#2D6A4F] rounded-full" />
                  Ready to send
                </div>
              </div>

              {/* narrative */}
              <div className="bg-[#FAFAF8] rounded-lg p-3 border-l-[3px] border-[#2D6A4F]">
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.09em] text-neutral-400 mb-1.5">
                  📋 What happened this month
                </div>
                <p className="text-[0.775rem] leading-relaxed text-neutral-500">
                  February was a{' '}
                  <strong className="text-neutral-800 font-semibold">positive month for visibility.</strong>{' '}
                  Your pages appeared in more Google searches than ever — but fewer people clicked through.
                  This is{' '}
                  <strong className="text-neutral-800 font-semibold">a title tag issue, not an SEO problem.</strong>{' '}
                  Rankings are strong; the headlines just aren&apos;t winning the click yet.
                </p>
              </div>

              {/* insight */}
              <div className="bg-[#FFFBF0] border border-[#F0E6C0] rounded-lg p-3">
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.09em] text-[#92721A] mb-1.5">
                  💡 What this means for your business
                </div>
                <p className="text-[0.775rem] text-[#5C4A10] leading-relaxed">
                  Google is showing your clinic to{' '}
                  <strong className="text-[#3D3000] font-semibold">thousands of potential patients</strong>{' '}
                  — you&apos;re just not winning the click over competitors yet. Better titles alone could bring{' '}
                  <strong className="text-[#3D3000] font-semibold">200+ extra visitors</strong>{' '}
                  monthly, no new content needed.
                </p>
              </div>

              {/* metrics – flex to avoid global grid override */}
              <div className="flex gap-2">
                {[
                  { val: '12.4k', lbl: 'Impressions', delta: '↑ 18% vs last month', color: 'text-[#2D6A4F]' },
                  { val: '398', lbl: 'Clicks', delta: '↓ 4% vs last month', color: 'text-red-600' },
                  { val: '3.2%', lbl: 'CTR', delta: '⚠ Below target', color: 'text-amber-600' },
                ].map(({ val, lbl, delta, color }) => (
                  <div key={lbl} className="flex-1 bg-[#FAFAF8] border border-neutral-200 rounded-lg p-2.5">
                    <div className="text-base font-semibold text-neutral-900 leading-none mb-1">{val}</div>
                    <div className="text-[0.6rem] text-neutral-400 mb-1">{lbl}</div>
                    <div className={`text-[0.6rem] font-semibold ${color}`}>{delta}</div>
                  </div>
                ))}
              </div>

              {/* action */}
              <div className="bg-[#EAF2ED] rounded-lg p-3">
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.09em] text-[#1B4332] mb-1.5">
                  → Focus for March
                </div>
                <p className="text-[0.775rem] text-[#1B4332] leading-relaxed">
                  Refresh meta titles on your 3 highest-impression pages. No new content needed — this is the single highest-leverage action this month.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
