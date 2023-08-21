import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from "components/HomeComp1/HomeComp1.module.css";
import InfiniteScrollList from "components/HomeComp1/InfinteScroll";


const HomeComp1 = () => {
  const [isInView, setIsInView] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const textToType = 'Creativity and Expertise';
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true)
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < textToType.length) {
          setTypewriterText(textToType.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust the typing speed here
      return () => {
        clearInterval(interval);
      };
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <div className={styles.contentsuper}>
        <div ref={ref} className={styles.content1}>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.9 }}
            className={styles.para1}
          >
            DIVE INTO THE UNIVERSE OF
          </motion.p>
          <motion.p 
           initial={{ opacity: 0, x: -20 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
           transition={{ duration: 0.9 }}
          className={styles.para2}>GOLDEN ROYCE DESIGN</motion.p>
        </div>
        <div className={styles.content2}>
          <p className={styles.para3}>Powerhouse of</p>
          <p className={styles.para3}>{typewriterText}</p>
        </div>
        <div className={styles.content3}>
          <InfiniteScrollList />
        </div>
      </div>
    </div>
  );
};

export default HomeComp1;
