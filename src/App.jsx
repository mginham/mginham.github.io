import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="bg-background text-text-primary min-h-screen max-w-[1300px] mx-auto px-[50px]">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <Header />
                <About />
                <Experience />
                <Projects />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}