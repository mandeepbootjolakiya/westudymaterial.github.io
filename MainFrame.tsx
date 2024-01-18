import { FunctionComponent } from "react";
import PinImage from "../components/PinImage";
import styles from "./MainFrame.module.css";

const MainFrame: FunctionComponent = () => {
  return (
    <div className={styles.mainFrame}>
      <div className={styles.mainFrameInner}>
        <header className={styles.class10MaterialParent}>
          <div className={styles.class10Material}>Class 10 Material</div>
          <div className={styles.contactAbout}>
            <div className={styles.frameWithContact}>
              <div className={styles.solutions}>Solutions</div>
            </div>
            <div className={styles.contact}>Contact</div>
            <div className={styles.about}>About</div>
          </div>
          <button className={styles.telegramIcon}>
            <div className={styles.telegramIconChild} />
            <i className={styles.telegram}>Telegram</i>
            <div className={styles.arrowVector}>
              <img
                className={styles.arrowVectorChild}
                alt=""
                src="/arrow-1.svg"
              />
            </div>
          </button>
        </header>
      </div>
      <div className={styles.clickHere}>{`CLICK HERE `}</div>
      <PinImage />
    </div>
  );
};

export default MainFrame;
