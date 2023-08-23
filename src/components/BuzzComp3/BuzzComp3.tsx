import styles from "components/BuzzComp3/BuzzComp3.module.css"
import Carousel from "components/BuzzComp3/Carousel"

const BuzzComp3 = ({context, changeContext}: {context:string, changeContext: any}) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentbuzz}>
      <Carousel context={context} changeContext={changeContext}/>
      </div>
    </div>
  )
}

export default BuzzComp3