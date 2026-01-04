import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects, getPreviewMedia } from '../data/projects'
import { BlurFadeIn } from './BlurFadeIn'
import MediaRenderer from './MediaRenderer'

// Individual project card with asymmetric sizing
function ProjectCard({ project, index, isLarge }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-80px 0px -80px 0px'
    })

    // Get preview media for the card
    const previewMedia = getPreviewMedia(project)

    return (
        <motion.article
            ref={ref}
            className={`group relative ${isLarge ? 'md:col-span-7' : 'md:col-span-5'}`}
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
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ willChange: 'transform, opacity, filter' }}
        >
            <Link to={`/project/${project.slug}`} className="block">
                {/* Project Image/Video */}
                <div className={`relative overflow-hidden rounded-lg ${isLarge ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                    {/* Gradient background (fallback) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                    {/* Media content (image or video) */}
                    {previewMedia && (
                        <MediaRenderer
                            media={previewMedia}
                            className="absolute inset-0 w-full h-full"
                            showPlaceholder={false}
                        />
                    )}

                    {/* Project Number Overlay */}
                    <div className="absolute top-6 left-6">
                        <span className="font-display font-black text-5xl md:text-6xl text-white/15 group-hover:text-white/30 transition-colors duration-500">
                            {String(project.id).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />

                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                            <span className="font-display font-semibold text-xs uppercase tracking-wider text-charcoal">
                                View
                            </span>
                        </div>
                    </div>
                </div>

                {/* Caption Below Image */}
                <div className="mt-5 space-y-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                        <h3 className="font-display font-semibold text-heading-sm text-charcoal underline underline-offset-4 decoration-1 group-hover:decoration-stone transition-colors">
                            {project.title}
                        </h3>
                        <span className="font-body text-caption text-stone">
                            with {project.client}.
                        </span>
                        <span className="font-body text-caption text-stone/70">
                            {project.services.slice(0, 2).join(', ')}.
                        </span>
                    </div>
                    <p className="font-body text-small text-stone/80 max-w-md">
                        {project.subtitle}
                    </p>
                </div>
            </Link>
        </motion.article>
    )
}

function Projects() {
    // Define layout pattern: alternating large/small positions
    // Pattern: [large, small], [small, large], repeat
    const getIsLarge = (index) => {
        const row = Math.floor(index / 2)
        const posInRow = index % 2
        // Even rows: first is large, second is small
        // Odd rows: first is small, second is large
        return row % 2 === 0 ? posInRow === 0 : posInRow === 1
    }

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
                                A curated selection of work spanning video,
                                creative direction, and digital design.
                            </p>
                        </BlurFadeIn>
                    </div>

                    {/* Asymmetric Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                isLarge={getIsLarge(index)}
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
