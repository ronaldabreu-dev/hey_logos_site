import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-zinc-950">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} Logos. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="mailto:contact@heylogos.ai" className="hover:text-white transition-colors">
                            Contact
                        </a>
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
