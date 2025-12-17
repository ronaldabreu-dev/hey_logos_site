'use client';

import { WaitlistForm } from '@/components/WaitlistForm';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="w-full px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Talk to your editor like you talk to <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">ChatGPT</span>.
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-8 max-w-2xl text-xl text-gray-400">
            Logos is a voice-first assistant that lets you control your AI coding panel and editor with your voice, so you can keep shipping code even when your hands are busy.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="#waitlist"
              className="group relative rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Join the waitlist
              <div className="absolute inset-0 -z-10 rounded-full bg-blue-600 opacity-0 blur-lg transition group-hover:opacity-50" />
            </Link>
            <Link
              href="#how-it-works"
              className="group flex items-center gap-1 px-8 py-3 text-base font-semibold text-white hover:text-blue-400 transition-colors"
            >
              Learn more
              <span className="transition-transform group-hover:translate-y-1">↓</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Who it's for */}
      <section id="features" className="w-full py-24 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Who is Logos for?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              { title: "Developers with babies", text: "Keep coding while holding a sleeping baby. Use your voice to draft prompts, explain code, and navigate your editor without needing both hands on the keyboard." },
              { title: "RSI & Accessibility", text: "Give your hands a break. Dictating prompts reduces typing strain significantly, allowing you to maintain productivity while recovering or managing pain." },
              { title: "AI-native workflows", text: "Talking is faster than typing complex context. Send detailed instructions to Copilot or Cursor agents instantly with voice commands." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group rounded-2xl bg-white/5 p-8 shadow-2xl ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-white/20"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="w-full py-24 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How it works
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-12 left-0 hidden w-full -translate-y-1/2 border-t-2 border-dashed border-white/10 lg:block" aria-hidden="true"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-12 lg:grid-cols-3"
            >
              {[
                { step: 1, title: 'Press hotkey or say "Hey Logos"', text: "The desktop app wakes up and starts listening, running unobtrusively alongside your editor." },
                { step: 2, title: 'Speak naturally', text: '"Explain this file and suggest a safer refactor" or "Generate tests for this function".' },
                { step: 3, title: 'Your AI assistant responds', text: "Logos transcribes your voice directly into your editor's AI panel, triggering the response instantly." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-bold text-blue-500 shadow-lg ring-1 ring-white/10 ring-offset-4 ring-offset-zinc-950">
                    {item.step}
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-gray-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 rounded-xl bg-blue-500/5 p-6 text-center border border-blue-500/10"
          >
            <p className="text-sm text-blue-200">
              <span className="font-semibold text-blue-100">Note:</span> Logos is a desktop application that integrates with editors like VS Code and Cursor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap / Status */}
      <section className="w-full border-t border-white/5 bg-zinc-900/30 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
            Private Beta
          </span>
          <p className="mt-6 text-lg text-gray-300">
            We&apos;re currently testing with a small group of users on macOS. Join the waitlist to be notified as we open up more spots and add support for more operating systems.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="w-full py-24 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-blue-950/20" />
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Join the waitlist
            </h2>
            <p className="mt-4 mb-10 text-gray-400">
              We&apos;ll email you when Logos is ready for you to try.
            </p>
            <WaitlistForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
