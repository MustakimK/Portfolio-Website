import '../styles/home.css';

const Home = () => {
    return (
        <section className="home">
            <div>
                <h1>
                    <div className="intro">Hey There! My name is</div>
                    <span>Mustakim Kazi</span>
                </h1>
                <h2>
                    Full Stack Software Developer.
                    <br />
                    Open to full-time roles.
                </h2>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/mustakim-kazi-92844a221/" target="_blank" rel="noopener noreferrer">
                        <img src='./icons/linkedin.svg' alt="LinkedIn" className="linkedin-pic" />
                    </a>
                    <a href="https://github.com/MustakimK" target="_blank" rel="noopener noreferrer">
                        <img src='./icons/github.svg' alt="Github" className="github-pic" />
                    </a>
                    <a href="./MustakimKazi_Resume.pdf" className="btn-resume" download>Get Resume</a>
                </div>
            </div>
            <img src='./images/home.jpg' alt="Mustakim" className="home-pic" />
        </section>
    );
};

export default Home;
