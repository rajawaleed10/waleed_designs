import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Column from "../components/Column";
import Constraints from "../components/Constraints";
import DataAggregator from "../components/DataAggregator";
import FrameComponent from "../components/FrameComponent";
import ShortestPath from "../components/ShortestPath";
import SearchAlgorithms from "../components/SearchAlgorithms";
import OutputProcessor from "../components/OutputProcessor";
import styles from "./WaleedDesigns.module.css";

const WaleedDesigns: FunctionComponent = () => {
  return (
    <div className={styles.waleedDesigns}>
      <header className={styles.container}>
        <div className={styles.waleedDesigns21Parent}>
          <img
            className={styles.waleedDesigns21}
            loading="lazy"
            alt=""
            src="/waleed-designs-2-1@2x.png"
          />
          <div className={styles.waleedDesignsWrapper}>
            <h3 className={styles.waleedDesigns1}>Waleed Designs</h3>
          </div>
        </div>
      </header>
      <FrameComponent1 />
      <Column />
      <Constraints />
      <section className={styles.listItemWrapper}>
        <div className={styles.listItem}>
          <div className={styles.sectionHeading32GetYWrapper}>
            <h2 className={styles.sectionHeading}>
              #2 Get your design in 1 day
            </h2>
          </div>
          <img
            className={styles.sectionIllustration2K45mm}
            loading="lazy"
            alt=""
            src="/section--illustration1-nppeand8svg.svg"
          />
        </div>
      </section>
      <section className={styles.waleedDesignsInner}>
        <div className={styles.frameParent}>
          <div className={styles.sectionHeading33RevieWrapper}>
            <h2 className={styles.sectionHeading1}>#3 Review and approve</h2>
          </div>
          <img
            className={styles.sectionIllustration3Fei84}
            loading="lazy"
            alt=""
            src="/section--illustration3-fei842l7svg.svg"
          />
        </div>
      </section>
      <section className={styles.symbolsWrapper}>
        <div className={styles.symbols}>
          <div className={styles.effects}>
            <div className={styles.maps}>
              <div className={styles.icons}>
                <h1 className={styles.sectionHeading2}>Why Choose Us?</h1>
              </div>
              <div className={styles.sectionWho}>
                Ditch the hiring hassle! Get a custom design team built for your
                project in minutes. Access instant expertise, seamless
                collaboration, and cost-effective solutions – all to bring your
                vision to life, faster.
              </div>
            </div>
          </div>
          <DataAggregator />
          <div className={styles.inputProcessor}>
            <div className={styles.outputCollector}>
              <h1 className={styles.sectionHeadingContainer}>
                <span className={styles.sectionHeadingContainer1}>
                  <p className={styles.weProvideWide}>We Provide Wide Range</p>
                  <p
                    className={styles.ofDesign}
                  >{`of Design & Development Services`}</p>
                </span>
              </h1>
            </div>
            <div
              className={styles.sectionWho1}
            >{`We're your design & development dream team! From branding and UI/UX design to expert development and content creation, we handle everything, all under one roof. Save time, money, and get a stunning, functional product – let's chat about your vision!`}</div>
          </div>
          <FrameComponent />
          <ShortestPath />
        </div>
      </section>
      <SearchAlgorithms />
      <OutputProcessor />
    </div>
  );
};

export default WaleedDesigns;
