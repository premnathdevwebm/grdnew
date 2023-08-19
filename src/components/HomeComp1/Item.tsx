import { useNavigate } from "react-router-dom";
import styles from "components/HomeComp1/Item.module.css";
const Item = ({ content, logo }: { content: string; logo: string }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (content === "BUZZ- BEE") {
          navigate("verticals/buzzebee");
        } else if (content === "IT SERVICES & SOLUTIONS") {
          navigate("verticals/itservice");
        } else {
          navigate("verticals/cyber");
        }
      }}
      className={styles.container}
    >
      {content} <img src={logo} alt="" />
    </div>
  );
};

export default Item;
