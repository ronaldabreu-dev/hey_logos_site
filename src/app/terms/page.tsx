export default function TermsPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Terms of Use
            </h1>
            <div className="mt-8 space-y-8 text-gray-400">
                <section>
                    <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
                    <p className="mt-2">
                        By accessing Logos (the &quot;Service&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">Beta Service</h2>
                    <p className="mt-2">
                        The Service is currently in a private beta phase and is provided &quot;as is&quot; and &quot;as available&quot;.
                        We make no warranties regarding the uptime, availability, or accuracy of the Service. We reserve the right to modify or discontinue the Service at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
                    <p className="mt-2">
                        To the fullest extent permitted by law, Logos shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                        resulting from your access to or use of (or inability to access or use) the Service.
                        You are responsible for any code or content generated with the assistance of the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">Contact</h2>
                    <p className="mt-2">
                        For questions about these Terms, please contact{' '}
                        <a href="mailto:contact@heylogos.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                            contact@heylogos.ai
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
