import React from 'react';
import styles from "./ProjectCard.module.css";

interface Project {
    id: number; // Ensure each project has a unique ID
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo?: string;
    source?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { title, imageSrc, description, skills, demo, source } = project;

    return (
        <div className={styles.container}>
            <img src={imageSrc} alt={`Image of ${title}`} className={styles.projectImage} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skill}>{skill}</li>
                ))}
            </ul>

            <div className={styles.links}>
                {demo && (
                    <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                )}
                {source && (
                    <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
                        Source
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
