import './projectdisplay.css';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectDisplay = ({ project }) => {
    const realCount = project.imageUrl.length;
    const hasMultiple = realCount > 1;

    const slides = hasMultiple
        ? [project.imageUrl[realCount - 1], ...project.imageUrl, project.imageUrl[0]]
        : project.imageUrl;

    const [imageIndex, setImageIndex] = React.useState(hasMultiple ? 1 : 0);
    const [enableTransition, setEnableTransition] = React.useState(true);

    const nextImage = () => {
        if (!hasMultiple) return;
        if (imageIndex > realCount) return;
        setEnableTransition(true);
        setImageIndex((prev) => prev + 1);
    };

    const prevImage = () => {
        if (!hasMultiple) return;
        if (imageIndex < 1) return;
        setEnableTransition(true);
        setImageIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = (e) => {
        if (e.target !== e.currentTarget) return;
        if (!hasMultiple) return;
        if (imageIndex === slides.length - 1) {
            setEnableTransition(false);
            setImageIndex(1);
        } else if (imageIndex === 0) {
            setEnableTransition(false);
            setImageIndex(realCount);
        }
    };

    return (
        <article className="project-display">
            <div className="project-image-container">
                <div className="project-image-viewport">
                    <div
                        className={`project-image-track${enableTransition ? '' : ' no-transition'}`}
                        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {slides.map((url, idx) => {
                            const isClone = hasMultiple && (idx === 0 || idx === slides.length - 1);
                            return (
                                <div key={idx} className="project-image-slide" aria-hidden={isClone}>
                                    <img
                                        src={url}
                                        alt={isClone ? '' : `Project image of ${project.title}`}
                                        className="project-image"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {hasMultiple && (
                        <>
                            <button className="arrow-btn left-arrow" onClick={prevImage} aria-label="Previous image">&#10094;</button>
                            <button className="arrow-btn right-arrow" onClick={nextImage} aria-label="Next image">&#10095;</button>
                        </>
                    )}
                </div>
            </div>
            <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className="technology-list">
                    {project.technologies.map((tech, index) => (
                        <li key={index} className="technology-item">{tech}</li>
                    ))}
                </ul>
                <div className="project-buttons">
                    <a href={project.githubUrl} className="project-btn" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub</a>
                    {project.liveDemoUrl && <a href={project.liveDemoUrl} className="project-btn" target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>Live Demo</a>}
                </div>
            </div>
        </article>
    );
};

ProjectDisplay.propTypes = {
    project: PropTypes.shape({
        imageUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        githubUrl: PropTypes.string.isRequired,
        liveDemoUrl: PropTypes.string
    })
};

export default ProjectDisplay;
