import { FunctionComponent } from "react";
import styles from "./PinImage.module.css";

const PinImage: FunctionComponent = () => {
  return (
    <section className={styles.pinImage}>
      <div className={styles.freeMaterialsTextParent}>
        <div className={styles.freeMaterialsText}>
          <div className={styles.oneText}>
            <div className={styles.oswaalSamplePaperText}>
              <div className={styles.allSamplePapersText}>
                <h2 className={styles.freeMaterials}>Free materials</h2>
              </div>
              <img
                className={styles.pinPngImage1Icon}
                loading="eager"
                alt=""
                src="/pinpngimage-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.questionBankText}>
            <div className={styles.twoText}>
              <div className={styles.frameWithQuestion}>
                <button className={styles.frameWithSingleText}>
                  <div className={styles.frameWithSingleTextChild} />
                  <div className={styles.one}>#one</div>
                </button>
                <div className={styles.oSWALSSamplePaper}>
                  <div className={styles.oswaalSamplePaperContainer}>
                    <p className={styles.oswaalSamplePaper}>
                      OSWAAL SAMPLE PAPER
                    </p>
                    <p className={styles.blankLine}>&nbsp;</p>
                  </div>
                </div>
              </div>
              <div className={styles.clickHereLink}>
                <div className={styles.allTheSampleContainer}>
                  <p className={styles.allTheSample}>All the sample paper</p>
                  <p className={styles.ofOswaalWith}>
                    of Oswaal with solutions
                  </p>
                  <p className={styles.forFree}>for free</p>
                </div>
                <div className={styles.threeText}>
                  <div className={styles.doubtSolvingText}>
                    <div className={styles.doubtSolvingTextChild} />
                    <div className={styles.clickHere}>{`CLICK HERE `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.samplePapersFrame}>
              <div className={styles.questionBankFrame}>
                <button className={styles.twoFrame}>
                  <div className={styles.twoFrameChild} />
                  <div className={styles.two}>#two</div>
                </button>
                <div className={styles.clickHereFrame}>
                  <div className={styles.questionBank}>Question Bank</div>
                </div>
              </div>
              <div className={styles.frameWithOSWALLogo}>
                <div className={styles.textFrameWithLink}>
                  <div className={styles.everyOneSaysContainer}>
                    <p
                      className={styles.everyOneSays}
                    >{`Every one says practice practice, and practice, here’s presenting `}</p>
                    <p className={styles.practiceSheet}>practice sheet.</p>
                  </div>
                  <div className={styles.clickHereToAccessQB}>
                    <div className={styles.rectangleShape}>
                      <div className={styles.rectangleShapeChild} />
                      <div className={styles.clickHere1}>{`CLICK HERE `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameForYouTubeLogo}>
          <div className={styles.textFrameWithEllipse}>
            <div className={styles.youTubeLogoFrame}>
              <div className={styles.youTubeLogoFrameChild} />
              <div className={styles.three}>#three</div>
            </div>
            <div className={styles.doubtSolvingFrames}>
              <div className={styles.rectangleShapeForEllipse}>
                <div className={styles.doubtSolving}>Doubt Solving</div>
                <div className={styles.weDontHaveContainer}>
                  <p
                    className={styles.weDontHave}
                  >{`We dont have teachers to solve doubt, but our creative team will `}</p>
                  <p className={styles.helpYouIncredibly}>
                    help you incredibly to solve your doubt, its beyond you
                    imagination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input className={styles.rectangleBoundingBox} type="text" />
      </div>
      <div className={styles.emptyFrame}>
        <button className={styles.frameWithEllipseAndArrow}>
          <div className={styles.frameWithEllipseAndArrowChild} />
          <div className={styles.youtube}>YouTube</div>
          <div className={styles.vectorArrowForNavigation}>
            <div className={styles.roundedEllipseShape} />
            <img
              className={styles.vectorArrowForNavigationChild}
              alt=""
              src="/arrow-2.svg"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default PinImage;
