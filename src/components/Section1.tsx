import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Section1.module.css";

export type Section1Type = {
  digitalAds?: string;
  pitchDecks?: string;
  logoDesign?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Section1: FunctionComponent<Section1Type> = ({
  digitalAds,
  pitchDecks,
  logoDesign,
  propWidth,
  propMinWidth,
  propWidth1,
  propMinWidth1,
}) => {
  const digitalAdsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const pitchDecksStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth1,
    };
  }, [propWidth1, propMinWidth1]);

  return (
    <div className={styles.section}>
      <div className={styles.button}>
        <img className={styles.imgIcon} alt="" src="/img.svg" />
        <div className={styles.digitalAds} style={digitalAdsStyle}>
          {digitalAds}
        </div>
      </div>
      <div className={styles.button1}>
        <img className={styles.imgIcon1} alt="" src="/img.svg" />
        <div className={styles.pitchDecks} style={pitchDecksStyle}>
          {pitchDecks}
        </div>
      </div>
      <div className={styles.button2}>
        <img className={styles.imgIcon2} alt="" src="/img.svg" />
        <div className={styles.logoDesign}>{logoDesign}</div>
      </div>
    </div>
  );
};

export default Section1;
