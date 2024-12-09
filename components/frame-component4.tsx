import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <Image
            className={styles.frameChild}
            loading="lazy"
            width={295}
            height={298}
            alt=""
            src="/frame-321@2x.png"
          />
          <div className={styles.tShirtWithTapeDetailsParent}>
            <b className={styles.tShirtWithTapeContainer}>
              T-
              <span className={styles.shirt}>SHIRT</span>
              {` `}
              <span className={styles.shirt}>WITH</span> T
              <span className={styles.shirt}>APE</span> D
              <span className={styles.shirt}>ETAILS</span>
            </b>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.starParent}>
                  <Image
                    className={styles.frameItem}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/star-1.svg"
                  />
                  <Image
                    className={styles.frameItem}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/star-2.svg"
                  />
                  <Image
                    className={styles.frameItem}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/filled-stars.svg"
                  />
                  <Image
                    className={styles.frameItem}
                    width={19}
                    height={19}
                    alt=""
                    src="/star-4.svg"
                  />
                  <Image
                    className={styles.frameChild2}
                    width={9}
                    height={17}
                    alt=""
                    src="/star-5-3.svg"
                  />
                </div>
                <div className={styles.div}>
                  <span>4.5/</span>
                  <span className={styles.span}>5</span>
                </div>
              </div>
              <b className={styles.b}>$120</b>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.image8Wrapper}>
                <Image
                  className={styles.image8Icon}
                  width={268}
                  height={402}
                  alt=""
                  src="/image-8@2x.png"
                />
              </div>
              <div className={styles.skinnyFitJeansParent}>
                <b className={styles.skinnyFitJeansContainer}>
                  S<span className={styles.shirt}>KINNY</span> F
                  <span className={styles.shirt}>IT</span> J
                  <span className={styles.shirt}>EANS</span>
                </b>
                <div className={styles.frameParent4}>
                  <div className={styles.frameDiv}>
                    <div className={styles.starParent}>
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/star-1.svg"
                      />
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/star-2.svg"
                      />
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/filled-stars.svg"
                      />
                      <Image
                        className={styles.frameChild2}
                        width={9}
                        height={17}
                        alt=""
                        src="/star-5.svg"
                      />
                    </div>
                    <div className={styles.div}>
                      <span>3.5/</span>
                      <span className={styles.span}>5</span>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <b className={styles.b1}>$240</b>
                    <b className={styles.b2}>$260</b>
                    <div className={styles.frameWrapper}>
                      <div className={styles.reviewWrapper}>
                        <div className={styles.review}>-20%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <Image
                className={styles.frameChild}
                loading="lazy"
                width={295}
                height={298}
                alt=""
                src="/frame-72@2x.png"
              />
              <div className={styles.checkeredShirtParent}>
                <b className={styles.tShirtWithTapeContainer}>
                  C<span className={styles.shirt}>HECKERED</span> S
                  <span className={styles.shirt}>HIRT</span>
                </b>
                <div className={styles.frameParent4}>
                  <div className={styles.frameParent8}>
                    <div className={styles.starContainer}>
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/star-1.svg"
                      />
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/star-2.svg"
                      />
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/filled-stars.svg"
                      />
                      <Image
                        className={styles.frameItem}
                        width={19}
                        height={19}
                        alt=""
                        src="/star-4.svg"
                      />
                      <Image
                        className={styles.frameChild2}
                        width={9}
                        height={17}
                        alt=""
                        src="/star-5-3.svg"
                      />
                    </div>
                    <div className={styles.div}>
                      <span>4.5/</span>
                      <span className={styles.span}>5</span>
                    </div>
                  </div>
                  <b className={styles.b3}>$180</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productInfo}>
            <div className={styles.productAction}>
              <div className={styles.viewAll}>View All</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <Image
            className={styles.frameChild}
            loading="lazy"
            width={295}
            height={298}
            alt=""
            src="/frame-73@2x.png"
          />
          <div className={styles.sleeveStripedTShirtParent}>
            <b className={styles.tShirtWithTapeContainer}>
              S<span className={styles.shirt}>LEEVE</span> S
              <span className={styles.shirt}>TRIPED</span> T-
              <span className={styles.shirt}>SHIRT</span>
            </b>
            <div className={styles.frameParent10}>
              <div className={styles.starParent}>
                <Image
                  className={styles.frameItem}
                  width={19}
                  height={19}
                  alt=""
                  src="/star-1.svg"
                />
                <Image
                  className={styles.frameItem}
                  width={19}
                  height={19}
                  alt=""
                  src="/star-2.svg"
                />
                <Image
                  className={styles.frameItem}
                  width={19}
                  height={19}
                  alt=""
                  src="/filled-stars.svg"
                />
                <Image
                  className={styles.frameItem}
                  width={19}
                  height={19}
                  alt=""
                  src="/star-4.svg"
                />
                <Image
                  className={styles.frameChild2}
                  width={9}
                  height={17}
                  alt=""
                  src="/star-5-3.svg"
                />
              </div>
              <div className={styles.div}>
                <span>4.5/</span>
                <span className={styles.span}>5</span>
              </div>
            </div>
            <div className={styles.group}>
              <b className={styles.b4}>$130</b>
              <b className={styles.b5}>$160</b>
              <div className={styles.frameWrapper}>
                <div className={styles.wrapper}>
                  <div className={styles.div4}>-30%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
