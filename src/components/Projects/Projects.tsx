import projectsData from "../../data/projects.json"; // Import your JSON data
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

// Add IDs to projects if they are missing.  This is best done when you create the JSON data, but this code handles it if they are missing.
const projects = projectsData.map((project, index) => ({
    ...project,
    id: project.id || index // Use existing ID or generate one
}));

const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} /> // Use project.id as key
                ))}
            </div>
        </section>
    );
};

export default Projects;
