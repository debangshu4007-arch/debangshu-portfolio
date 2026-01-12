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
        // Thumbnail image for project cards on main page (no video autoplay)
        thumbnail: {
            type: 'image',
            src: '/projects/video-advert/thumbnail.jpg',
            alt: 'Video advert preview'
        },
        // Hero media - used only in hero section (video or image)
        heroMedia: {
            type: 'video',
            src: '/projects/video-advert/hero.mp4',
            alt: 'Video advert hero reel'
        },
        // Gallery media - static images for content sections below
        galleryMedia: [
            { type: 'image', src: '/projects/video-advert/gallery-1.jpg', alt: 'Behind the scenes' },
            { type: 'image', src: '/projects/video-advert/gallery-2.jpg', alt: 'Campaign imagery' },
            { type: 'image', src: '/projects/video-advert/gallery-3.jpg', alt: 'Final deliverable' },
        ],
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
        thumbnail: {
            type: 'image',
            src: '/projects/short-film/thumbnail.jpg',
            alt: 'Short film preview'
        },
        heroMedia: {
            type: 'video',
            src: '/projects/short-film/hero.mp4',
            alt: 'Short film hero trailer'
        },
        galleryMedia: [
            { type: 'image', src: '/projects/short-film/gallery-1.jpg', alt: 'Film still 1' },
            { type: 'image', src: '/projects/short-film/gallery-2.jpg', alt: 'Film still 2' },
            { type: 'image', src: '/projects/short-film/gallery-3.jpg', alt: 'Production shot' },
        ],
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
        // Thumbnail for main page card (static image instead of video)
        thumbnail: {
            type: 'image',
            src: '/projects/winix/thumbnail.jpg',
            alt: 'Winix campaign preview'
        },
        // Uses actual video file in /public/projects/winix/
        heroMedia: {
            type: 'video',
            src: '/projects/winix/Winix_Final_For_Website.mp4',
            alt: 'Winix air purifier micro ad'
        },
        // Add gallery images to: /public/projects/winix/gallery-1.jpg, etc.
        galleryMedia: [
            { type: 'image', src: '/projects/winix/gallery-1.jpg', alt: 'Product showcase' },
            { type: 'image', src: '/projects/winix/gallery-2.jpg', alt: 'Campaign visual' },
            { type: 'image', src: '/projects/winix/gallery-3.jpg', alt: 'Brand application' },
        ],
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
        thumbnail: {
            type: 'image',
            src: '/projects/1-billion-ai-summit/thumbnail.jpg',
            alt: '1 Billion AI Summit preview'
        },
        heroMedia: {
            type: 'video',
            src: '/projects/1-billion-ai-summit/hero.mp4',
            alt: '1 Billion AI Summit trailer'
        },
        galleryMedia: [
            { type: 'image', src: '/projects/1-billion-ai-summit/gallery-1.jpg', alt: 'Scene from the film' },
            { type: 'image', src: '/projects/1-billion-ai-summit/gallery-2.jpg', alt: 'Character design' },
            { type: 'image', src: '/projects/1-billion-ai-summit/gallery-3.jpg', alt: 'Visual development' },
        ],
    },
    {
        id: 5,
        slug: 'bananaland',
        title: 'Banana Land',
        subtitle: 'An AI-generated cinematic journey through India',
        category: 'AI Film',
        year: '2025',
        gradient: 'from-yellow-500/40 to-warm-gray',
        client: 'Independent',
        duration: '6 weeks',
        description: 'An AI-generated film that explores magical realism through the lens of Indian culture. The project pushed the boundaries of generative AI tools to create a visually stunning narrative experience with a distinctive "Dharma" aesthetic.',
        challenge: 'Creating a cohesive cinematic look that authentically represents Indian locations and culture using AI generation tools, while maintaining consistent character and visual style throughout the film.',
        solution: 'We developed a meticulous look development process using Milanote for frame organization. Nano Banana Pro was used for realistic image generation of Bombay locations via Hedra. For video generation, Kling O1 and Kling 2.6 models through Higgsfield delivered scene transformations. Final compositing and sound design was completed in Premiere Pro.',
        services: ['AI Video Generation', 'Look Development', 'Post-Production', 'Sound Design'],
        thumbnail: {
            type: 'image',
            src: '/projects/bananaland/thumbnail.jpg',
            alt: 'Banana Land preview'
        },
        heroMedia: {
            type: 'video',
            src: '/projects/bananaland/hero.mp4',
            alt: 'Banana Land hero video'
        },
        galleryMedia: [
            { type: 'image', src: '/projects/bananaland/gallery-1.jpg', alt: 'Cinematic frame from Banana Land' },
            { type: 'image', src: '/projects/bananaland/gallery-2.jpg', alt: 'Character scene' },
            { type: 'image', src: '/projects/bananaland/gallery-3.jpg', alt: 'Bombay location shot' },
        ],
    },
]

/**
 * Helper function to get the preview media for a project card on the main page
 * @param {Object} project - The project object
 * @returns {Object|null} - The media object { type, src, alt? } or null for gradient fallback
 */
export function getPreviewMedia(project) {
    // Prefer thumbnail for main page cards (static image, no video autoplay)
    if (project.thumbnail) {
        return project.thumbnail
    }
    // Fallback to first gallery image if no thumbnail
    if (project.galleryMedia && project.galleryMedia.length > 0) {
        return project.galleryMedia[0]
    }
    // Return null to trigger gradient fallback
    return null
}
