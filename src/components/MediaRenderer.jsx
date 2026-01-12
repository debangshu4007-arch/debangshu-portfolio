import { useState } from 'react'
import VideoPlayer from './VideoPlayer'

/**
 * MediaRenderer - Renders either an image or video based on media type or file extension
 * Videos now use VideoPlayer component with mute/unmute controls
 * Images use standard img behavior with lazy loading
 * Gracefully handles loading errors with a fallback gradient
 */

function MediaRenderer({
    media,
    className = '',
    fallbackGradient = 'from-stone/20 to-accent/20',
    showPlaceholder = true,
    placeholderText = 'Media',
    showVideoControls = true // New prop to control video mute button visibility
}) {
    const [hasError, setHasError] = useState(false)

    // Handle null/undefined media or error state
    if (!media || !media.src || hasError) {
        if (!showPlaceholder) return null
        return (
            <div className={`bg-gradient-to-br ${fallbackGradient} flex items-center justify-center ${className}`}>
                {placeholderText && (
                    <span className="font-body text-sm text-charcoal/40 prose-invert">{placeholderText}</span>
                )}
            </div>
        )
    }

    // Determine type (use explicit type or detect from extension)
    const isVideo = media.type === 'video' ||
        media.src.toLowerCase().endsWith('.mp4') ||
        media.src.toLowerCase().endsWith('.webm') ||
        media.src.toLowerCase().endsWith('.ogg')

    // Render video using VideoPlayer component with mute controls
    if (isVideo) {
        return (
            <VideoPlayer
                src={media.src}
                poster={media.poster}
                className={className}
                showControls={showVideoControls}
                fallbackGradient={fallbackGradient}
            />
        )
    }

    // Render image (default)
    return (
        <img
            src={media.src}
            alt={media.alt || 'Project image'}
            className={`object-cover ${className}`}
            loading="lazy"
            onError={() => setHasError(true)}
        />
    )
}

export default MediaRenderer
