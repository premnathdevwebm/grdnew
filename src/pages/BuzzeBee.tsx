import BuzzComp1 from "components/BuzzComp1/BuzzComp1"
import BuzzComp2 from "components/BuzzComp2/BuzzComp2"
import BuzzComp3 from "components/BuzzComp3/BuzzComp3"
import styles from "pages/BuzzeBee.module.css"
const BuzzeBee = () => {
  return (
    <div className={styles.container}>
      <BuzzComp1 />
      <BuzzComp2 />
      <BuzzComp3 />
    </div>
  )
}

export default BuzzeBee