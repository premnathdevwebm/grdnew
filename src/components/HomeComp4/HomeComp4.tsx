import styles from "components/HomeComp4/HomeComp4.module.css"
import symbol from "components/HomeComp4/assets/symbol.svg"
import Carousel from "components/HomeComp4/Carousel"
const HomeComp4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContain}>
        <div className={styles.testimonialContain}>
          <img className={styles.symbolTest} src={symbol} alt="" />
          <span className={styles.doublquoteMain}>&quot;</span>
          <p className={styles.title}>TESTIMONIALS</p>
          <div className={styles.carcarousel}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComp4