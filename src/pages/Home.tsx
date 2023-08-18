import styles from "pages/Home.module.css";
import HomeComp1 from "components/HomeComp1/HomeComp1";
import HomeComp2 from "components/HomeComp2/HomeComp2";
import HomeComp3 from "components/HomeComp3/HomeComp3";
import HomeComp4 from "components/HomeComp4/HomeComp4";
const Home = () => {
  return (
    <div className={styles.container}>
      <HomeComp1 />
      <HomeComp2 />
      <HomeComp3 />
      <HomeComp4 />
    </div>
  );
};

export default Home;
