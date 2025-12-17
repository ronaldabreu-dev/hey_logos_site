export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Privacy Policy
            </h1>
            <div className="mt-8 space-y-8 text-gray-400">
                <section>
                    <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
                    <p className="mt-2">
                        Currently, we only collect email addresses and optional usage notes provided voluntarily through our waitlist form.
                        We do not use cookies or third-party tracking at this stage.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
                    <p className="mt-2">
                        The email address you provide is used solely to contact you regarding the Hey Logos product, such as notifying you when the beta is available or sending product updates.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">How We Store Your Information</h2>
                    <p className="mt-2">
                        Your data is stored securely. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white">Contact</h2>
                    <p className="mt-2">
                        If you have any questions or wish to delete your data, please contact us at{' '}
                        <a href="mailto:contact@heylogos.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                            contact@heylogos.ai
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
