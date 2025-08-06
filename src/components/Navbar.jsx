import { useState, useRef, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            // If already on homepage, just scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            // If menu is open and click is outside both menu and toggle button, close menu
            if (
                isOpen &&
                menuRef.current &&
                toggleRef.current &&
                !menuRef.current.contains(event.target) &&
                !toggleRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar sticky top-0 z-50 bg-background h-20 flex items-center">
            <div className="navbar__container flex justify-between items-center w-full max-w-full md:max-w-[1300px] md:mx-auto px-5">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    id="navbar__logo"
                    className="text-4xl bg-gradient-to-b from-primary via-primary-medium to-primary-light bg-clip-text text-transparent transition-all duration-300 ease-in-out hover:animate-glow cursor-pointer"
                >
                    MG
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 text-text-primary text-lg">
                    <li><HashLink to="/#top" className="hover:text-primary-medium transition-colors">Home</HashLink></li>
                    <li><HashLink to="/#about__section" className="hover:text-primary-medium transition-colors">About</HashLink></li>
                    <li><HashLink to="/#experience__section" className="hover:text-primary-medium transition-colors">Experience</HashLink></li>
                    <li><HashLink to="/#projects__section" className="hover:text-primary-medium transition-colors">Projects</HashLink></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div
                    ref={toggleRef}
                    id="mobile-menu"
                    className="md:hidden flex flex-col gap-1 cursor-pointer absolute right-5 top-1/2 -translate-y-1/2"
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
                ref={menuRef}
                className={`absolute right-5 top-20 md:hidden bg-[rgba(34,40,49,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center text-text-primary text-lg px-6 py-4 transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen 
                        ? "max-h-80 opacity-100 scale-100"
                        : "max-h-0 opacity-0 scale-95"
                }`}
            >
                <li className="w-full text-center">
                    <HashLink
                        to="/#top"
                        onClick={() => setIsOpen(false)}
                        className="block py-3 hover:text-primary-medium"
                    >
                        Home
                    </HashLink>
                </li>
                <li className="w-full text-center">
                    <HashLink
                        to="/#about__section"
                        onClick={() => setIsOpen(false)}
                        className="block py-3 hover:text-primary-medium"
                    >
                        About
                    </HashLink>
                </li>
                <li className="w-full text-center">
                    <HashLink
                        to="/#experience__section"
                        onClick={() => setIsOpen(false)}
                        className="block py-3 hover:text-primary-medium"
                    >
                        Experience
                    </HashLink>
                </li>
                <li className="w-full text-center">
                    <HashLink
                        to="/#projects__section"
                        onClick={() => setIsOpen(false)}
                        className="block py-3 hover:text-primary-medium"
                    >
                        Projects
                    </HashLink>
                </li>
            </ul>
        </nav>
    );
}