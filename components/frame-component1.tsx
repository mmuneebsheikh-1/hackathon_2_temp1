import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.itemButtonsParent, className].join(" ")}>
      <Image
        className={styles.itemButtonsIcon}
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/frame-6.svg"
      />
      <div className={styles.itemButtons}>
        <Image
          className={styles.itemButtonsIcon1}
          loading="lazy"
          width={20}
          height={20}
          alt=""
          src="/frame-7.svg"
        />
        <div className={styles.div}>1</div>
        <Image
          className={styles.itemButtonsIcon1}
          loading="lazy"
          width={20}
          height={20}
          alt=""
          src="/frame-8.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
