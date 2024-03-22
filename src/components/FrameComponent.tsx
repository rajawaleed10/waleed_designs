import { FunctionComponent } from "react";
import Section2 from "./Section2";
import Section1 from "./Section1";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.symbolsInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.sectionParent}>
            <Section2 />
            <Section1
              digitalAds="Digital Ads"
              pitchDecks="Pitch Decks"
              logoDesign="Logo Design"
            />
          </div>
          <div className={styles.sectionGroup}>
            <Section1
              digitalAds="Banner Ads"
              pitchDecks="Brochures"
              logoDesign="Flyer Design"
              propWidth="92.5px"
              propMinWidth="92.5px"
              propWidth1="81.7px"
              propMinWidth1="81.7px"
            />
            <Section2 />
          </div>
        </div>
        <div className={styles.sectionHeading2OurWorkWrapper}>
          <h1 className={styles.sectionHeading}>Our Works</h1>
        </div>
        <div className={styles.cycleDetection}>
          <div className={styles.sectionWho}>
            Check Out Our Projects So That You Know That Your Are In Business
            With Experts
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
