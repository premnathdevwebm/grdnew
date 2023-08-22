import styles from "components/PolicyComp1/PolicyComp1.module.css"
import image1 from "components/PolicyComp1/assets/lock-and-password.png"
const PolicyComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textcont}>
          <h3>Teams and conditions</h3>
          <p>Welcome to GOLDEN ROYCE DESIGN's policy page. We are committed to maintaining a safe, secure, and productive environment for our employees, clients, and partners. Please familiarize yourself with our policies to ensure a positive experience for everyone.</p>
        </div>
        <div  className={styles.imgcont}>
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PolicyComp1