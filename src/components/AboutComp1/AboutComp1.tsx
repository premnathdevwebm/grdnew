import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import styles from "components/AboutComp1/AboutComp1.module.css";

const AboutComp1 = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const textToType = "GRD";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < textToType.length) {
        setTypewriterText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{typewriterText}</h2>
        <div className={styles.content1}>
          <p>"We Don’t Just Meet Expectations We Exceed Them.</p>
          <div className={styles.buttonsect}>
           <Link to="#about"> <button className={styles.about}>About Us</button></Link>
           <Link to="#why">  <button  className={styles.why}>Why Us ?</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp1;
