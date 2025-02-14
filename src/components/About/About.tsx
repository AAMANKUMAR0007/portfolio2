
import styles from "./About.module.css";

 const About = () => {
   return (
     <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}> 
          <img src="public/about/aboutImage.png" alt="me sitting with a laptop" className={styles.aboutImage} />
          <ul className={styles.aboutItems}>
             <li className={styles.aboutItem}> 
              <img src="public/about/cursorIcon.png" alt="" /> 
              <div className={styles.aboutItemText}>
                 <h3>Frontend Developer</h3>
                 <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
              </div>
             </li>
             <li className={styles.aboutItem}> 
              <img src="public/about/serverIcon.png" alt="" /> 
              <div className={styles.aboutItemText}>
                 <h3>Backend Developer</h3>
                 <p>I have experience developing fast and optimized back-end systems ans APIs </p>
              </div>
             </li>
             <li className={styles.aboutItem}> 
              <img src="public/about/cursorIcon.png" alt="" /> 
              <div className={styles.aboutItemText}>
                 <h3>DevOps</h3>
                 <p>Proficient in Docker, Kubernetes, and Linux terminal commands.  Certified and eager to apply my skills.</p>
              </div>
             </li>
          </ul>
        </div>
     </section>
   )
 }
 
 export default About;
