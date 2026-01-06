// Project data - centralized for use across components
// Media items can be either 'image' or 'video' type
// Videos will autoplay silently and loop

export const projects = [
    {
        id: 1,
        slug: 'video-advert',
        title: 'Video advert',
        subtitle: 'Reels for AI first outfit shop',
        category: 'Advert',
        year: '2025',
        gradient: 'from-highlight/40 to-warm-gray',
        client: 'Alle',
        duration: '2.5 months',
        description: 'A comprehensive brand identity project that transformed a startup into a recognizable market presence. The project encompassed logo design, color palette development, typography selection, and brand guidelines creation.',
        challenge: 'The client needed to establish a strong visual identity that would resonate with their target audience of young professionals while maintaining a sense of sophistication and trustworthiness.',
        solution: 'We developed a minimal yet impactful visual language using geometric forms and a refined color palette. The brand system was designed to be flexible across digital and print applications.',
        services: ['Video Production', 'Brand Strategy', 'Social Content'],
        media: null,
        // Add video/image to: /public/projects/video-advert/hero.mp4 or hero.jpg
        heroMedia: {
            type: 'video',
            src: '/projects/video-advert/hero.mp4',
            alt: 'Video advert hero reel'
        },
    },
    {
        id: 2,
        slug: 'short-film',
        title: 'Short film',
        subtitle: 'How far would you go for your mission?',
        category: 'Advert',
        year: '2025',
        gradient: 'from-accent to-dark-cream',
        client: 'TechFlow Inc.',
        duration: '4 months',
        description: 'An immersive digital platform designed to showcase innovative technology products. The project focused on creating smooth interactions and memorable user experiences.',
        challenge: 'Creating a website that could effectively communicate complex technical products to a non-technical audience while maintaining engagement and reducing bounce rates.',
        solution: 'We implemented scroll-driven animations, interactive product demonstrations, and a carefully crafted information architecture that guides users through the content naturally.',
        services: ['Film Production', 'Storytelling', 'Direction'],
        media: null,
        // Add video/image to: /public/projects/short-film/hero.mp4 or hero.jpg
        heroMedia: {
            type: 'video',
            src: '/projects/short-film/hero.mp4',
            alt: 'Short film hero trailer'
        },
    },
    {
        id: 3,
        slug: 'winix-air-purifiers',
        title: 'Winix micro ads',
        subtitle: 'Made consumer focused micro ads',
        category: 'Advert',
        year: '2025',
        gradient: 'from-warm-gray to-accent',
        client: 'WINIX',
        duration: '2 months',
        description: 'Led the creative direction for a multi-platform campaign that unified the brand\'s visual presence across all touchpoints.',
        challenge: 'The brand had inconsistent visual presentation across different channels, leading to a fragmented brand perception in the market.',
        solution: 'Developed a cohesive creative framework and art direction guidelines that ensured consistency while allowing flexibility for different contexts and platforms.',
        services: ['Creative Direction', 'Art Direction', 'Campaign Design'],
        media: null,
        // Uses actual video file in /public/projects/winix/
        heroMedia: {
            type: 'video',
            src: '/projects/winix/Winix_Final_For_Website.mp4',
            alt: 'Winix air purifier micro ad'
        },
    },
    {
        id: 4,
        slug: '1-billion-ai-summit',
        title: '1 Billion AI Summit',
        subtitle: 'Everything ultimately happens',
        category: 'Storytelling',
        year: '2025',
        gradient: 'from-dark-cream to-highlight/30',
        client: 'Upsurge Labs',
        duration: '25 days',
        description: 'A submission for the One Billion AI Summit hosted by Google in Dubai. This project pushed the boundaries of generative storytelling.',
        challenge: 'To create a cohesive story with a duration of 10 minutes that properly showed the theme "The Secret Life Of", requiring consistent character retention and narrative flow using AI tools.',
        solution: 'We crafted a multi-layered narrative that explored the hidden digital consciousness. By combining precise prompt engineering with traditional editing techniques, we delivered a 10-minute film that met the strict thematic requirements while telling a deeply human story.',
        services: ['AI Video', 'Narrative Design', 'Scriptwriting', 'Sound Design'],
        media: null,
        // Add video/image to: /public/projects/1-billion-ai-summit/hero.mp4 or hero.jpg
        heroMedia: {
            type: 'video',
            src: '/projects/1-billion-ai-summit/hero.mp4',
            alt: '1 Billion AI Summit trailer'
        },
    },
]

/**
 * Helper function to get the preview media (first item or heroMedia) for a project card
 * @param {Object} project - The project object
 * @returns {Object|null} - The media object { type, src, alt? } or null for gradient fallback
 */
export function getPreviewMedia(project) {
    // Prefer heroMedia if available, otherwise use first media item
    if (project.heroMedia) {
        return project.heroMedia
    }
    if (project.media && project.media.length > 0) {
        return project.media[0]
    }
    // Return null to trigger gradient fallback
    return null
}
