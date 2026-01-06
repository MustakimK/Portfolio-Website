import '../styles/about.css';
import { smoothScroll } from '../components/smoothscroll.js';

const About = () => {

    const handleContactClick = (event) => {
        event.preventDefault();
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            smoothScroll(contactSection);
        }
    };

    return (
        <section className="about-me">
            <h1 className="about-me-title">About Me</h1>
            <div className="about-me-container">
                <div className="about-text">
                    My name is Mustakim Kazi, I&apos;m a final-year Computer Science student at McMaster University with real hands-on experience from software engineering internships.
                    where I worked on production systems, collaborated across teams and shipped user-facing features.
                    I enjoy working across the stack on user-facing features, backend systems, and data-driven applications, and my portfolio highlights projects in web development,
                    Android, systems programming, and tooling.
                    I&apos;m currently finishing my degree and looking ahead to full-time software engineering roles. Feel free to{" "}
                    <a href="#contact" onClick={handleContactClick}>reach out</a> if you&apos;d like to connect.
                </div>
                <img src='./images/aboutme.jpg' alt="Picture of Me" className="about-pic" />
            </div>
        </section>
    );
};

export default About;
