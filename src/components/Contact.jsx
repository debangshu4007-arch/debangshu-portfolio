function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="section-padding relative z-10">
                <div className="container-wide">
                    {/* Main CTA */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="font-body text-small uppercase tracking-[0.3em] text-stone block mb-8">
                            Let's Connect
                        </span>
                        <h2 className="text-display-lg text-editorial text-charcoal mb-8">
                            Have a project in mind?
                            <br />
                            <span className="text-stone">Let's make it happen.</span>
                        </h2>
                        <p className="font-body text-body-lg text-stone max-w-2xl mx-auto mb-12">
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your vision.
                            Every great collaboration starts with a simple conversation.
                        </p>

                        <a
                            href="mailto:hello@debangshu.works"
                            className="btn-primary text-lg"
                        >
                            Start a conversation
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Email Card */}
                        <div className="card-base hover-lift rounded-lg p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                                <svg className="w-7 h-7 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-heading-md text-charcoal mb-2">
                                Email
                            </h3>
                            <p className="font-body text-caption text-stone mb-4">
                                For project inquiries
                            </p>
                            <a
                                href="mailto:hello@debangshu.works"
                                className="font-body text-body text-charcoal link-underline"
                            >
                                hello@debangshu.works
                            </a>
                        </div>

                        {/* Location Card */}
                        <div className="card-base hover-lift rounded-lg p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-warm-gray flex items-center justify-center">
                                <svg className="w-7 h-7 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-heading-md text-charcoal mb-2">
                                Location
                            </h3>
                            <p className="font-body text-caption text-stone mb-4">
                                Based in
                            </p>
                            <span className="font-body text-body text-charcoal">
                                India • Remote Friendly
                            </span>
                        </div>

                        {/* Social Card */}
                        <div className="card-base hover-lift rounded-lg p-8 text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-highlight/30 flex items-center justify-center">
                                <svg className="w-7 h-7 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <h3 className="font-display font-semibold text-heading-md text-charcoal mb-2">
                                Social
                            </h3>
                            <p className="font-body text-caption text-stone mb-4">
                                Follow along
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <a href="#" className="text-charcoal hover:text-stone transition-colors" aria-label="Twitter">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-charcoal hover:text-stone transition-colors" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-charcoal hover:text-stone transition-colors" aria-label="Dribbble">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.28 10.28 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 0010.296 1.35zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.094 10.094 0 0012 1.76c-.83 0-1.633.1-2.4.292zm10.14 3.39c-.22.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.428 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-charcoal hover:text-stone transition-colors" aria-label="Instagram">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
