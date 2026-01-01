import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectDetail() {
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)

    if (!project) {
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

    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pb-24">
                <div className="section-padding">
                    <div className="container-wide">
                        {/* Back Link */}
                        <Link
                            to="/#works"
                            className="inline-flex items-center gap-2 text-stone hover:text-charcoal transition-colors mb-12 group"
                        >
                            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <span className="font-body text-caption uppercase tracking-wider">Back to Projects</span>
                        </Link>

                        {/* Project Header */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                            <div className="lg:col-span-8">
                                <span className="inline-block px-4 py-2 bg-accent rounded-full font-body text-caption uppercase tracking-wider text-charcoal mb-6">
                                    {project.category}
                                </span>
                                <h1 className="text-display-lg text-editorial text-charcoal mb-6">
                                    {project.title}
                                </h1>
                                <p className="font-body text-body-lg text-stone max-w-2xl">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="lg:col-span-4">
                                <div className="space-y-6">
                                    <div>
                                        <span className="font-body text-caption uppercase tracking-wider text-stone block mb-2">Client</span>
                                        <span className="font-display font-semibold text-heading-md text-charcoal">{project.client}</span>
                                    </div>
                                    <div>
                                        <span className="font-body text-caption uppercase tracking-wider text-stone block mb-2">Duration</span>
                                        <span className="font-display font-semibold text-heading-md text-charcoal">{project.duration}</span>
                                    </div>
                                    <div>
                                        <span className="font-body text-caption uppercase tracking-wider text-stone block mb-2">Year</span>
                                        <span className="font-display font-semibold text-heading-md text-charcoal">{project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Image Hero */}
            <section className="pb-16 md:pb-24">
                <div className="section-padding">
                    <div className="container-wide">
                        <div className={`aspect-[16/9] rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden relative`}>
                            {/* Placeholder for main project image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-cream/30 flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="font-body text-sm text-charcoal/50">Project Image Placeholder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="pb-16 md:pb-24">
                <div className="section-padding">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Services */}
                            <div className="lg:col-span-4">
                                <h3 className="font-display font-semibold text-heading-md text-charcoal mb-6">Services</h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="px-4 py-2 bg-off-white border border-accent/50 rounded-full font-body text-caption text-charcoal"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="lg:col-span-8">
                                <div className="space-y-12">
                                    <div>
                                        <h3 className="font-display font-semibold text-heading-md text-charcoal mb-4">Overview</h3>
                                        <p className="font-body text-body-lg text-stone leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-display font-semibold text-heading-md text-charcoal mb-4">The Challenge</h3>
                                        <p className="font-body text-body text-stone leading-relaxed">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-display font-semibold text-heading-md text-charcoal mb-4">The Solution</h3>
                                        <p className="font-body text-body text-stone leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Images Grid */}
            <section className="pb-16 md:pb-24">
                <div className="section-padding">
                    <div className="container-wide">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${project.gradient} opacity-70 overflow-hidden relative`}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-body text-sm text-charcoal/40">Image {i + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project */}
            <section className="py-16 md:py-24 bg-charcoal">
                <div className="section-padding">
                    <div className="container-wide text-center">
                        <span className="font-body text-caption uppercase tracking-widest text-stone block mb-4">Next Project</span>
                        {(() => {
                            const currentIndex = projects.findIndex(p => p.slug === slug)
                            const nextProject = projects[(currentIndex + 1) % projects.length]
                            return (
                                <Link
                                    to={`/project/${nextProject.slug}`}
                                    className="group inline-block"
                                >
                                    <h2 className="text-display-md text-editorial text-cream group-hover:text-highlight transition-colors">
                                        {nextProject.title}
                                    </h2>
                                    <span className="inline-flex items-center gap-2 mt-4 font-body text-body text-stone group-hover:text-cream transition-colors">
                                        View Project
                                        <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            )
                        })()}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectDetail
