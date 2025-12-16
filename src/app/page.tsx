import { WaitlistForm } from '@/components/WaitlistForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Talk to your editor like you talk to ChatGPT.
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Hey Logos is a voice-first assistant that lets you control your AI coding panel and editor with your voice, so you can keep shipping code even when your hands are busy.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2 text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Dictate prompts directly into your AI coding assistant
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Designed for parents, devs with RSI, and AI-heavy workflows
            </span>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#waitlist"
              className="rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-xl hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Join the waitlist
            </Link>
            <Link
              href="#how-it-works"
              className="px-8 py-3 text-base font-semibold text-gray-900 hover:text-gray-700"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="features" className="w-full bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
            Who is Hey Logos for?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">Developers with babies</h3>
              <p className="mt-4 text-gray-600">
                Keep coding while holding a sleeping baby. Use your voice to draft prompts, explain code, and navigate your editor without needing both hands on the keyboard.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">RSI & Accessibility</h3>
              <p className="mt-4 text-gray-600">
                Give your hands a break. Dictating prompts reduces typing strain significantly, allowing you to maintain productivity while recovering or managing pain.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">AI-native workflows</h3>
              <p className="mt-4 text-gray-600">
                Talking is faster than typing complex context. Send detailed instructions to Copilot or Cursor agents instantly with voice commands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900">
            How it works
          </h2>
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-12 left-0 hidden w-full -translate-y-1/2 border-t-2 border-dashed border-gray-200 lg:block" aria-hidden="true"></div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 shadow-sm ring-4 ring-white">
                  1
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Press hotkey or say &quot;Hey Logos&quot;</h3>
                <p className="mt-2 text-gray-600">
                  The desktop app wakes up and starts listening, running unobtrusively alongside your editor.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 shadow-sm ring-4 ring-white">
                  2
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Speak naturally</h3>
                <p className="mt-2 text-gray-600">
                  <span className="italic">&quot;Explain this file and suggest a safer refactor&quot;</span> or <span className="italic">&quot;Generate tests for this function&quot;</span>.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600 shadow-sm ring-4 ring-white">
                  3
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Your AI assistant responds</h3>
                <p className="mt-2 text-gray-600">
                  Logos transcribes your voice directly into your editor&apos;s AI panel, triggering the response instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-xl bg-gray-50 p-6 text-center">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">Note:</span> Hey Logos is a desktop application that integrates with editors like VS Code and Cursor.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap / Status */}
      <section className="w-full border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Private Beta
          </span>
          <p className="mt-4 text-gray-600">
            We&apos;re currently testing with a small group of users on macOS. Join the waitlist to be notified as we open up more spots and add support for more operating systems.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Join the waitlist
          </h2>
          <p className="mt-4 mb-8 text-gray-600">
            We&apos;ll email you when Hey Logos is ready for you to try.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}
