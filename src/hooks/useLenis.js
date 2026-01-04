import { useEffect, useRef } from 'react'

/**
 * Minimal hook to initialize Lenis smooth scroll
 * Lazy-loads Lenis to avoid SSR/initialization issues
 */
export function useLenis() {
    const lenisRef = useRef(null)

    useEffect(() => {
        // Only run in browser
        if (typeof window === 'undefined') return

        let lenis = null
        let rafCallback = null

        // Dynamically import to avoid any module-level issues
        const initLenis = async () => {
            try {
                const { default: Lenis } = await import('lenis')
                const gsapModule = await import('gsap')
                const { ScrollTrigger } = await import('gsap/ScrollTrigger')

                const gsap = gsapModule.default || gsapModule.gsap
                gsap.registerPlugin(ScrollTrigger)

                lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    orientation: 'vertical',
                    gestureOrientation: 'vertical',
                    smoothWheel: true,
                    wheelMultiplier: 1,
                    touchMultiplier: 2,
                })

                lenisRef.current = lenis

                // Integrate with GSAP
                lenis.on('scroll', ScrollTrigger.update)

                rafCallback = (time) => {
                    lenis.raf(time * 1000)
                }

                gsap.ticker.add(rafCallback)
                document.documentElement.classList.add('lenis')
            } catch (error) {
                console.warn('Lenis initialization failed:', error)
            }
        }

        initLenis()

        // Cleanup
        return () => {
            document.documentElement.classList.remove('lenis')
            if (lenis) {
                lenis.destroy()
            }
        }
    }, [])

    return lenisRef
}

export default useLenis
