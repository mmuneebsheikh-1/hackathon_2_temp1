import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./review-slides.module.css";

export type ReviewSlidesType = {
  className?: string;

  /** Style props */
  reviewSlidesMarginLeft?: CSSProperties["marginLeft"];
  reviewSlidesFilter?: CSSProperties["filter"];
};

const ReviewSlides: NextPage<ReviewSlidesType> = ({
  className = "",
  reviewSlidesMarginLeft,
  reviewSlidesFilter,
}) => {
  const reviewSlidesStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: reviewSlidesMarginLeft,
      filter: reviewSlidesFilter,
    };
  }, [reviewSlidesMarginLeft, reviewSlidesFilter]);

  return (
    <div
      className={[styles.reviewSlides, className].join(" ")}
      style={reviewSlidesStyle}
    >
      <div className={styles.slideContent}>
        <div className={styles.customerFeedback}>
          <div className={styles.individualReview}>
            <Image
              className={styles.fiveStarRating}
              width={23}
              height={23}
              alt=""
              src="/star-1-8.svg"
            />
            <Image
              className={styles.fiveStarRating}
              width={23}
              height={23}
              alt=""
              src="/star-2-8.svg"
            />
            <Image
              className={styles.fiveStarRating}
              width={23}
              height={23}
              alt=""
              src="/star-3-8.svg"
            />
            <Image
              className={styles.fiveStarRating}
              width={23}
              height={23}
              alt=""
              src="/star-4-6.svg"
            />
            <Image
              className={styles.fiveStarRating}
              width={23}
              height={23}
              alt=""
              src="/star-5-6.svg"
            />
          </div>
          <div className={styles.customerDetails}>
            <div className={styles.customerInfo}>
              <b className={styles.sarahM}>Sarah M.</b>
              <Image
                className={styles.placeholderNamesIcon}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/frame-51.svg"
              />
            </div>
            <div className={styles.imBlownAway}>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlides;
