import { FunctionComponent } from "react";
import styles from "./DataAggregator.module.css";

const DataAggregator: FunctionComponent = () => {
  return (
    <div className={styles.dataAggregator}>
      <div className={styles.logicBranch}>
        <div className={styles.section}>
          <div className={styles.separator} />
          <div className={styles.heading4}>Professional Designers</div>
        </div>
        <textarea
          className={styles.section1}
          placeholder="Unique Designs"
          rows={7}
          cols={18}
        />
        <textarea
          className={styles.section2}
          placeholder="Unlimited Revisions"
          rows={7}
          cols={18}
        />
      </div>
    </div>
  );
};

export default DataAggregator;
