import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * BlurFadeIn component - Scroll-triggered blur-to-sharp animation
 * Inspired by zoomoestudio.com
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {string} props.className - Additional classes
 * @param {boolean} props.once - Animate only once (default: true)
 */
export function BlurFadeIn({
    children,
    delay = 0,
    className = '',
    once = true,
    blur = 12,
    yOffset = 20,
    duration = 0.7
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once,
        margin: '-50px 0px -50px 0px' // Trigger slightly before fully in view
    })

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: yOffset,
                filter: `blur(${blur}px)`
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
            } : {
                opacity: 0,
                y: yOffset,
                filter: `blur(${blur}px)`
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // easeOut cubic
            }}
            className={className}
            style={{ willChange: 'transform, opacity, filter' }}
        >
            {children}
        </motion.div>
    )
}

/**
 * Staggered container for animating multiple children with delays
 */
export function BlurFadeInGroup({
    children,
    className = '',
    staggerDelay = 0.1,
    baseDelay = 0
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true,
        margin: '-50px 0px -50px 0px'
    })

    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 20,
                            filter: 'blur(12px)'
                        }}
                        animate={isInView ? {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)'
                        } : {
                            opacity: 0,
                            y: 20,
                            filter: 'blur(12px)'
                        }}
                        transition={{
                            duration: 0.7,
                            delay: baseDelay + (index * staggerDelay),
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        style={{ willChange: 'transform, opacity, filter' }}
                    >
                        {child}
                    </motion.div>
                ))
                : children
            }
        </div>
    )
}

export default BlurFadeIn
