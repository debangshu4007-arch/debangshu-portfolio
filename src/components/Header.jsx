import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const isNotHomePage = location.pathname !== '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle hash navigation - scroll to section after navigation
    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.replace('#', '')
            setTimeout(() => {
                const element = document.getElementById(elementId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }, [location])

    const handleNavClick = (e, link) => {
        // If it's a page link (starts with / but no hash), use regular navigation
        if (link.isPage) {
            setIsMobileMenuOpen(false)
            navigate(link.href)
            return
        }

        // Handle hash navigation for sections on home page
        e.preventDefault()
        const [path, hash] = link.href.split('#')

        if (location.pathname !== '/' && path === '/') {
            navigate('/')
            setTimeout(() => {
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        } else {
            const element = document.getElementById(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
        setIsMobileMenuOpen(false)
    }

    const navLinks = [
        { name: 'Works', href: '/#works', isPage: false },
        { name: 'About', href: '/about', isPage: true },
        { name: 'Contact', href: '/#contact', isPage: false },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isNotHomePage
                    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="section-padding">
                <div className="container-wide flex items-center justify-between h-20 md:h-24">
                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-1">
                        <span className="font-display font-black text-lg md:text-xl tracking-tight text-charcoal">
                            [D]
                        </span>
                        <span className="font-display font-bold text-sm md:text-base uppercase tracking-widest text-charcoal group-hover:text-stone transition-colors">
                            Debangshu
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            link.isPage ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="link-underline font-body text-sm uppercase tracking-wider text-charcoal hover:text-stone transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="link-underline font-body text-sm uppercase tracking-wider text-charcoal hover:text-stone transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-charcoal transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-cream border-t border-accent transition-all duration-500 ${isMobileMenuOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-4'
                    }`}
            >
                <nav className="section-padding py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        link.isPage ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-display font-semibold text-2xl text-charcoal hover:text-stone transition-colors cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="font-display font-semibold text-2xl text-charcoal hover:text-stone transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
