 import skills from "../../data/skills.json"
 import styles from "./Experience.module.css"
 const Experience = () => {
   return (
     <section className={styles.container} id="skills">
        <h2 className={styles.title}>Technical Skills</h2>
            <div className={styles.skills}>
                {
                  skills.map((skills,id) => {
                     return <div key={id}>
                           <div className={styles.skillImageContainer}>
                              <img src={skills.imageSrc} alt={skills.title} />

                           </div>
                           <p>{skills.title}</p>
                     </div>
                  })
                }
            </div>
     </section>
   )
 }
 
 export default Experience