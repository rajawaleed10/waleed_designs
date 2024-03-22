import { FunctionComponent } from "react";
import Section3 from "./Section3";
import styles from "./Column.module.css";

const Column: FunctionComponent = () => {
  return (
    <section className={styles.column}>
      <div className={styles.flex}>
        <div className={styles.divider}>
          <div className={styles.tab}>
            <h1 className={styles.sectionHeading}>Awesome Benefits</h1>
          </div>
          <div className={styles.sectionWho}>
            Frustrated by lengthy hiring processes? Get a dedicated design team
            tailored to your project in minutes. Access instant expertise,
            seamless collaboration, and efficient workflows to bring your
            creative vision to life – all without the overhead costs of an
            in-house team
          </div>
        </div>
        <div className={styles.popover}>
          <div className={styles.modal}>
            <Section3
              icon1L1b2m2k9svg="/icon1-l1b2m2k9svg.svg"
              heading4FastReliable={`Fast & Reliable`}
            />
            <Section3
              icon1L1b2m2k9svg="/icon2-vh9mevlcsvg@2x.png"
              heading4FastReliable="Fixed Monthly Price"
            />
            <Section3
              icon1L1b2m2k9svg="/icon3-g9hvqiwgsvg@2x.png"
              heading4FastReliable={`Flexible & Scalable`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Column;
