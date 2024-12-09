import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./review-slides1.module.css";

export type ReviewSlides1Type = {
  className?: string;
  alexK?: string;
  findingClothesThatAlignWith?: string;

  /** Style props */
  reviewSlidesFilter?: CSSProperties["filter"];
  alexKMinWidth?: CSSProperties["minWidth"];
};

const ReviewSlides1: NextPage<ReviewSlides1Type> = ({
  className = "",
  reviewSlidesFilter,
  alexK,
  alexKMinWidth,
  findingClothesThatAlignWith,
}) => {
  const reviewSlides1Style: CSSProperties = useMemo(() => {
    return {
      filter: reviewSlidesFilter,
    };
  }, [reviewSlidesFilter]);

  const alexKStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: alexKMinWidth,
    };
  }, [alexKMinWidth]);

  return (
    <div
      className={[styles.reviewSlides, className].join(" ")}
      style={reviewSlides1Style}
    >
      <div className={styles.reviewSlidesInner}>
        <div className={styles.frameParent}>
          <div className={styles.starParent}>
            <Image
              className={styles.frameChild}
              width={23}
              height={23}
              alt=""
              src="/star-1-8.svg"
            />
            <Image
              className={styles.frameChild}
              width={23}
              height={23}
              alt=""
              src="/star-2-8.svg"
            />
            <Image
              className={styles.frameChild}
              width={23}
              height={23}
              alt=""
              src="/star-3-8.svg"
            />
            <Image
              className={styles.frameChild}
              width={23}
              height={23}
              alt=""
              src="/star-4-6.svg"
            />
            <Image
              className={styles.frameChild}
              width={23}
              height={23}
              alt=""
              src="/star-5-6.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.alexKParent}>
              <b className={styles.alexK} style={alexKStyle}>
                {alexK}
              </b>
              <Image
                className={styles.frameIcon}
                width={24}
                height={24}
                alt=""
                src="/frame-51.svg"
              />
            </div>
            <div className={styles.findingClothesThat}>
              {findingClothesThatAlignWith}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlides1;
