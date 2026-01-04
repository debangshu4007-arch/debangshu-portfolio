/**
 * MediaRenderer - Renders either an image or video based on media type
 * Videos autoplay silently, loop, and are responsive
 * Images behave with standard img behavior
 */

function MediaRenderer({
    media,
    className = '',
    fallbackGradient = 'from-stone/20 to-accent/20',
    showPlaceholder = true,
    placeholderText = 'Media'
}) {
    // Handle null/undefined media
    if (!media) {
        if (!showPlaceholder) return null
        return (
            <div className={`bg-gradient-to-br ${fallbackGradient} flex items-center justify-center ${className}`}>
                <span className="font-body text-sm text-charcoal/40">{placeholderText}</span>
            </div>
        )
    }

    // Render video
    if (media.type === 'video') {
        return (
            <video
                src={media.src}
                className={`object-cover ${className}`}
                autoPlay
                muted
                loop
                playsInline
                poster={media.poster || undefined}
                aria-label={media.alt || 'Video content'}
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
        />
    )
}

export default MediaRenderer
