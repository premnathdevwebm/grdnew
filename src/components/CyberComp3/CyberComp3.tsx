import styles from "components/CyberComp3/CyberComp3.module.css";
import image1 from "components/CyberComp3/assets/Rectangle 139.png"
const CyberComp3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.cyber}>Cyber Security</p>{" "}
        <p className={styles.service}>Services</p>
      </div>
      <div className={styles.content1}>
        <div className={styles.content11}>
          <h3>Application VA/PT</h3>
          <ul>
            <li>Web App Security Audit</li>
            <li>API Security Audit</li>
            <li>Thick Client Security Audit</li>
            <li> Secure Code Review </li>
            <li> Mobile App Security Audit</li>
            <li> Database Security Audit </li>
            <li> Website Security Audit</li>
          </ul>
        </div>
        <div className={styles.content12}>
        <img src={image1} alt="" />
        <div>
        <h3>Infra VA/PT</h3>
          <ul>
          <li>Host Level Security Audit</li>
          <li>lOT Security Audit</li> 
          <li>Wireless Security Audit</li>
          <li>Infra Security Audit</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CyberComp3;
