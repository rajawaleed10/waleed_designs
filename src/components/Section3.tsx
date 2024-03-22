import { FunctionComponent } from "react";
import styles from "./Section3.module.css";

export type Section3Type = {
  icon1L1b2m2k9svg?: string;
  heading4FastReliable?: string;
};

const Section3: FunctionComponent<Section3Type> = ({
  icon1L1b2m2k9svg,
  heading4FastReliable,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.separator} />
      <img
        className={styles.icon1L1b2m2k9svg}
        loading="lazy"
        alt=""
        src={icon1L1b2m2k9svg}
      />
      <div className={styles.heading4}>{heading4FastReliable}</div>
    </div>
  );
};

export default Section3;
