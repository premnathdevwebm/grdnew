import styles from "components/ItServeComp2/ItServeComp2.module.css"
import ScroolText from "components/ItServeComp2/ScrollingText"
const ItServeComp2 = () => {
  return (
    <div className={styles.container}>
      <ScroolText />
      <div className={styles.content}>
        <h3>IT SERVICES AND SOLUTIONS</h3>
        <p>Here's an overview of the IT services we offer at Golden Royce Designs
</p>
      </div>
    </div>
  )
}

export default ItServeComp2