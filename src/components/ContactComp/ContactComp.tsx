import styles from "components/ContactComp/ContactComp.module.css";
const ContactComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <h3>Let’s Work Together!</h3>
        <p>
          Let us help you become even greater at what you do. Fill out the
          following form and we will get back to you in the next 24 hours.
        </p>
      </div>
      <div className={styles.content2}>
        <div className={styles["form-container"]}>
          <div className={styles.column1}>
            <div className={styles.row}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.row}>
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" />
            </div>
          </div>
          <div className={styles.column2}>
            <textarea placeholder="Enter Message Here..."></textarea>
          </div>
          <div className={styles.column3}>
            <button>Submit &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
