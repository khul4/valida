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
        setMessage({ type: 'success', text: "You're on the list." });
        setEmail('');
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Failed to submit. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-between bg-[#FAFAF8] h-screen overflow-hidden">

      {/* top bar */}
      <div className="px-6 md:px-12 pt-10 flex items-center justify-between">
        <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-neutral-400">
          Arek Studio
        </span>
        <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-neutral-400">
          Est. 2025
        </span>
      </div>

      {/* center */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-[1160px] mx-auto w-full">

          <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-neutral-400 mb-6">
            Creative Studio
          </p>

          <h1
            className="font-semibold leading-[1.08] tracking-[-0.03em] text-neutral-900"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 6rem)' }}
          >
            We craft brands<br />
            that people{' '}
            <em className="italic font-normal text-[#2D6A4F]">remember.</em>
          </h1>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-14">
            <p className="text-sm leading-relaxed text-neutral-500 max-w-[340px]">
              A boutique creative studio doing brand identity, art direction, and digital design — built for founders and studios who care about the details.
            </p>

            <div className="flex flex-col gap-3">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-3.5 py-2.5 border border-neutral-200 rounded-lg bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#2D6A4F] w-52 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1B4332] text-white px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-[#2D6A4F] active:scale-[0.98] transition-all disabled:opacity-70 cursor-pointer"
                >
                  {loading ? 'Sending…' : 'Get in touch'}
                </button>
              </form>
              {message && (
                <p className={`text-xs ${message.type === 'success' ? 'text-[#2D6A4F]' : 'text-red-600'}`}>
                  {message.text}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="px-6 md:px-12 pb-8 flex items-center justify-between border-t border-neutral-200 pt-5">
        <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-neutral-400">
          Brand Identity · Art Direction · Digital Design
        </span>
        <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-neutral-400 hidden sm:block">
          Available for projects
        </span>
      </div>
    </section>
  );
}
