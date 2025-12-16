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
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="rounded-lg bg-green-50 p-6 text-center shadow-sm border border-green-100">
                <h3 className="text-lg font-semibold text-green-800">You&apos;re on the list!</h3>
                <p className="mt-2 text-green-700">
                    Thanks for joining. We&apos;ll be in touch as soon as Hey Logos is ready for you.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm font-medium text-green-800 hover:text-green-900 underline"
                >
                    Add another email
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Join the waitlist</h3>
            <p className="text-sm text-gray-500">
                We&apos;ll email you when Hey Logos is ready for more testers.
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
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
            </div>

            <div>
                <label htmlFor="usage" className="sr-only">
                    How would you use Hey Logos? (Optional)
                </label>
                <textarea
                    id="usage"
                    rows={2}
                    placeholder="How would you use Hey Logos? (e.g. parent, RSI, AI dev) [Optional]"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
            </div>

            {status === 'error' && (
                <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:bg-blue-300"
            >
                {status === 'loading' ? 'Joining...' : 'Join waitlist'}
            </button>
        </form>
    );
}
