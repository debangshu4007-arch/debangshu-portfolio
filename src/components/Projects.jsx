import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/projects'
import { BlurFadeIn } from './BlurFadeIn'

// Individual project card with blur-fade animation
function ProjectCard({ project, index, hoveredProject, setHoveredProject }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-80px 0px -80px 0px'
    })

    return (
        <motion.article
            ref={ref}
            className="group relative"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            initial={{
                opacity: 0,
                y: 25,
                filter: 'blur(12px)'
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
            } : {
                opacity: 0,
                y: 25,
                filter: 'blur(12px)'
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.1, // Stagger based on index
                ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ willChange: 'transform, opacity, filter' }}
        >
            <Link to={`/project/${project.slug}`} className="block">
                <div className="card-base hover-lift rounded-lg overflow-hidden">
                    {/* Project Image/Gradient */}
                    <div className={`aspect-[4/5] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />

                        {/* Project Number */}
                        <div className="absolute top-6 left-6">
                            <span className="font-display font-black text-6xl md:text-7xl text-white/20 group-hover:text-white/40 transition-colors duration-500">
                                {String(project.id).padStart(2, '0')}
                            </span>
                        </div>

                        {/* View Project Button */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                            }`}>
                            <div className="w-24 h-24 rounded-full bg-cream flex items-center justify-center shadow-xl transform group-hover:scale-100 scale-75 transition-transform duration-500">
                                <span className="font-display font-semibold text-xs uppercase tracking-wider text-charcoal">
                                    View
                                </span>
                            </div>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute bottom-6 left-6">
                            <span className="inline-block px-4 py-2 bg-cream/90 backdrop-blur-sm rounded-full font-body text-caption uppercase tracking-wider text-charcoal">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="font-display font-bold text-heading-md text-charcoal mb-2 group-hover:text-stone transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-body text-caption text-stone">
                                    {project.subtitle}
                                </p>
                            </div>
                            <span className="font-body text-caption text-stone shrink-0">
                                {project.year}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null)

    return (
        <section id="works" className="py-24 md:py-32 lg:py-40">
            <div className="section-padding">
                <div className="container-wide">
                    {/* Section Header */}
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <BlurFadeIn delay={0} blur={10} yOffset={15}>
                                <span className="font-body text-small uppercase tracking-[0.3em] text-stone block mb-4">
                                    Selected Works
                                </span>
                            </BlurFadeIn>
                            <BlurFadeIn delay={0.1} blur={12} yOffset={20}>
                                <h2 className="text-display-lg text-editorial text-charcoal">
                                    Projects that
                                    <br />
                                    speak volumes.
                                </h2>
                            </BlurFadeIn>
                        </div>
                        <BlurFadeIn delay={0.2} blur={10} yOffset={15}>
                            <p className="font-body text-body text-stone max-w-sm">
                                A curated selection of work spanning branding, digital design,
                                and strategic development.
                            </p>
                        </BlurFadeIn>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                hoveredProject={hoveredProject}
                                setHoveredProject={setHoveredProject}
                            />
                        ))}
                    </div>

                    {/* View All CTA */}
                    <BlurFadeIn delay={0} blur={8} yOffset={15}>
                        <div className="mt-16 md:mt-24 text-center">
                            <Link to="/#works" className="btn-outline">
                                View all projects
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </BlurFadeIn>
                </div>
            </div>
        </section>
    )
}

export default Projects
