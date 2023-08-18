import { useState } from "react";
import styles from "components/Footer/Footer.module.css";
import logo from "components/Footer/assets/golden-royce-design-logo-1@2x.png";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("ENTER EMAIL ADDRESS");
  return (
    <div className={styles.container}>
      <div className={styles.subscribeUsParent}>
        <div className={styles.subscribeUs}>GET IN TOUCH</div>
        <input
          className={styles.enterEmailAddress}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button className={styles.contactNow}>CONTACT NOW</button>
      </div>
      <div className={styles.whatWeDoParent}>
        <div className={styles.whatWeDo1}>
          <div className={styles.flex}>
            <img src={logo} alt="Logo" className={styles.logoimg} />
          </div>
          <div className={styles.content}>
            <p className={styles.bold}>GOLDEN ROYCE DESIGN</p>
            <p className={styles.thin}>BUISNESS MADE SMART</p>
          </div>
          <div className={styles.fotterlogo}>
            <FaFacebook className={styles.logosocial} />
            <FaLinkedin className={styles.logosocial} />
            <FaInstagram className={styles.logosocial} />
            <FaWhatsapp className={styles.logosocial} />
          </div>
        </div>
        <div className={styles.whatWeDo2}></div>
      </div>
    </div>
  );
};

export default Footer;
