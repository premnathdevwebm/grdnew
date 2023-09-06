import { useState, useEffect } from "react";

import styles from "pages/Comming/Comming.module.css";

function ComingSoon1() {

  const [secValue, setSecValue] = useState(11);
  const [minValue, setMinValue] = useState(2);
  const [hourValue, setHourValue] = useState(2);
  const [dayValue, setDayValue] = useState(4);

  useEffect(() => {
    const timeFunction = setInterval(() => {
      setSecValue((prevSecValue) => {
        if (prevSecValue === 0) {
          setMinValue((prevMinValue) => {
            if (prevMinValue === 0) {
              setHourValue((prevHourValue) => {
                if (prevHourValue === 0) {
                  setDayValue((prevDayValue) => {
                    if (prevDayValue === 0) {
                      clearInterval(timeFunction);
                      return 0;
                    }
                    return prevDayValue - 1;
                  });
                  return 24;
                }
                return prevHourValue - 1;
              });
              return 60;
            }
            return prevMinValue - 1;
          });
          return 60;
        }
        return prevSecValue - 1;
      });
    }, 1000);

    return () => clearInterval(timeFunction);
  }, []);

  return (
    <section className={styles["container"]}>
      <img
        src="https://goldenroycedesign.com/static/media/firstimage.4c15eb589e522965764b.png"
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
          <span className={styles["number"]}>{dayValue < 10 ? `0${dayValue}` : dayValue}</span>
          <span className={styles["text"]}>days</span>
        </div>
        <div className={styles["time hours"]}>
          <span className={styles["number"]}>{hourValue < 10 ? `0${hourValue}` : hourValue}</span>
          <span className={styles["text"]}>hours</span>
        </div>
        <div className={styles["time minutes"]}>
          <span className={styles["number"]}>{minValue < 10 ? `0${minValue}` : minValue}</span>
          <span className={styles["text"]}>minutes</span>
        </div>
        <div className={styles["time seconds"]}>
          <span className={styles["number"]}>{secValue < 10 ? `0${secValue}` : secValue}</span>
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
