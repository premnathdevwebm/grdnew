import { Link } from "react-router-dom";
import styles from "components/AboutComp1/AboutComp1.module.css";

const AboutComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>GRD</h2>
        <div className={styles.content1}>
          <p>We Don’t Just Meet Expectations We Exceed Them.</p>
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
