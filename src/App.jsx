import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    return (
        <div className="bg-background text-text-primary min-h-screen max-w-[1300px] mx-auto px-[50px]">
            {/* Navbar */}
            <Navbar />

            <ScrollToTop />

            {/* Main Content */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <About />
                        <Experience />
                        <Projects />
                    </>
                } />
                <Route path="/projects" element={<Navigate to="/" replace />} /> {/* Redirect */}
                <Route path="/projects/:title" element={<ProjectDetail />} />
            </Routes>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}