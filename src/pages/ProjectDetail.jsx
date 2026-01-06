import { useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import useLenis from '../hooks/useLenis'
import useGsapAnimations from '../hooks/useGsapAnimations'
import MediaRenderer from '../components/MediaRenderer'

// Project detail page with animations and curtain footer
function ProjectDetail() {
    const { slug } = useParams()
    const containerRef = useRef(null)

    // Scroll to top on route change (fixes mid-page loading issue)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    // Initialize Lenis smooth scroll
    useLenis()

    // Initialize GSAP animations after render
    useGsapAnimations(containerRef)

    // Find the project
    const project = projects.find(p => p.slug === slug)
    const currentIndex = projects.findIndex(p => p.slug === slug)

    // Handle project not found
    if (!project || currentIndex === -1) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-cream">
                <div className="text-center">
                    <h1 className="text-display-md text-editorial text-charcoal mb-4">Project not found</h1>
                    <Link to="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    // Get prev/next projects (only after we confirm project exists)
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]
    const nextProject = projects[(currentIndex + 1) % projects.length]

    return (
        <>
            {/* Main Content Wrapper - scrolls over curtain footer */}
            <div ref={containerRef} className="content-wrapper">
                {/* Hero Media - Full Bleed (supports image or video) */}
                <section className="pt-20">
                    <div className="case-image aspect-[16/9] md:aspect-[21/9] w-full">
                        <MediaRenderer
                            media={project.heroMedia}
                            className="parallax-inner w-full h-full"
                            fallbackGradient={project.gradient}
                            placeholderText=""
                        />
                    </div>
                </section>

                {/* Project Header with Sticky Sidebar */}
                <section className="py-16 md:py-24">
                    <div className="section-padding">
                        <div className="container-wide">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Title Column */}
                                <div className="lg:col-span-7 reveal-on-scroll">
                                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
                                        {project.title}
                                    </h1>
                                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-stone italic">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Sticky Metadata Sidebar */}
                                <div className="lg:col-span-5">
                                    <div className="lg:sticky lg:top-8">
                                        <div className="flex flex-col md:flex-row lg:flex-col gap-8 md:gap-16 lg:gap-6">
                                            {/* Date */}
                                            <div className="reveal-on-scroll">
                                                <span className="font-body text-sm text-stone block mb-1">Date</span>
                                                <span className="font-body text-base text-charcoal">{project.duration} • {project.year}</span>
                                            </div>

                                            {/* Client */}
                                            <div className="reveal-on-scroll">
                                                <span className="font-body text-sm text-stone block mb-1">Client</span>
                                                <span className="font-body text-base text-charcoal">{project.client}</span>
                                            </div>

                                            {/* Services */}
                                            <div className="reveal-on-scroll">
                                                <span className="font-body text-sm text-stone block mb-1">Services</span>
                                                <div className="space-y-1">
                                                    {project.services.map((service) => (
                                                        <span key={service} className="font-body text-base text-charcoal block">
                                                            {service}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="section-padding">
                    <div className="container-wide">
                        <hr className="border-stone/20" />
                    </div>
                </div>

                {/* The Brief Section */}
                <section className="py-16 md:py-24">
                    <div className="section-padding">
                        <div className="container-wide">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Section Title */}
                                <div className="lg:col-span-4">
                                    <h2 className="font-display text-xl md:text-2xl italic text-charcoal reveal-on-scroll">
                                        The Brief
                                    </h2>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-8 space-y-12">
                                    {/* Overview */}
                                    <div className="reveal-on-scroll">
                                        <h3 className="font-display font-semibold text-lg text-charcoal mb-4">Overview</h3>
                                        <p className="font-body text-lg text-stone leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Challenge */}
                                    <div className="reveal-on-scroll">
                                        <h3 className="font-display font-semibold text-lg text-charcoal mb-4">Challenge</h3>
                                        <p className="font-body text-base text-stone leading-relaxed">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="reveal-on-scroll">
                                        <h3 className="font-display font-semibold text-lg text-charcoal mb-4">Solution</h3>
                                        <p className="font-body text-base text-stone leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="py-16 md:py-24">
                    <div className="section-padding">
                        <div className="container-wide">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                <div className="lg:col-span-4">
                                    <h2 className="font-display text-xl md:text-2xl italic text-charcoal reveal-on-scroll">
                                        Inspired by the Essence
                                    </h2>
                                </div>

                                <div className="lg:col-span-8 reveal-on-scroll">
                                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal leading-snug">
                                        Before we began designing, we set out to understand what makes {project.client} distinctive.
                                        Our team immersed in the project, studying the context, and uncovering the story that needed to be told.
                                    </p>
                                    <p className="font-body text-lg text-stone leading-relaxed mt-8">
                                        By understanding the core values and vision, we were able to translate that essence
                                        into a digital expression that feels authentic and purposeful.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Media Gallery */}
                <section className="py-16 md:py-24">
                    <div className="section-padding">
                        <div className="container-wide">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-on-scroll stagger-children">
                                {project.galleryMedia && project.galleryMedia.length >= 2 ? (
                                    // Render first two gallery images
                                    project.galleryMedia.slice(0, 2).map((mediaItem, idx) => (
                                        <div key={idx} className="case-image aspect-[4/3]">
                                            <MediaRenderer
                                                media={mediaItem}
                                                className="parallax-inner w-full h-full"
                                                fallbackGradient={project.gradient}
                                                placeholderText=""
                                            />
                                        </div>
                                    ))
                                ) : (
                                    // Gradient fallbacks when no gallery images
                                    <>
                                        <div className="case-image aspect-[4/3]">
                                            <div className={`parallax-inner bg-gradient-to-br ${project.gradient} opacity-80`} />
                                        </div>
                                        <div className="case-image aspect-[4/3]">
                                            <div className={`parallax-inner bg-gradient-to-br ${project.gradient} opacity-60`} />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detail Section */}
                <section className="py-16 md:py-24">
                    <div className="section-padding">
                        <div className="container-wide">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                <div className="lg:col-span-4">
                                    <h2 className="font-display text-xl md:text-2xl italic text-charcoal reveal-on-scroll">
                                        The Devil's in the Detail
                                    </h2>
                                </div>
                                <div className="lg:col-span-8 reveal-on-scroll">
                                    <p className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal leading-snug">
                                        To capture the authenticity of {project.client}, we rooted the visual design
                                        in the project's core identity. Every element was crafted with intention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full Width Media */}
                <section className="py-8">
                    <div className="section-padding">
                        <div className="container-wide">
                            <div className="case-image aspect-[16/9] reveal-on-scroll">
                                {project.galleryMedia && project.galleryMedia.length >= 3 ? (
                                    <MediaRenderer
                                        media={project.galleryMedia[2]}
                                        className="parallax-inner w-full h-full"
                                        fallbackGradient={project.gradient}
                                        placeholderText=""
                                    />
                                ) : (
                                    <div className={`parallax-inner bg-gradient-to-br ${project.gradient}`} />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Navigation Footer - Now in normal document flow */}
                <section className="min-h-[60vh] md:min-h-[70vh] bg-charcoal flex items-center">
                    <div className="section-padding w-full">
                        <div className="container-wide">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                                <Link
                                    to={`/project/${prevProject.slug}`}
                                    className="group flex-1 text-left"
                                >
                                    <span className="font-body text-xs uppercase tracking-widest text-stone/60 block mb-2">Previous</span>
                                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-cream/70 group-hover:text-cream transition-colors">
                                        {prevProject.title}
                                    </h3>
                                </Link>

                                <div className="w-px h-16 bg-stone/20 hidden md:block"></div>

                                <Link
                                    to={`/project/${nextProject.slug}`}
                                    className="group flex-1 text-right"
                                >
                                    <span className="font-body text-xs uppercase tracking-widest text-stone/60 block mb-2">Next</span>
                                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-cream/70 group-hover:text-cream transition-colors">
                                        {nextProject.title}
                                    </h3>
                                </Link>
                            </div>

                            <div className="text-center mt-16">
                                <Link
                                    to="/#works"
                                    className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-stone hover:text-cream transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                    All Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProjectDetail
