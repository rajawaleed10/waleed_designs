import { FunctionComponent } from "react";
import styles from "./Constraints.module.css";

const Constraints: FunctionComponent = () => {
  return (
    <section className={styles.constraints}>
      <div className={styles.layout}>
        <div className={styles.scroll}>
          <h1 className={styles.sectionHeading}>How Waleed Designs Work</h1>
          <div className={styles.panels}>
            <div className={styles.sectionWho}>
              Waleed Designs work in a very positive and accurate way as
              requested by our clients
            </div>
          </div>
        </div>
        <div className={styles.forms}>
          <div className={styles.tables}>
            <div className={styles.charts}>
              <h2 className={styles.sectionHeading1}>#1 Submit your request</h2>
            </div>
            <img
              className={styles.sectionIllustration1Nppea}
              loading="lazy"
              alt=""
              src="/section--illustration1-nppeand8svg.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Constraints;
