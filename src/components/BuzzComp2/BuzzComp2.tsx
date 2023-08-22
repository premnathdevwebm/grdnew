import * as React from "react";
import styles from "components/BuzzComp2/BuzzComp2.module.css";
import ScrollingText from "components/BuzzComp2/ScrollingText";
import image1 from "components/BuzzComp2/assets/digital marketing 1.png";
import image2 from "components/BuzzComp2/assets/print 1.png";
import image3 from "components/BuzzComp2/assets/copy-writing 1.png";
import image4 from "components/BuzzComp2/assets/data-visualization 1.png";
import image5 from "components/BuzzComp2/assets/proposal 1.png";
import image6 from "components/BuzzComp2/assets/brand strategy 1.png";
import image7 from "components/BuzzComp2/assets/Advertising Solution 1.png";
import image8 from "components/BuzzComp2/assets/package 1.png";

interface BuzzComp2Props {
  changeContext: (change: string) => void;
}

const BuzzComp2: React.FC<BuzzComp2Props> = ({ changeContext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ScrollingText />
      </div>
      <div className={styles["grid-container"]}>
        <div
          className={styles["grid-item"]}
          onClick={() => changeContext("DIGITAL MEDIA MARKETING")}
        >
          <img src={image1} alt="" />
          <p>DIGITAL MEDIA MARKETING</p>
        </div>
        <div
          className={styles["grid-item1"]}
          onClick={() => changeContext("PRINTING AND DESIGN")}
        >
          <img src={image2} alt="" />
          <p>PRINTING AND DESIGN</p>
        </div>
        <div
          className={styles["grid-item2"]}
          onClick={() => changeContext("CONTENT CREATION")}
        >
          <img src={image3} alt="" />
          <p>CONTENT CREATION</p>
        </div>
        <div
          className={styles["grid-item3"]}
          onClick={() => changeContext("VISUAL STRATEGIES")}
        >
          <img src={image4} alt="" />
          <p>VISUAL STRATEGIES</p>
        </div>
        <div className={styles["grid-item4"]}>
          <p>Under BUZZ BEE</p>
          <i>We provide Digital Marketing Services Such as</i>
        </div>
        <div
          className={styles["grid-item5"]}
          onClick={() => changeContext("PROPOSAL, PITCH & DESIGNING")}
        >
          <img src={image5} alt="" />
          <p>PROPOSAL, PITCH & DESIGNING</p>
        </div>
        <div
          className={styles["grid-item6"]}
          onClick={() => changeContext("BRAND STRATEGY SERVICES")}
        >
          <img src={image6} alt="" />
          <p>BRAND STRATEGY SERVICES</p>
        </div>
        <div
          className={styles["grid-item7"]}
          onClick={() => changeContext("ADVERTISING SOLUTIONS")}
        >
          <img src={image7} alt="" />
          <p>ADVERTISING SOLUTIONS</p>
        </div>
        <div
          className={styles["grid-item8"]}
          onClick={() => changeContext("PACKAGING SOLUTIONS")}
        >
          <img src={image8} alt="" />
          <p>PACKAGING SOLUTIONS</p>
        </div>
      </div>
    </div>
  );
};

export default BuzzComp2;
