import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import styles from "components/AboutComp4/AboutComp4.module.css";
import img1 from "components/AboutComp4/assets/Rectangle 63.png";
const AboutComp4 = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const handleDownload = (brochureName:keyof typeof brochurePaths) => {
    // Replace with the actual paths to your PDF brochures
    const brochurePaths = {
      Broucher1: "./assets/Golden Royce Design 🌎.pdf",
      Broucher2: "./assets/Golden Royce Design 🌎.pdf",
      Broucher3: "./assets/Golden Royce Design 🌎.pdf",
    };

    const pdfUrl = brochurePaths[brochureName];
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = `${brochureName}.pdf`;
    anchor.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.symb} />
      <div className={styles.contain}>
        <img src={img1} alt="" />

        <motion.div
          ref={ref}
          variants={paragraphVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Golden Royce Design as your trusted partner for cyber security,
          digital marketing & advertising, and IT solutions and services. With
          our comprehensive expertise, client-centric approach, and dedication
          to staying at the forefront of technology, we are committed to helping
          your business thrive in the digital age.
        </motion.div>
      </div>
      <div className={styles["broucher-container"]}>
        <div className={styles.bruchers}>
        <button onClick={() => handleDownload("Broucher1")}>
            <FaCloudDownloadAlt /> Brochure1
          </button>
          <button onClick={() => handleDownload("Broucher2")}>
            <FaCloudDownloadAlt /> Brochure2
          </button>
          <button onClick={() => handleDownload("Broucher3")}>
            <FaCloudDownloadAlt /> Brochure3
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComp4;
