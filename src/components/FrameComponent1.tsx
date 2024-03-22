import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.section}>
        <img
          className={styles.backgroundLine3mkzzi26svgFIcon}
          alt=""
          src="/backgroundline-3mkzzi26svg-fill.svg"
        />
        <div className={styles.button}>
          <div className={styles.pathParent}>
            <div className={styles.path}>
              <h1 className={styles.heading1Container}>
                <p className={styles.getYourDedicated}>Get your dedicated</p>
                <p className={styles.designTeamIn}>design team in few</p>
                <p className={styles.minutes}>minutes</p>
              </h1>
              <div className={styles.skipTheHiring}>
                Skip the Hiring Hassle: Get a Design Team on Demand
              </div>
            </div>
            <button className={styles.link}>
              <div className={styles.contactMe}>CONTACT ME</div>
            </button>
          </div>
        </div>
        <img
          className={styles.divdorikSectionHwx9zrt5FraIcon}
          loading="lazy"
          alt=""
          src="/divdoriksectionhwx9zrt5framebottom.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
