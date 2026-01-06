import ProjectDisplay from '../components/projectdisplay.jsx';
import '../styles/projects.css';

const sampleProjects = [
    {
        id: 1,
        title: 'Steam Review Helpfulness Prediction',
        description: "A machine learning project that predicts whether a Steam review will be voted helpful by the community. Built using TF-IDF text features, reviewer metadata, and logistic regression, with threshold tuning to outperform a majority-class baseline. The model captures informal gaming language using character n-grams and is evaluated using F1, precision, recall, and confusion matrices.",
        imageUrl: ['./images/projects/F1.png', './images/projects/model_performance.png', './images/projects/confusion_matrix.png'], 
        technologies: ['Python', 'Machine Learning', 'NLP', 'Logistic Regression'],
        githubUrl: 'https://github.com/MustakimK/Steam-Review-Helpfulness-Prediction',
    },
    {
        id: 2,
        title: 'Personal Portfolio Website',
        description: "This portfolio website is a reflection of my journey in Full Stack Software Development, showcasing my projects, skills learned, and personal growth in the field. It's crafted with HTML, CSS, and JavaScript, and provides insights into my work, serving as a point of contact for potential collaborations and learning opportunities.",
        imageUrl: ['./images/projects/portfoliowebsite1.png', './images/projects/portfoliowebsite2.png', './images/projects/portfoliowebsite3.png', './images/projects/portfoliowebsite4.png'], 
        technologies: ['Javascript', 'React', 'HTML', 'CSS', 'Vite'],
        githubUrl: 'https://github.com/MustakimK/Portfolio-Website',
        liveDemoUrl: 'https://ilied.com'
    },
    {
        id: 3,
        title: 'Halal Scanner',
        description: "An Android app that helps users identify Halal or Haram food products using Google's ML Kit Vision for barcode and text scanning, along with the Open Food Facts API for ingredient information. It's designed to store up to 100 items in the history, showcasing my skills in Android development, Google ML Kit Vision, API integration, and local database management with Android Room and SQLite.",
        imageUrl: ['./images/projects/halalscanner1.png', './images/projects/halalscanner2.png'], 
        technologies: ['Kotlin', 'Android Studio', 'SQLite'],
        githubUrl: 'https://github.com/MustakimK/Halal-Scanner'
    },
    {
        id: 4,
        title: 'MKShell',
        description: "MKShell is a custom UNIX shell written in C. It includes common shell commands, a command history, signal handling, and robust error messages. It's designed for Linux environments and demonstrates my system programming skills.",
        imageUrl: ['./images/projects/shellproj.png'], 
        technologies: ['C'],
        githubUrl: 'https://github.com/MustakimK/MKShell'
    },
    {
        id: 5,
        title: 'Rinvest',
        description: "Built to empower small businesses and entrepreneurs through accessible investment opportunities. This project, was built using React.js, Firebase and CSS. Working on this project allowed us to strengthen our teamwork skills and collaborate effectively in a hackathon environment.",
        imageUrl: ['./images/projects/deltahacks1.png','./images/projects/deltahacks2.png','./images/projects/deltahacks3.png','./images/projects/deltahacks4.png'], 
        technologies: ['Javascript', 'React', 'Firebase', 'CSS'],
        githubUrl: 'https://github.com/AsherHaroon/DeltaHacksProject'
    },
    {
        id: 6,
        title: 'Spy Network Communication System',
        description: "This is a Java-based simulation project developed for CS 2ME3 at McMaster University. It demonstrates proficiency in software design and object-oriented programming by creating a secure communication system within a spy network. Key features include encryption algorithms and the use of design patterns for adaptable and secure communication.",
        imageUrl: ['./images/projects/spynetwork.png'],
        technologies: ['Java'],
        githubUrl: 'https://github.com/MustakimK/Spy-Network-Communication-System'
    },
    {
        id: 7,
        title: 'Game Server Rolling Backup',
        description: "A utility that automatically creates backups of your game server at fixed intervals. It's designed to be used with Docker and offers flexibility through environment variables, allowing you to customize save and backup directories, backup frequency, and backup retention period.",
        imageUrl: ['./images/projects/gameserverbackup.png'], 
        technologies: ['Python', 'Docker'],
        githubUrl: 'https://github.com/MustakimK/Game-Server-Rolling-Backup'
    },
    {
        id: 8,
        title: 'Derivative Calculator',
        description: "The Derivative Calculator is a Haskell module for symbolic computation of mathematical expression derivatives. It features an AST representation, evaluation, differentiation, and pretty printing of expressions, demonstrating proficiency in Haskell programming.",
        imageUrl: ['./images/projects/derivativecalc.png'],
        technologies: ['Haskell'],
        githubUrl: 'https://github.com/MustakimK/Derivative-Calculator'
    },
    {
        id: 9,
        title: 'Kaztastic Discord Bot',
        description: "A versatile Discord bot for server management and user interaction, featuring moderation, fun, utility, and informational commands. Developed to deepen my understanding of JavaScript and the Discord API.",
        imageUrl: ['./images/projects/discbot1.png', './images/projects/discbot2.png', './images/projects/discbot3.png'],
        technologies: ['Javascript', 'Node'],
        githubUrl: 'https://github.com/MustakimK/Multipurpose-Discord-Bot'
    }
];

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            {sampleProjects.map((project) => (
                <ProjectDisplay key={project.id} project={project} />
            ))}
        </div>
    );
};
export default Projects;

