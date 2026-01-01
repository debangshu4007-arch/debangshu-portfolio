function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-20 md:pb-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-0 top-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute left-0 bottom-1/4 w-48 h-48 md:w-72 md:h-72 bg-warm-gray/30 rounded-full blur-3xl" />

            {/* Main Content */}
            <div className="section-padding relative z-10 w-full">
                <div className="container-wide">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
                        {/* Left Column - Text Content */}
                        <div className="lg:col-span-6">
                            {/* Tagline */}
                            <div className="mb-6 opacity-0 animate-fade-in-up stagger-1" style={{ animationFillMode: 'forwards' }}>
                                <span className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-stone">
                                    Creative Portfolio
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h1 className="text-display-xl text-editorial text-charcoal opacity-0 animate-fade-in-up stagger-2" style={{ animationFillMode: 'forwards' }}>
                                Crafting digital
                                <br />
                                <span className="text-stone">experiences</span> that
                                <br />
                                leave a mark.
                            </h1>

                            {/* Subtext */}
                            <p className="mt-8 font-body text-body-lg text-stone max-w-md opacity-0 animate-fade-in-up stagger-3" style={{ animationFillMode: 'forwards' }}>
                                I work with brands that want to stand out.
                                Through design, development, and strategic thinking —
                                creating work that connects and inspires.
                            </p>

                            {/* Services Tags */}
                            <div className="mt-8 flex flex-wrap gap-3 opacity-0 animate-fade-in-up stagger-4" style={{ animationFillMode: 'forwards' }}>
                                {['Branding', 'Web Design', 'Development', 'Strategy'].map((service) => (
                                    <span
                                        key={service}
                                        className="px-5 py-2.5 bg-off-white border border-accent/50 rounded-full font-body text-caption uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 cursor-default"
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>

                            {/* Scroll Indicator */}
                            <div className="mt-10 flex items-center gap-4 opacity-0 animate-fade-in stagger-5" style={{ animationFillMode: 'forwards' }}>
                                <span className="font-body text-caption uppercase tracking-widest text-stone">
                                    Scroll to explore
                                </span>
                                <div className="w-10 h-10 rounded-full border border-stone flex items-center justify-center animate-bounce">
                                    <svg
                                        className="w-4 h-4 text-stone"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Image Placeholder */}
                        <div className="lg:col-span-5 lg:col-start-8 opacity-0 animate-fade-in-up stagger-3" style={{ animationFillMode: 'forwards' }}>
                            <div className="relative">
                                {/* Image Placeholder */}
                                <div className="relative aspect-[4/5] max-w-xs mx-auto lg:max-w-sm bg-warm-gray/50 rounded-2xl overflow-hidden border border-accent/30 shadow-lg">
                                    {/* Replace src with your image */}
                                    <img
                                        src="/profile-placeholder.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Placeholder content when no image */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-warm-gray to-accent/30">
                                        <div className="w-16 h-16 rounded-full bg-cream/80 flex items-center justify-center mb-4">
                                            <svg className="w-8 h-8 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <span className="font-body text-sm text-charcoal/60 text-center px-4">
                                            Add your image to<br />
                                            <code className="text-xs bg-cream/50 px-2 py-1 rounded mt-1 inline-block">public/profile-placeholder.jpg</code>
                                        </span>
                                    </div>
                                </div>

                                {/* Decorative elements around image */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-highlight/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-accent/30 rounded-full blur-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone/30 to-transparent" />
        </section>
    )
}

export default Hero
