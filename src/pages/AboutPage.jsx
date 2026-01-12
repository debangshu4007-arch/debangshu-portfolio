import { BlurFadeIn } from '../components/BlurFadeIn'
import VideoPlayer from '../components/VideoPlayer'

function AboutPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section - Bio */}
            <section className="pt-32 pb-16 md:pb-24">
                <div className="section-padding">
                    <div className="container-wide">
                        {/* Intro Statement */}
                        <BlurFadeIn delay={0} blur={12} yOffset={20}>
                            <p className="font-body text-body-lg md:text-xl text-stone max-w-3xl leading-relaxed">
                                I don't follow templates or use pre-made formulas.
                                I work with you, step by step, to find the exact point
                                between who you are and what your audience needs.
                            </p>
                        </BlurFadeIn>

                        <BlurFadeIn delay={0.15} blur={10} yOffset={15}>
                            <p className="mt-6 font-display font-semibold text-heading-md text-charcoal">
                                It looks like empathy, but it's actually strategy.
                            </p>
                        </BlurFadeIn>
                    </div>
                </div>
            </section>

            {/* Who Am I Section */}
            <section className="py-16 md:py-24 bg-charcoal text-cream">
                <div className="section-padding">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            {/* Left - Title */}
                            <div className="lg:col-span-4">
                                <BlurFadeIn delay={0} blur={10} yOffset={15}>
                                    <span className="font-body text-small uppercase tracking-[0.3em] text-stone block mb-4">
                                        Who Am I
                                    </span>
                                    <h1 className="text-display-lg text-editorial text-cream">
                                        I'm Debangshu
                                    </h1>
                                </BlurFadeIn>
                            </div>

                            {/* Right - Bio Content */}
                            <div className="lg:col-span-7 lg:col-start-6">
                                <BlurFadeIn delay={0.1} blur={10} yOffset={20}>
                                    <p className="font-body text-body-lg text-stone/90 leading-relaxed mb-8">
                                        A designer and developer with a simple yet ambitious goal:
                                        to create brands and digital experiences that are understood,
                                        felt, and remembered. I believe in living identities —
                                        the ones that evolve without losing their essence.
                                    </p>
                                </BlurFadeIn>

                                <BlurFadeIn delay={0.2} blur={10} yOffset={20}>
                                    <p className="font-body text-body-lg text-stone/90 leading-relaxed mb-8">
                                        I don't compete on volume, but on connection. I prefer to work
                                        closely, calmly, with those who value honesty and things done well.
                                    </p>
                                </BlurFadeIn>

                                <BlurFadeIn delay={0.3} blur={10} yOffset={20}>
                                    <p className="font-body text-body-lg text-highlight leading-relaxed italic">
                                        Because brands that understand themselves, work.
                                        And when they work, they inspire.
                                    </p>
                                </BlurFadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Section - Image or Video */}
            <section className="py-16 md:py-24">
                <div className="section-padding">
                    <div className="container-wide">
                        <BlurFadeIn delay={0} blur={15} yOffset={30} duration={0.9}>
                            <div className="relative aspect-video max-w-5xl mx-auto bg-warm-gray/50 rounded-2xl overflow-hidden border border-accent/30 shadow-lg">
                                {/* Video with mute/unmute controls */}
                                <VideoPlayer
                                    src="/about-video.mp4"
                                    poster="/about-poster.jpg"
                                    className="w-full h-full"
                                    showControls={true}
                                    fallbackGradient="from-warm-gray to-accent/30"
                                />

                                {/* Fallback placeholder when no video - shown by VideoPlayer on error */}
                            </div>
                        </BlurFadeIn>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 md:py-24 bg-charcoal text-cream">
                <div className="section-padding">
                    <div className="container-wide">
                        <div className="max-w-4xl mx-auto">
                            <BlurFadeIn delay={0} blur={10} yOffset={15}>
                                <span className="font-body text-small uppercase tracking-[0.3em] text-stone block mb-6 text-center">
                                    My Vision
                                </span>
                                <h2 className="text-display-lg text-editorial text-cream text-center mb-16">
                                    How I <span className="text-highlight">Work</span>
                                </h2>
                            </BlurFadeIn>

                            <div className="space-y-12">
                                {[
                                    {
                                        icon: '◆',
                                        text: 'Every project starts with listening. I like to understand what\'s behind each brand, accompany whoever drives it, and build from there.'
                                    },
                                    {
                                        icon: '◆',
                                        text: 'I work organically, with processes that breathe and adapt to each unique situation.'
                                    },
                                    {
                                        icon: '◆',
                                        text: 'I don\'t design for you, I design with you. I believe in co-creation: in sharing decisions, in translating your vision into a clear strategy and coherent visual identity.'
                                    },
                                    {
                                        icon: '◆',
                                        text: 'My work doesn\'t end when a logo is delivered, but when the brand truly begins to connect with its audience.'
                                    }
                                ].map((item, index) => (
                                    <BlurFadeIn key={index} delay={0.1 + index * 0.1} blur={10} yOffset={20}>
                                        <div className="flex gap-6 items-start">
                                            <span className="text-highlight text-xl shrink-0 mt-1">{item.icon}</span>
                                            <p className="font-body text-body-lg text-stone/90 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </BlurFadeIn>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 md:py-24">
                <div className="section-padding">
                    <div className="container-wide">
                        <BlurFadeIn delay={0} blur={10} yOffset={20}>
                            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                                <div>
                                    <span className="font-display font-black text-display-md text-charcoal block">
                                        5+
                                    </span>
                                    <p className="font-body text-caption text-stone mt-2">
                                        Years of<br />Experience
                                    </p>
                                </div>
                                <div>
                                    <span className="font-display font-black text-display-md text-charcoal block">
                                        50+
                                    </span>
                                    <p className="font-body text-caption text-stone mt-2">
                                        Projects<br />Delivered
                                    </p>
                                </div>
                                <div>
                                    <span className="font-display font-black text-display-md text-charcoal block">
                                        30+
                                    </span>
                                    <p className="font-body text-caption text-stone mt-2">
                                        Happy<br />Clients
                                    </p>
                                </div>
                            </div>
                        </BlurFadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 border-t border-accent">
                <div className="section-padding">
                    <div className="container-wide text-center">
                        <BlurFadeIn delay={0} blur={12} yOffset={20}>
                            <h3 className="text-display-md text-editorial text-charcoal mb-6">
                                Ready to create something together?
                            </h3>
                            <a href="/#contact" className="btn-primary">
                                Let's Talk
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </BlurFadeIn>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
