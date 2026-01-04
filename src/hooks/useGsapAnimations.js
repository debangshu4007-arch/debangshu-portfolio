import { useEffect } from 'react'

/**
 * Minimal hook to initialize GSAP ScrollTrigger animations
 * Lazy-loads GSAP to avoid SSR/initialization issues
 */
export function useGsapAnimations(containerRef) {
    useEffect(() => {
        // Don't run on server or if ref is not attached
        if (typeof window === 'undefined') return
        if (!containerRef?.current) return

        let ctx = null

        const initAnimations = async () => {
            try {
                const gsapModule = await import('gsap')
                const { ScrollTrigger } = await import('gsap/ScrollTrigger')

                const gsap = gsapModule.default || gsapModule.gsap
                gsap.registerPlugin(ScrollTrigger)

                const container = containerRef.current
                if (!container) return

                ctx = gsap.context(() => {
                    // Scroll-triggered reveal animations
                    const revealElements = container.querySelectorAll('.reveal-on-scroll')

                    revealElements.forEach((el) => {
                        const shouldStagger = el.classList.contains('stagger-children')

                        if (shouldStagger && el.children.length > 0) {
                            gsap.fromTo(el.children,
                                { y: 60, opacity: 0 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 1.2,
                                    ease: 'power3.out',
                                    stagger: 0.1,
                                    scrollTrigger: {
                                        trigger: el,
                                        start: 'top 85%',
                                        toggleActions: 'play none none none',
                                    }
                                }
                            )
                        } else {
                            gsap.fromTo(el,
                                { y: 60, opacity: 0 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 1.2,
                                    ease: 'power3.out',
                                    scrollTrigger: {
                                        trigger: el,
                                        start: 'top 85%',
                                        toggleActions: 'play none none none',
                                    }
                                }
                            )
                        }
                    })

                    // Image parallax effect
                    const parallaxImages = container.querySelectorAll('.case-image')

                    parallaxImages.forEach((wrapper) => {
                        const img = wrapper.querySelector('img, .parallax-inner')
                        if (!img) return

                        gsap.fromTo(img,
                            { y: -30 },
                            {
                                y: 30,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: wrapper,
                                    start: 'top bottom',
                                    end: 'bottom top',
                                    scrub: true,
                                }
                            }
                        )
                    })

                }, container)
            } catch (error) {
                console.warn('GSAP animations initialization failed:', error)
            }
        }

        // Small delay to ensure DOM is ready
        const timeoutId = setTimeout(initAnimations, 100)

        // Cleanup function
        return () => {
            clearTimeout(timeoutId)
            if (ctx) {
                ctx.revert()
            }
        }
    }, [containerRef])
}

export default useGsapAnimations
