import Marquee from "react-fast-marquee";
import logo from "components/HomeComp1//assets/logo_grd_RED.png";
import styles from "components/HomeComp1/InfinteScroll.module.css"
import Item from "components/HomeComp1/Item"
const ScrollingText: React.FC = () => {
  const items = ["BUZZY - BEE", "IT SERVICES & SOLUTIONS", "CYBER SECURITY", "BUZZY - BEE", "IT SERVICES & SOLUTIONS", "CYBER SECURITY"];

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
