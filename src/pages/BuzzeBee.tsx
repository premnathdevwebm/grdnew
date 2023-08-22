import {useState} from "react"
import BuzzComp1 from "components/BuzzComp1/BuzzComp1"
import BuzzComp2 from "components/BuzzComp2/BuzzComp2"
import BuzzComp3 from "components/BuzzComp3/BuzzComp3"
import styles from "pages/BuzzeBee.module.css"
const BuzzeBee = () => {
  const [context, setContext] = useState("")
  function changeContext(change: string){
    setContext(change)
  }
  return (
    <div className={styles.container}>
      <BuzzComp1 />
      <BuzzComp2 changeContext={changeContext} />
      <BuzzComp3 context={context} />
    </div>
  )
}

export default BuzzeBee