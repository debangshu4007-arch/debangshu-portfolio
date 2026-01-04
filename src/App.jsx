import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import AboutPage from './pages/AboutPage'

function HomePage() {
    return (
        <>
            <Hero />
            <Projects />
            <Contact />
        </>
    )
}

// Wrapper component to conditionally render footer
function AppContent() {
    const location = useLocation()

    // Don't show main footer on project detail pages (they have their own curtain footer)
    const isProjectDetailPage = location.pathname.startsWith('/project/')

    return (
        <div className="min-h-screen bg-cream">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/project/:slug" element={<ProjectDetail />} />
                </Routes>
            </main>
            {!isProjectDetailPage && <Footer />}
        </div>
    )
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    )
}

export default App
