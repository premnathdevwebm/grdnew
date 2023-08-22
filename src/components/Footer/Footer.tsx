import { useState } from "react";
import styles from "components/Footer/Footer.module.css";
import logo from "components/Footer/assets/golden-royce-design-logo-1@2x.png";
import logo1 from "components/Footer/assets/Facebook_logo_PNG12 3.png";
import logo2 from "components/Footer/assets/whatsapp 1.png";
import logo3 from "components/Footer/assets/Instagram_logo_PNG12 3.png";
import { Link } from "react-router-dom";

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
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={logo1} alt="" className={styles.logosocial} /></a>
          <a href="https://wa.me" target="_blank" rel="noreferrer"><img src={logo2} alt="" className={styles.logosocial} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <img src={logo3} alt="" className={styles.logosocial} /></a>
          </div>
        </div>
        <div className={styles.whatWeDo2}>
          <div className={styles.row}>
            <div className={styles.column}>
              <h3>What We Do</h3>
              <Link to="/verticals/cyber"><p>Cyber Security</p></Link>
              <Link to="/verticals/buzzebee"><p>Buzz - Bee</p></Link>
              <Link to="/verticals/itservice"><p>IT Services and Solutions</p></Link>
            </div>
            <div className={styles.column}>
              <h3>Company</h3>
              <Link to="/about"><p>About Us</p></Link>
            </div>
            <div className={styles.column}>
              <h3>Support</h3>
              <p>FAQ</p>
              <p>Policy</p>
              <p>Business</p>
            </div>
            <div className={styles.column}>
              <h3>Contact</h3>
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
