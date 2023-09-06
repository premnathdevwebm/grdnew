import { useState, useEffect } from "react";

import styles from "pages/Comming/Comming.module.css";

function ComingSoon1() {
  const targetDate = new Date("2023-09-12T00:00:00");
  const now = new Date();

  // Check if the target date is in the future
  const countdown =
    targetDate.getTime() > now.getTime()
      ? targetDate.getTime() - now.getTime()
      : 0;

  const [countdownValue, setCountdownValue] = useState(countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownValue((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevCountdown - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdownValue / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdownValue % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdownValue % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdownValue % (1000 * 60)) / 1000);

  return (
    <section className={styles["container"]}>
      <img
        src="https://img.freepik.com/free-vector/realistic-galaxy-background_52683-63534.jpg"
        alt=""
        className={styles["image"]}
      />
      <header>Website Coming Soon</header>
      <p>
        We are excited to announce that we will be launching soon and can't wait
        to share our new platform with you.
      </p>
      <div className={styles["time-content"]}>
        <div className={styles["time days"]}>
          <span className={styles["number"]}>
            {days < 10 ? `0${days}` : days}
          </span>
          <span className={styles["text"]}>days</span>
        </div>
        <div className={styles["time hours"]}>
          <span className={styles["number"]}>
            {hours < 10 ? `0${hours}` : hours}
          </span>
          <span className={styles["text"]}>hours</span>
        </div>
        <div className={styles["time minutes"]}>
          <span className={styles["number"]}>
            {minutes < 10 ? `0${minutes}` : minutes}
          </span>
          <span className={styles["text"]}>minutes</span>
        </div>
        <div className={styles["time seconds"]}>
          <span className={styles["number"]}>
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span className={styles["text"]}>seconds</span>
        </div>
      </div>
      <div className={styles["email-content"]}>
        <p>Subscribe now to get the latest updates!</p>
        <div className={styles["input-box"]}>
          <input type="email" placeholder="Enter your email..." />
          <button>Notify Me</button>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon1;
