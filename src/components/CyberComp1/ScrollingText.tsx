import Marquee from "react-fast-marquee";
import logo from "components/CyberComp1/assets/logo_grd_RED.png";
import styles from "components/CyberComp1/InfinteScroll.module.css"
import Item from "components/CyberComp1/Item"
const ScrollingText: React.FC = () => {
  const items = ["VULNERABILITY ASSESSMENTS", "PENETRATION TESTING", "SECURITY AUDITS", "INCIDENT RESPONSE"];

  return (
    <div className={styles.scroller}>
       <Marquee>
        {items.map((ele) => (
          <Item content={ele} logo={logo} />
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingText;