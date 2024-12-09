import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.signUpAndGet20OffToYouParent}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
        <Image
          className={styles.frameIcon}
          loading="lazy"
          width={20}
          height={20}
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.shopcoParent}>
          <h1 className={styles.shopco}>SHOP.CO</h1>
          <div className={styles.frameGroup}>
            <div className={styles.shopParent}>
              <div className={styles.shop}>Shop</div>
              <Image
                className={styles.frameIcon1}
                width={16}
                height={16}
                alt=""
                src="/frame-1.svg"
              />
            </div>
            <div className={styles.onSale}>On Sale</div>
            <div className={styles.newArrivals}>New Arrivals</div>
            <div className={styles.brands}>Brands</div>
          </div>
          <div className={styles.frameContainer}>
            <Image
              className={styles.emptyIcons}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-2.svg"
            />
            <div className={styles.searchForProducts}>
              Search for products...
            </div>
          </div>
          <div className={styles.emptyIconsParent}>
            <Image
              className={styles.emptyIcons}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-3.svg"
            />
            <Image
              className={styles.emptyIcons}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
