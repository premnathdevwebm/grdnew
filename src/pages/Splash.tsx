import styles from "pages/Splash.module.css"
import SplashComp from "components/SplashComp/SplashComp"
const Splash = () => {
  return (
    <div className={styles.container}>
        <SplashComp />
    </div>
  )
}

export default Splash