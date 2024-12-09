import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.groupWrapper}>
          <Image
            className={styles.groupIcon}
            loading="lazy"
            width={167}
            height={33}
            alt=""
            src="/group.svg"
          />
        </div>
        <Image
          className={styles.zaraLogo11Icon}
          loading="lazy"
          width={91}
          height={38}
          alt=""
          src="/zaralogo1-1.svg"
        />
        <div className={styles.gucciLogo11Wrapper}>
          <Image
            className={styles.gucciLogo11Icon}
            loading="lazy"
            width={156}
            height={36}
            alt=""
            src="/guccilogo1-1.svg"
          />
        </div>
        <div className={styles.pradaLogo11Wrapper}>
          <Image
            className={styles.pradaLogo11Icon}
            loading="lazy"
            width={194}
            height={32}
            alt=""
            src="/pradalogo1-1.svg"
          />
        </div>
        <div className={styles.groupWrapper}>
          <Image
            className={styles.groupIcon1}
            loading="lazy"
            width={207}
            height={33}
            alt=""
            src="/group-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
