import styles from "components/CyberComp1/CyberComp1.module.css";
import ScrollText from "components/CyberComp1/ScrollingText";
const CyberComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <p>CYBER SECURITY</p>
      </div>
      <div className={styles.content2}>
        <p>
          Our team of experienced cyber security experts is dedicated to
          understanding your unique security needs and providing tailored
          solutions to mitigate risks effectively. Whether you're a small
          business, a multinational corporation, or an individual seeking to
          safeguard your digital presence, we have the expertise to handle
          diverse requirements
        </p>
        <button>Connect Us</button>
      </div>
      <div className={styles.content3}>
        <ScrollText />
      </div>
    </div>
  );
};

export default CyberComp1;
