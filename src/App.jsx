import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-cream">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/project/:slug" element={<ProjectDetail />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
