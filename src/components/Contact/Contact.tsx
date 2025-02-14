import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        </div>
        <ul>
            <li>
                <img src="public/contact/emailIcon.png" alt="Email Icon" />
                <a href="mailto:chaamankumar0007@gmail.com">chaamankumar0007@gmail.com</a>
            </li>
            <li>
                <img src="public/contact/githubIcon.png" alt="Github Icon" />
                <a href="https://github.com/AAMANKUMAR0007">github.com/AAMANKUMAR0007</a>
            </li>
            <li>
                <img src="public/contact/linkedinIcon.png" alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/aaman-kumar-ch">www.linkedin.com/aaman-kumar-ch</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact