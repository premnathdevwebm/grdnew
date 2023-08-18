import styles from "components/HomeComp1/HomeComp1.module.css";
import InfiniteScrollList from "components/HomeComp1/InfinteScroll";
const HomeComp1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentsuper}>
        <div className={styles.content1}>
          <p className={styles.para1}>DIVE INTO THE UNIVERSE OF</p>
          <p className={styles.para2}>GOLDEN ROYCE DESIGN</p>
        </div>
        <div className={styles.content2}>
          <p className={styles.para3}>Powerhouse of Creativity and Expertise</p>
        </div>
        <div className={styles.content3}>
          <InfiniteScrollList />
        </div>
      </div>
    </div>
  );
};

export default HomeComp1;
