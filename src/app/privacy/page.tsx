export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Privacy Policy
            </h1>
            <div className="mt-8 space-y-8 text-gray-600">
                <section>
                    <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
                    <p className="mt-2">
                        Currently, we only collect email addresses and optional usage notes provided voluntarily through our waitlist form.
                        We do not use cookies or third-party tracking at this stage.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
                    <p className="mt-2">
                        The email address you provide is used solely to contact you regarding the Hey Logos product, such as notifying you when the beta is available or sending product updates.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900">How We Store Your Information</h2>
                    <p className="mt-2">
                        Your data is stored securely. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
                    <p className="mt-2">
                        If you have any questions or wish to delete your data, please contact us at{' '}
                        <a href="mailto:contact@heylogos.ai" className="text-blue-600 hover:text-blue-500">
                            contact@heylogos.ai
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
