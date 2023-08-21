import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "components/AboutComp2/AboutComp2.module.css";

const AboutComp2 = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const paragraphVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content1}></div>
      <div className={styles.content2}>
        <h3 id="about">About Us</h3>
        <motion.p
          ref={ref}
          className={styles.paragraph}
          variants={paragraphVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          We are a dynamic and innovative company specializing in three key
          verticals: Cyber Security, Digital Marketing & Advertising, and IT
          Solutions and Services. Our mission is to empower businesses and
          individuals with cutting-edge technologies and strategies that drive
          exceptional results. At Golden Royce Design, we pride ourselves on our
          client-centric approach, partnering with you every step of the way to
          understand your goals, challenges, and aspirations. We are driven by a
          passion for innovation, excellence, and delivering measurable results.
          When you choose us, you gain a trusted partner committed to your
          success.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutComp2;
