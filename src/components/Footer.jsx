function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        navigation: [
            { name: 'Home', href: '#' },
            { name: 'Works', href: '#works' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' },
        ],
        services: [
            { name: 'Branding', href: '#' },
            { name: 'Web Design', href: '#' },
            { name: 'Development', href: '#' },
            { name: 'Strategy', href: '#' },
        ],
    }

    return (
        <footer className="bg-charcoal text-cream">
            {/* Main Footer */}
            <div className="section-padding py-16 md:py-24">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <a href="#" className="inline-flex items-center gap-2 mb-6">
                                <span className="font-display font-black text-2xl tracking-tight text-cream">
                                    [D]
                                </span>
                                <span className="font-display font-bold text-lg uppercase tracking-widest text-cream">
                                    Debangshu
                                </span>
                            </a>
                            <p className="font-body text-body text-stone max-w-md mb-8">
                                Creating meaningful digital experiences through design,
                                development, and strategic thinking. Based in India,
                                working with clients worldwide.
                            </p>
                            <a
                                href="mailto:hello@debangshu.works"
                                className="font-body text-body-lg text-cream link-underline"
                            >
                                hello@debangshu.works
                            </a>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="font-display font-semibold text-caption uppercase tracking-widest text-stone mb-6">
                                Navigation
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="font-body text-body text-cream/80 hover:text-cream transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-display font-semibold text-caption uppercase tracking-widest text-stone mb-6">
                                Services
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="font-body text-body text-cream/80 hover:text-cream transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-stone/20">
                <div className="section-padding py-6">
                    <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-body text-caption text-stone">
                            © {currentYear} Debangshu's Works. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="font-body text-caption text-stone hover:text-cream transition-colors uppercase tracking-wider"
                                aria-label="Twitter"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="font-body text-caption text-stone hover:text-cream transition-colors uppercase tracking-wider"
                                aria-label="LinkedIn"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="font-body text-caption text-stone hover:text-cream transition-colors uppercase tracking-wider"
                                aria-label="Dribbble"
                            >
                                Dribbble
                            </a>
                            <a
                                href="#"
                                className="font-body text-caption text-stone hover:text-cream transition-colors uppercase tracking-wider"
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-cream text-charcoal rounded-full flex items-center justify-center shadow-lg hover:bg-highlight transition-colors z-40"
                aria-label="Back to top"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    )
}

export default Footer
