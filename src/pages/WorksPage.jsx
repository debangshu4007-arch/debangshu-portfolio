import { useState, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { projects, getPreviewMedia } from '../data/projects'
import VideoPlayer from '../components/VideoPlayer'

/**
 * WorksPage - Netflix-inspired library view of all projects
 * Features:
 * - Cinematic grid layout with large thumbnails
 * - Working category filters
 * - Smooth hover interactions with scale and overlay effects
 * - Lazy-loaded images for performance
 * - Responsive design (mobile-first)
 */

// Individual project card for the works grid
function WorkCard({ project, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-50px 0px -50px 0px'
    })

    const previewMedia = getPreviewMedia(project)

    // Determine if media is a video
    const isVideo = previewMedia && (
        previewMedia.type === 'video' ||
        previewMedia.src?.toLowerCase().endsWith('.mp4') ||
        previewMedia.src?.toLowerCase().endsWith('.webm') ||
        previewMedia.src?.toLowerCase().endsWith('.ogg')
    )

    return (
        <motion.article
            ref={ref}
            className="group relative"
            initial={{
                opacity: 0,
                y: 30,
                scale: 0.95
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                scale: 1
            } : {
                opacity: 0,
                y: 30,
                scale: 0.95
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            <Link
                to={`/project/${project.slug}`}
                className="block relative overflow-hidden rounded-lg"
            >
                {/* Card with 16:9 aspect ratio for cinematic feel */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-accent">
                    {/* Gradient fallback */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                    {/* Media content - use VideoPlayer for videos, img for images */}
                    {previewMedia && (
                        isVideo ? (
                            <VideoPlayer
                                src={previewMedia.src}
                                poster={previewMedia.poster}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                showControls={true}
                            />
                        ) : (
                            <img
                                src={previewMedia.src}
                                alt={previewMedia.alt || project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                        )
                    )}

                    {/* Project Number - subtle overlay */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="font-display font-black text-3xl md:text-4xl text-white/10 group-hover:text-white/25 transition-colors duration-500">
                            {String(project.id).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Hover overlay - cinematic gradient reveal */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Title reveal on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none">
                        <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-1">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/70">
                            <span className="font-body text-sm">{project.category}</span>
                            <span className="w-1 h-1 rounded-full bg-white/50" />
                            <span className="font-body text-sm">{project.year}</span>
                        </div>
                    </div>

                    {/* Play/View indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                            <svg className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Metadata below card */}
                <div className="mt-4 space-y-1">
                    <h3 className="font-display font-semibold text-heading-md text-charcoal group-hover:text-stone transition-colors duration-300">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-body text-caption text-stone">
                            {project.client}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-stone/50" />
                        <span className="font-body text-caption text-stone/70">
                            {project.services.slice(0, 2).join(' · ')}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}

// Category filter pill component
function CategoryPill({ label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${isActive
                    ? 'bg-charcoal text-cream'
                    : 'bg-accent text-charcoal hover:bg-warm-gray'
                }`}
        >
            {label}
        </button>
    )
}

function WorksPage() {
    // State for active category filter
    const [activeCategory, setActiveCategory] = useState('All')

    // Get unique categories from projects (case-insensitive deduplication)
    const categories = useMemo(() => {
        const uniqueCategories = new Set(projects.map(p => p.category))
        return ['All', ...Array.from(uniqueCategories)]
    }, [])

    // Filter projects based on active category
    // "All" shows everything, otherwise case-insensitive match
    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') {
            return projects
        }
        return projects.filter(
            p => p.category.toLowerCase() === activeCategory.toLowerCase()
        )
    }, [activeCategory])

    // Handle category click
    const handleCategoryClick = (category) => {
        setActiveCategory(category)
    }

    return (
        <div className="min-h-screen pt-28 md:pt-36 pb-20 md:pb-32">
            <div className="section-padding">
                <div className="container-wide">
                    {/* Page Header */}
                    <header className="mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <span className="font-body text-small uppercase tracking-[0.3em] text-stone block mb-4">
                                Library
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-display-lg text-editorial text-charcoal mb-6"
                            initial={{ opacity: 0, y: 25, filter: 'blur(12px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            All Works
                        </motion.h1>

                        <motion.p
                            className="font-body text-body text-stone max-w-2xl"
                            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            A comprehensive collection of video production, creative direction,
                            and storytelling projects. Each piece represents a unique collaboration
                            and vision brought to life.
                        </motion.p>

                        {/* Category filters - now functional */}
                        <motion.div
                            className="flex flex-wrap gap-3 mt-8"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {categories.map((category) => (
                                <CategoryPill
                                    key={category}
                                    label={category}
                                    isActive={activeCategory === category}
                                    onClick={() => handleCategoryClick(category)}
                                />
                            ))}
                        </motion.div>
                    </header>

                    {/* Projects Grid - Netflix-inspired responsive layout */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                        // Re-render grid when filter changes with a subtle animation
                        key={activeCategory}
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <WorkCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {/* Empty state when no projects match filter */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <p className="font-body text-body text-stone">
                                No projects found in this category.
                            </p>
                        </motion.div>
                    )}

                    {/* Project count indicator */}
                    <motion.div
                        className="mt-16 md:mt-24 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <p className="font-body text-caption text-stone">
                            Showing {filteredProjects.length} of {projects.length} projects
                        </p>
                    </motion.div>

                    {/* Back to home link */}
                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link to="/" className="btn-outline">
                            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            Back to home
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default WorksPage
