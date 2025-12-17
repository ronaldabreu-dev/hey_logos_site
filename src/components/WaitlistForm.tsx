'use client';

import { useState } from 'react';

export function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [usage, setUsage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, usage }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
                setEmail('');
                setUsage('');
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="rounded-xl bg-green-500/10 p-6 text-center shadow-sm ring-1 ring-inset ring-green-500/20">
                <h3 className="text-lg font-semibold text-green-400">You&apos;re on the list!</h3>
                <p className="mt-2 text-green-200/80">
                    Thanks for joining. We&apos;ll be in touch as soon as Logos is ready for you.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-medium text-green-400 hover:text-green-300 underline"
                >
                    Add another email
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 rounded-xl bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white">Join the waitlist</h3>
            <p className="text-sm text-gray-400">
                We&apos;ll email you when Logos is ready for more testers.
            </p>

            <div>
                <label htmlFor="email" className="sr-only">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border-0 bg-white/5 px-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
            </div>

            <div>
                <label htmlFor="usage" className="sr-only">
                    How would you use Logos? (Optional)
                </label>
                <textarea
                    id="usage"
                    rows={2}
                    placeholder="How would you use Logos?"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="w-full rounded-md border-0 bg-white/5 px-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
            </div>

            {status === 'error' && (
                <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:bg-blue-600/50 disabled:text-blue-200 transition-all"
            >
                {status === 'loading' ? 'Joining...' : 'Join waitlist'}
            </button>
        </form>
    );
}
