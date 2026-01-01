import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'

function HomePage() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
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
                        <Route path="/project/:slug" element={<ProjectDetail />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
