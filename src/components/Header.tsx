import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Hey Logos
        </Link>
        
        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>
          <Link
            href="/#waitlist"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Join waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
