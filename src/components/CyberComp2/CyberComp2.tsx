import styles from "components/CyberComp2/CyberComp2.module.css"
import ScrollingText from "components/CyberComp2/ScrollingText"
import Accordian from "./Accordian"

const CyberComp2 = () => {
  return (
    <div className={styles.container}>
      <div>
        <ScrollingText />
      </div>
      <div className={styles.content}>
        <h3>An Overview Of The <span>Services</span> We Provide</h3>
        <div>
          <Accordian />
        </div>
      </div>
    </div>
  )
}

export default CyberComp2