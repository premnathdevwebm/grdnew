import styles from "components/BuzzComp1/BuzzComp1.module.css"
import image1 from "components/BuzzComp1/assets/pngwing 5.png"
import ScrollingText from "components/BuzzComp1/ScrollingText"
const BuzzComp1 = () => {
  return (
    <>
    <div className={styles.container}>
      <img src={image1} alt="" className={styles.top1} />
      <h3>Welcome to <span>BUZZ BEE</span></h3>
      <p>where we transform brands into digital powerhouses! Discover why you'll love becoming our valued client and unlock the full potential of your business.</p>
      <button>Know more</button>
    </div>
    <div>
    <ScrollingText />
    </div>
    </>
  )
}

export default BuzzComp1