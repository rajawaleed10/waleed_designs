import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Section.module.css";

export type SectionType = {
  reallyProfessionalAndUpTo?: string;
  heading5AlexaHope?: string;
  cEOJanicaLawCampbell?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Section: FunctionComponent<SectionType> = ({
  reallyProfessionalAndUpTo,
  heading5AlexaHope,
  cEOJanicaLawCampbell,
  propMinWidth,
}) => {
  const heading5Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.section}>
      <img
        className={styles.quote0co9ugddsvgIcon}
        loading="lazy"
        alt=""
        src="/quote-0co9ugddsvg.svg"
      />
      <div className={styles.reallyProfessionalAnd}>
        {reallyProfessionalAndUpTo}
      </div>
      <div className={styles.audioHandler}>
        <div className={styles.separator} />
        <div className={styles.networkManager}>
          <div className={styles.heading5} style={heading5Style}>
            {heading5AlexaHope}
          </div>
          <div className={styles.ceoJanicaLawCampbell}>
            {cEOJanicaLawCampbell}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
