function About() {
    return (
        <section id="about" className="py-24 md:py-32 lg:py-40 bg-charcoal text-cream">
            <div className="section-padding">
                <div className="container-wide">
                    {/* Editorial Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                        {/* Left Column - About Info */}
                        <div className="lg:col-span-4 lg:col-start-1">
                            <span className="font-body text-small uppercase tracking-[0.3em] text-stone block mb-8">
                                About
                            </span>
                            <p className="font-body text-body-lg text-stone/80 mb-8">
                                Based in India, available worldwide.
                                Collaborating with brands and agencies
                                to create meaningful digital experiences.
                            </p>

                            {/* Services List */}
                            <div className="space-y-4 mt-12">
                                {['Brand Strategy', 'Visual Identity', 'Web Design', 'Development'].map((service) => (
                                    <div key={service} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-highlight rounded-full" />
                                        <span className="font-body text-body text-cream/70">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Large Statement */}
                        <div className="lg:col-span-7 lg:col-start-6">
                            <h2 className="text-display-lg text-editorial text-cream mb-12">
                                I believe in the power of design to transform ideas into
                                <span className="text-highlight"> unforgettable experiences</span>.
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div>
                                    <h3 className="font-display font-semibold text-heading-md text-cream mb-4">
                                        The Approach
                                    </h3>
                                    <p className="font-body text-body text-stone/80">
                                        Every project starts with understanding — listening to your vision,
                                        studying your audience, and finding the intersection where creativity
                                        meets strategy. It's not just about making things look good;
                                        it's about making them work.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-display font-semibold text-heading-md text-cream mb-4">
                                        The Process
                                    </h3>
                                    <p className="font-body text-body text-stone/80">
                                        From initial concept to final delivery, I maintain close collaboration
                                        throughout. Each step is intentional — research, design, development,
                                        and refinement — ensuring the end result exceeds expectations
                                        and achieves real results.
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-stone/20">
                                <div>
                                    <span className="font-display font-black text-display-md text-highlight">
                                        5+
                                    </span>
                                    <p className="font-body text-caption text-stone mt-2">
                                        Years of<br />Experience
                                    </p>
                                </div>
                                <div>
                                    <span className="font-display font-black text-display-md text-highlight">
                                        50+
                                    </span>
                                    <p className="font-body text-caption text-stone mt-2">
                                        Projects<br />Delivered
                                    </p>
                                </div>
                                <div>
                                    <span className="font-display font-black text-display-md text-highlight">
                                        30+
                                    </span>
                                    <p className="font-body text-caption text-stone mt-2">
                                        Happy<br />Clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
