import CyberComp1 from "components/CyberComp1/CyberComp1"
import CyberComp2 from "components/CyberComp2/CyberComp2"
import CyberComp3 from "components/CyberComp3/CyberComp3"
import styles from "pages/CyberSecurity.module.css"
const CyberSecurity = () => {
  return (
    <div className={styles.container}>
      <CyberComp1 />
      <CyberComp2 />
      <CyberComp3 />
    </div>
  )
}

export default CyberSecurity