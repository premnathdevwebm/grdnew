import ItServeComp1 from "components/ItServeComp1/ItServeComp1"
import ItServeComp2 from "components/ItServeComp2/ItServeComp2"
import ItServeComp3 from "components/ItServeComp3/ItServeComp3"
import styles from "pages/ItServices.module.css"
const ItServices = () => {
  return (
    <div className={styles.container}>
      <ItServeComp1 />
      <ItServeComp2 />
      <ItServeComp3 />
    </div>
  )
}

export default ItServices