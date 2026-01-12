import { useState, useRef, useEffect } from 'react'

/**
 * VideoPlayer - Video component with ALWAYS VISIBLE mute/unmute toggle
 * Features:
 * - Autoplay with muted default (browser policy compliant)
 * - ALWAYS VISIBLE mute/unmute button overlay (bottom-right)
 * - Smooth transitions on hover enhancement
 * - Error handling with graceful fallback
 */

function VideoPlayer({
    src,
    poster,
    className = '',
    showControls = true,
    fallbackGradient = 'from-stone/20 to-accent/20'
}) {
    const videoRef = useRef(null)
    const [isMuted, setIsMuted] = useState(true) // Default muted for autoplay
    const [hasError, setHasError] = useState(false)

    // Sync mute state with video element
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted
        }
    }, [isMuted])

    // Handle mute toggle - prevent link navigation when clicking button
    const handleMuteToggle = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsMuted(prev => !prev)
    }

    // Handle video error
    const handleError = () => {
        setHasError(true)
    }

    // Show error fallback
    if (hasError || !src) {
        return (
            <div className={`bg-gradient-to-br ${fallbackGradient} flex items-center justify-center ${className}`}>
                <span className="font-body text-sm text-charcoal/40">Video unavailable</span>
            </div>
        )
    }

    return (
        <div className={`relative ${className}`}>
            {/* Video element */}
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                poster={poster}
                onError={handleError}
            />

            {/* Mute/Unmute button - ALWAYS VISIBLE */}
            {showControls && (
                <button
                    onClick={handleMuteToggle}
                    className={`absolute bottom-3 right-3 z-30 w-10 h-10 rounded-full 
                        flex items-center justify-center
                        transition-all duration-200 ease-out
                        focus:outline-none focus:ring-2 focus:ring-cream/50
                        ${isMuted
                            ? 'bg-charcoal/80 hover:bg-charcoal text-cream'
                            : 'bg-cream hover:bg-white text-charcoal'
                        }`}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    title={isMuted ? 'Click to unmute' : 'Click to mute'}
                >
                    {isMuted ? (
                        // Muted icon - speaker with X (🔇)
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                            />
                        </svg>
                    ) : (
                        // Unmuted icon - speaker with waves (🔊)
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            />
                        </svg>
                    )}
                </button>
            )}
        </div>
    )
}

export default VideoPlayer
