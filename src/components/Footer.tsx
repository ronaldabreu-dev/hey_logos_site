import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} Hey Logos. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="mailto:contact@heylogos.ai" className="hover:text-gray-900">
                            Contact
                        </a>
                        <Link href="/privacy" className="hover:text-gray-900">
                            Privacy
                        </Link>
                        <Link href="/terms" className="hover:text-gray-900">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
