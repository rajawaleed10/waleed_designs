import { FunctionComponent } from "react";
import styles from "./Section2.module.css";

const Section2: FunctionComponent = () => {
  return (
    <div className={styles.section}>
      <div className={styles.button}>
        <img className={styles.imgIcon} alt="" src="/img.svg" />
        <div className={styles.websites}>Websites</div>
      </div>
      <div className={styles.button1}>
        <img className={styles.imgIcon1} alt="" src="/img.svg" />
        <input
          className={styles.emailTemplates}
          placeholder="Email Templates"
          type="text"
        />
      </div>
      <div className={styles.button2}>
        <img className={styles.imgIcon2} alt="" src="/img.svg" />
        <div className={styles.logoDesign}>Logo Design</div>
      </div>
    </div>
  );
};

export default Section2;
