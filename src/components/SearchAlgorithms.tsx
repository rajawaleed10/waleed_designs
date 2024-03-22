import { FunctionComponent } from "react";
import Section from "./Section";
import styles from "./SearchAlgorithms.module.css";

const SearchAlgorithms: FunctionComponent = () => {
  return (
    <section className={styles.searchAlgorithms}>
      <div className={styles.frameParent}>
        <div className={styles.sectionHeading2TrustedWrapper}>
          <h1 className={styles.sectionHeading}>Trusted by Thousands</h1>
        </div>
        <div className={styles.sectionParent}>
          <Section
            reallyProfessionalAndUpTo="Really Professional And Up-To-Date Team, Thanks For The Assist"
            heading5AlexaHope="Janica Campbell"
            cEOJanicaLawCampbell="CEO, Janica Law Campbell"
          />
          <Section
            reallyProfessionalAndUpTo="I was genuinely blown away by their amazing team and precise work. Thanks"
            heading5AlexaHope="John Doe"
            cEOJanicaLawCampbell="Employee, Direct To Door LLC"
            propMinWidth="94.8px"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchAlgorithms;
