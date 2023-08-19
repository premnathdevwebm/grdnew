import styles from "components/AboutComp1/AboutComp1.module.css";

const AboutComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>GRD</h2>
        <div className={styles.content1}>
          <p>We Don’t Just Meet Expectations We Exceed Them.</p>
          <div className={styles.buttonsect}>
            <button className={styles.about}>About Us</button>
            <button className={styles.why}>Why Us ?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp1;
