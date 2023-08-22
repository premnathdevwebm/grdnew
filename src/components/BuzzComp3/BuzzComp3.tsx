import styles from "components/BuzzComp3/BuzzComp3.module.css"
import Carousel from "components/BuzzComp3/Carousel"

const BuzzComp3 = ({context}: {context:string}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentbuzz}>
      <Carousel context={context}/>
      </div>
    </div>
  )
}

export default BuzzComp3