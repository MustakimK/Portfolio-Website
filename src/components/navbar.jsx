import React from 'react';
import { smoothScroll } from './smoothscroll.js';
import '../styles/navbar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);  

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavLinkClick = (event, sectionId) => {
        event.preventDefault();
        const section = document.querySelector(sectionId);
        if (section) {
            smoothScroll(section);
        }
        setIsOpen(false);
    };

    React.useEffect(() => {
        const progressBar = document.getElementById('progressBar');
        const updateProgressBar = () => {
            // Calculate the scroll distance as a percentage
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = window.scrollY / scrollTotal * 100;
            progressBar.style.width = scrollProgress + '%';
        };

        // Attach scroll event listener
        window.addEventListener('scroll', updateProgressBar);

        // Clean up
        return () => window.removeEventListener('scroll', updateProgressBar);
    }, []);

    return (
        <nav>
            <div className="progress-bar" id="progressBar"></div>
            <ul className="navbar">
                <li>
                    <a href="#home" className="logo" onClick={(e) => handleNavLinkClick(e, '#home')}>
                        <img src="/icons/logo.png" alt="Logo" style={{ width: "35px", height: "35px" }} />
                    </a>
                </li>
                <div className={`menu-icon ${isOpen ? "close" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`links ${isOpen ? "active" : ""}`}>
                    <li><a href="#about" className="link" onClick={(e) => handleNavLinkClick(e, '#about')}>About</a></li>
                    <li><a href="#projects" className="link" onClick={(e) => handleNavLinkClick(e, '#projects')}>Projects</a></li>
                    <li><a href="#skills" className="link" onClick={(e) => handleNavLinkClick(e, '#skills')}>Skills</a></li>
                    <li><a href="#contact" className="link" onClick={(e) => handleNavLinkClick(e, '#contact')}>Contact Me</a></li>
                </ul>
            </ul>
        </nav>
    );
};

export default NavBar;
