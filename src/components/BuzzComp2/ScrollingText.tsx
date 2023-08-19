import Marquee from "react-fast-marquee";
import logo from "components/BuzzComp2/assets/logo_grd_RED.png";
import styles from "components/BuzzComp2/InfinteScroll.module.css"
import Item from "components/BuzzComp2/Item"
const ScrollingText: React.FC = () => {
  const items = ["DIGITAL MEDIA MARKETING", "PRINTING AND DESIGN", "CONTENT CREATION", "VISUAL STRATEGIES", "Packaging Solutions", "PROPOSAL PITCH & DESIGNING", "BRAND STRATEGY SERVICES", "Advertising Solutions"];

  return (
    <div className={styles.scroller}>
       <Marquee direction="right">
        {items.map((ele) => (
          <Item content={ele} logo={logo} />
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingText;