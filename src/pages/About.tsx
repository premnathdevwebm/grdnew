import AboutComp1 from "components/AboutComp1/AboutComp1";
import AboutComp2 from "components/AboutComp2/AboutComp2";
import AboutComp3 from "components/AboutComp3/AboutComp3";
import AboutComp4 from "components/AboutComp4/AboutComp4";
import styles from "pages/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <AboutComp1 />
      <AboutComp2 />
      <AboutComp3 />
      <AboutComp4 />
    </div>
  );
};

export default About;
