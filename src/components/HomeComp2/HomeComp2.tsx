import { useNavigate } from 'react-router-dom';
import styles from "components/HomeComp2/HomeComp2.module.css";
import imag1 from "components/HomeComp2/assets/comp1.png";
import imag2 from "components/HomeComp2/assets/comp2.png";
import logo from "components/HomeComp2/assets/logo.png";
const HomeComp2 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <div className={styles.overlay}></div>
        <div className={styles.boxcontent1}>
          <div className={styles.decor1}></div>
          <div className={styles.contentcontent1}>
            <div className={styles.about}>About Us</div>
            <div  className={styles.aboutcontent}>
              We are a dynamic and innovative company specializing in three key
              verticals: Cyber Security, Digital Marketing & Advertising, and IT
              Solutions and Services.
            </div>
            <div className={styles.know} onClick={()=>navigate("/about")}>
              Know More &rarr;
            </div>
          </div>
        </div>
        <img src={imag1} alt="" />
      </div>
      <div className={styles.column2}>
        <img src={logo} alt=" " />
      </div>
      <div className={styles.column3}>
        <div className={styles.overlay}></div>
        <div className={styles.boxcontent2}>
          <div className={styles.decor2}></div>
          <div className={styles.contentcontent2}>
            <div className={styles.why}>Why Us ?</div>
            <div className={styles.whycontent}>
              Choose Golden Royce Design as your trusted partner for cyber
              security, digital marketing & advertising, and IT solutions and
              services.
            </div>
            <div className={styles.know} onClick={()=>navigate("/about#why")}>
              Know More &rarr;
            </div>
          </div>
        </div>
        <img src={imag2} alt="" />
      </div>
    </div>
  );
};

export default HomeComp2;
