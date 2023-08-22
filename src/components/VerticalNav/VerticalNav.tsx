import { useState } from "react";
import chatbotimg from "components/VerticalNav/assets/lion3x-1@2x.png";
import chatbotClose from "components/VerticalNav/assets/lion3x-2@2x.png";
import faceBookLogo from "components/VerticalNav/assets/Frame 74.png";
import instagramLogo from "components/VerticalNav/assets/Frame 75.png";
import whatsappLogo from "components/VerticalNav/assets/Frame 76.png";
import styles from "components/VerticalNav/VerticalNav.module.css";

const VerticalNav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <div className={styles.rectangleParent4}>
      <div className={styles.groupChild14} />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.lion3x1Icon}
        alt=""
        src={!showLinks ? chatbotimg : chatbotClose}
        onClick={toggleLinks}
      />
      <b className={styles.connect} onClick={toggleLinks}>
        ROAR WITH US!
      </b>
      <div
        className={
          showLinks
            ? `${styles.socialLinks} ${styles.show}`
            : styles.socialLinks
        }
      >
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img className={styles.socIcon} alt="social" src={faceBookLogo} />
        </a>
        <a href="https://wa.me" target="_blank" rel="noreferrer">
          <img className={styles.socIcon} alt="social" src={whatsappLogo} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img className={styles.socIcon} alt="social" src={instagramLogo} />
        </a>
      </div>
    </div>
  );
};

export default VerticalNav;
