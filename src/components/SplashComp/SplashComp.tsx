import styles from 'components/SplashComp/SplashComp.module.css'
import image1 from "components/SplashComp/assets/logo_figma 1.png"
const SplashComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles["fire-background"]} />
      <img src={image1} alt='lion' />
    </div>
  )
}

export default SplashComp