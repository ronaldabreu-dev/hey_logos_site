import Link from 'next/link';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
          <Link
            href="/#waitlist"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:bg-white/20 transition-all"
          >
            Join waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
