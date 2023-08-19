import styles from "components/ItServeComp1/ItServeComp1.module.css";
import ScroolText from "components/ItServeComp1/ScrollingText"
const ItServeComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>IT Solutions for your Business</h3>
        <p>Elevate your business with our comprehensive IT solutions, tailored for all - small ventures, startups, and enterprises. From optimizing infrastructure to boosting productivity, we're your partners in IT excellence.</p>
        <button>Know more</button>
      </div>
      <div className={styles.contet}>
        <ScroolText />
      </div>
    </div>
  );
};

export default ItServeComp1;
