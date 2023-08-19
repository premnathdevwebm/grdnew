import Marquee from "react-fast-marquee";
import logo from "components/ItServeComp1/assets/logo_grd_RED.png";
import styles from "components/ItServeComp1/InfinteScroll.module.css"
import Item from "components/ItServeComp1/Item"
const ScrollingText: React.FC = () => {
  const items = ["IT CONSULTING", "NETWORK DESIGN AND IMPLEMENTATION", "CLOUD SERVICES", "SYSTEM INTEGRATION"];

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