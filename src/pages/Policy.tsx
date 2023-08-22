import styles from 'pages/Policy.module.css'
import PolicyComp1 from "components/PolicyComp1/PolicyComp1"
import PolicyComp2 from 'components/PolicyComp2/PolicyComp2'
const Policy = () => {
  return (
    <div className={styles.container}>
      <PolicyComp1 />
      <PolicyComp2 />
    </div>
  )
}

export default Policy