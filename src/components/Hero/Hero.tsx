import styles from "./Hero.module.css"; // Imports the CSS styles

const Hero = () => {
  return (
    <section className={styles.container}> {/* The main container */}
      <div className={styles.content}> {/* The content area (text) */}
        <h1 className={styles.title}>Hi, I am Aaman</h1> {/* The title */}
        <p className={styles.description}> {/* The description */}
          I'm a Full-stack developer with 3 years of experience in React and Node.js.
          Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:chaamankumar0007@gmail.com">
          Contact Me {/* The contact button */}
        </a>
      </div>
      <img
        className={styles.heroImg} // The image
        src="public/hero/portfolio_cropped.png" // Image source
        alt="Image of me" // Alt text for accessibility
      />
      <div className={styles.topBlur} /> {/* Top blur effect */}
      <div className={styles.bottomBlur} /> {/* Bottom blur effect */}
    </section>
  );
};

export default Hero;