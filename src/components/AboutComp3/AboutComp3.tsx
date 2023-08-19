import styles from "components/AboutComp3/AboutComp3.module.css";
import leftDash from "components/AboutComp3/assets/leftDash.svg";
import dash from "components/AboutComp3/assets/dash.svg";
import rightDash from "components/AboutComp3/assets/rightDash.svg";
const AboutComp3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cont1}>
          <h3 id="why">Why Us ?</h3>
        </div>
      </div>
      <div className={styles.context}>
        <div className={styles.contcont1}>
          <h4>UNPARALLELED EXPERTISE</h4>
          <img src={leftDash} alt="" />
          <div className={styles.points}>
            <ul>
              <li>
                Extensive industry experience in cyber security, digital
                marketing & advertising, and IT solutions and services.
              </li>
              <li>
                A team of highly skilled professionals with deep knowledge and
                certifications in their respective fields.
              </li>
              <li>
                Proven track record of delivering exceptional results for a
                diverse range of clients.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contcont2}>
          <h4>CLIENT CENTRIC APPROACH</h4>
          <img src={dash} alt="" />
          <div className={styles.points}>
            <ul>
              <li>
                A commitment to understanding your unique requirements,
                challenges, and goals.
              </li>
              <li>
                Tailored solutions that align with your business objectives and
                contribute to your success.
              </li>
              <li>
                Transparent communication, regular updates, and a focus on
                building long-term partnerships.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contcont3}>
          <h4>CUTTING-EDGE TECHNOLOGIES</h4>
          <img src={rightDash} alt="" />
          <div className={styles.points}>
            <ul>
              <li>
                Access to the latest tools, technologies, and frameworks to stay
                ahead in the rapidly evolving digital landscape.
              </li>
              <li>
                Continuous learning and exploration of emerging trends to
                provide innovative solutions to our clients.
              </li>
              <li>
                Implementation of industry best practices to ensure the highest
                quality standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp3;
