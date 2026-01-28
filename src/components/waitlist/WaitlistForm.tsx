'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface WaitlistFormProps {
  theme?: 'light' | 'dark';
}

export default function WaitlistForm({ theme = 'light' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const formBody = `email=${encodeURIComponent(email)}&userGroup=${encodeURIComponent('Website waitlist')}`;

      const response = await fetch('https://app.loops.so/api/newsletter-form/cm0nme3iy00lrao1h8fyxkxz0', {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setMessage({ type: 'success', text: 'You’re on the waitlist! We’ll be in touch soon.' });
        setEmail('');
      } else {
        setMessage({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to submit. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === 'dark';

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`flex-1 px-4 py-3 h-12 rounded-xl focus:outline-none focus:ring-2 transition-all ${
            isDark
              ? 'bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:border-white focus:ring-white/20'
              : 'bg-white border border-gray-300 focus:border-black focus:ring-black/20'
          }`}
        />
        <Button
          type="submit"
          disabled={loading}
          className={`px-8 h-12 rounded-xl shadow-lg transition-all hover:translate-y-[-2px] disabled:opacity-70 ${
            isDark
              ? 'bg-white hover:bg-neutral-100 text-black shadow-white/10 hover:shadow-white/20'
              : 'bg-black hover:bg-gray-800 text-white shadow-black/20 hover:shadow-black/30'
          }`}
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </div>
      {message && (
        <div
          className={`text-sm text-center py-2 px-3 rounded-lg transition-all ${
            message.type === 'success'
              ? isDark
                ? 'bg-green-900/50 text-green-300 border border-green-700'
                : 'bg-green-50 text-green-700 border border-green-200'
              : isDark
                ? 'bg-red-900/50 text-red-300 border border-red-700'
                : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
