import styles from "pages/FAQ.module.css"
import FAQComp1 from "components/FAQComp1/FAQComp1"
import FAQComp2 from "components/FAQComp2/FAQComp2"
const FAQ = () => {
  return (
    <div className={styles.contaner}>
      <FAQComp1 />
      <FAQComp2 />
    </div>
  )
}

export default FAQ