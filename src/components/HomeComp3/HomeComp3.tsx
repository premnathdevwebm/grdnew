import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "components/HomeComp3/HomeComp3.module.css";
import img1 from "components/HomeComp3/assets/Rectangle 27.png";
import img2 from "components/HomeComp3/assets/Rectangle 91.png";
import img3 from "components/HomeComp3/assets/Rectangle 92.png";

const HomeComp3 = () => {
  const navigate = useNavigate();

  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView1) {
      setAnimate1(true);
    }
    if (inView2) {
      setAnimate2(true);
    }
    if (inView3) {
      setAnimate3(true);
    }
  }, [inView1, inView2, inView3]);

  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <div className={styles.vertical}>VERTICALS</div>
        <div className={styles.vertContent}>
          <div className={styles.vertContent1} ref={ref1}>
            <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={animate1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.9 }}
            >
              <img className={styles.contimage} src={img1} alt="" />
              <div>
                <p className={styles.capcontent}>BUZZ-BEE</p>
                <div className={styles["knowcontainer"]}>
                  <p
                    className={styles.know}
                    onClick={() => navigate("/verticals/buzzebee")}
                  >
                    know more
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.vertContent2} ref={ref2}>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animate2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9 }}
            >
              <img className={styles.contimage} src={img2} alt="" />
              <div>
                <p className={styles.capcontent}>IT SERVICES & SOLUTIONS</p>
                <div className={styles["knowcontainer"]}>
                  <p
                    className={styles.know}
                    onClick={() => navigate("/verticals/itservice")}
                  >
                    know more
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.vertContent3} ref={ref3}>
            <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={animate3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
             transition={{ duration: 0.9 }}
            >
              <img className={styles.contimage} src={img3} alt="" />
              <div>
                <p className={styles.capcontent}>CYBER SECURITY</p>
                <div className={styles["knowcontainer"]}>
                  <p
                    className={styles.know}
                    onClick={() => navigate("/verticals/cyber")}
                  >
                    know more
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComp3;
