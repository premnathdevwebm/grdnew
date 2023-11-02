import InfiniteScrollList from "components/HomeComp1/InfinteScroll";
import styles from "components/HomeComp5/HomeComp5.module.css";

const HomeComp5 = () => {
  return (
    <section>
        <div className={styles.content3}>
          <InfiniteScrollList />
        </div>
    </section>
  )
}

export default HomeComp5