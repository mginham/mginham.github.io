import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar sticky top-0 z-50 bg-background h-20 flex items-center">
            <div className="navbar__container flex justify-between items-center max-w-[1300px] w-full mx-auto px-6">
                {/* Logo */}
                <Link
                    to="/"
                    id="navbar__logo"
                    className="text-4xl bg-gradient-to-b from-primary via-primary-medium to-primary-light bg-clip-text text-transparent cursor-pointer"
                >
                    MG
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 text-text-primary text-lg">
                    <li><a href="#top" className="hover:text-primary-medium transition-colors">Home</a></li>
                    <li><a href="#about__section" className="hover:text-primary-medium transition-colors">About</a></li>
                    <li><a href="#experience__section" className="hover:text-primary-medium transition-colors">Experience</a></li>
                    <li><a href="#projects__section" className="hover:text-primary-medium transition-colors">Projects</a></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div
                    id="mobile-menu"
                    className="md:hidden flex flex-col gap-1 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${
                            isOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    ></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <ul
                className={`md:hidden bg-background flex flex-col items-center text-text-primary text-lg transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <li className="w-full text-center">
                    <a 
                        href="#top"
                        onClick={() => setIsOpen(false)}
                        className="block py-4 hover:text-primary-medium"
                    >
                        Home
                    </a>
                </li>
                <li className="w-full text-center">
                    <a
                        href="#about__section"
                        onClick={() => setIsOpen(false)}
                        className="block py-4 hover:text-primary-medium"
                    >
                        About
                    </a>
                </li>
                <li className="w-full text-center">
                    <a
                        href="#experience__section"
                        onClick={() => setIsOpen(false)}
                        className="block py-4 hover:text-primary-medium"
                    >
                        Experience
                    </a>
                </li>
                <li className="w-full text-center">
                    <a
                        href="#projects__section"
                        onClick={() => setIsOpen(false)}
                        className="block py-4 hover:text-primary-medium"
                    >
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
}