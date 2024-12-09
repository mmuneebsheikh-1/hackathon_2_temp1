import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.findClothesThatMatchesYourParent}>
            <h1 className={styles.findClothesThat}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <div className={styles.browseThroughOur}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            <div className={styles.shopNowWrapper}>
              <div className={styles.shopNow}>Shop Now</div>
            </div>
          </div>
        </div>
        <Image
          className={styles.vectorIcon}
          loading="lazy"
          width={56}
          height={56}
          alt=""
          src="/vector.svg"
        />
        <Image
          className={styles.vectorIcon1}
          loading="lazy"
          width={104}
          height={104}
          alt=""
          src="/vector-1.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
