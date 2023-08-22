import styles from "pages/NoMatch.module.css"
const NoMatch = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>The page you're looking for doesn't exist.</p>
    </div>
  )
}

export default NoMatch