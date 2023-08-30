import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "components/HomeComp2/HomeComp2.module.css";
import imag1 from "components/HomeComp2/assets/comp1.png";
import imag2 from "components/HomeComp2/assets/comp2.png";
import logo from "components/HomeComp2/assets/logo.png";
const HomeComp2 = () => {
  const navigate = useNavigate();
  const [column1Visible, setColumn1Visible] = useState(false);
  const [column3Visible, setColumn3Visible] = useState(false);

  const { ref: column1Ref, inView: column1InView } = useInView({
    threshold: 0.1,
  });
  const { ref: column3Ref, inView: column3InView } = useInView({
    threshold: 0.1,
  });
  const column1Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const column3Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    if (column1InView) {
      setColumn1Visible(true);
    }
  }, [column1InView]);

  useEffect(() => {
    if (column3InView) {
      setColumn3Visible(true);
    }
  }, [column3InView]);

  return (
    <div className={styles.container}>
      <div className={styles.column1}>
        <div className={styles.overlay}></div>
        <div className={styles.boxcontent1}>
          <div className={styles.decor1}></div>
          <motion.div
            className={styles.contentcontent1}
            variants={column1Variants}
            initial="hidden"
            animate={column1Visible ? "visible" : "hidden"}
            ref={column1Ref}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.about}>About Us</div>
            <div className={styles.aboutcontent}>
              We are a dynamic and innovative company specializing in three key
              verticals: Cyber Security, IT Solutions & all things marketing.
            </div>
            <div className={styles.know} onClick={() => navigate("/about#about")}>
              Know More &rarr;
            </div>
          </motion.div>
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
          <motion.div
            className={styles.contentcontent2}
            variants={column3Variants}
            initial="hidden"
            animate={column3Visible ? "visible" : "hidden"}
            ref={column3Ref}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.why}>Why Us ?</div>
            <div className={styles.whycontent}>
              Choose Golden Royce Design as your trusted partner for cyber
              security, IT Solutions & all things marketing.
            </div>
            <div className={styles.know} onClick={() => navigate("/about#why")}>
              Know More &rarr;
            </div>
          </motion.div>
        </div>
        <img src={imag2} alt="" />
      </div>
    </div>
  );
};

export default HomeComp2;
