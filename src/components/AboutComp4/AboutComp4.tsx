import styles from "components/AboutComp4/AboutComp4.module.css";
import img1 from "components/AboutComp4/assets/Rectangle 63.png";
const AboutComp4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.symb} />
      <div className={styles.contain}>
        <img src={img1} alt="" />

        <div>
          Golden Royce Design as your trusted partner for cyber security,
          digital marketing & advertising, and IT solutions and services. With
          our comprehensive expertise, client-centric approach, and dedication
          to staying at the forefront of technology, we are committed to helping
          your business thrive in the digital age.
        </div>
      </div>
    </div>
  );
};

export default AboutComp4;
