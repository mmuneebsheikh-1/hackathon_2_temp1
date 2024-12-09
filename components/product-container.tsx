import type { NextPage } from "next";
import Image from "next/image";
import styles from "./product-container.module.css";

export type ProductContainerType = {
  className?: string;
};

const ProductContainer: NextPage<ProductContainerType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.productContainer, className].join(" ")}>
      <div className={styles.productCard}>
        <div className={styles.cardContent}>
          <Image
            className={styles.cardImageIcon}
            loading="lazy"
            width={295}
            height={298}
            alt=""
            src="/frame-32@2x.png"
          />
          <div className={styles.cardDescription}>
            <b className={styles.verticalStripedShirtContainer}>
              V<span className={styles.ertical}>ERTICAL</span> S
              <span className={styles.ertical}>TRIPED</span> S
              <span className={styles.ertical}>HIRT</span>
            </b>
            <div className={styles.ratingContainer}>
              <div className={styles.starsParent}>
                <div className={styles.stars}>
                  <Image
                    className={styles.productRatingIcon}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/star-1.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/star-2.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/filled-stars.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/star-4.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/star-5-2.svg"
                  />
                </div>
                <div className={styles.reviewPlaceholder}>
                  <span>5.0/</span>
                  <span className={styles.span}>5</span>
                </div>
              </div>
              <div className={styles.additionalInfo}>
                <b className={styles.infoDetails}>$212</b>
                <b className={styles.moreProductsContainer}>$232</b>
                <div className={styles.moreProducts}>
                  <div className={styles.productLink}>
                    <div className={styles.productImage}>-20%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondProductCard}>
          <div className={styles.secondCardContent}>
            <div className={styles.productVisualsParent}>
              <Image
                className={styles.cardImageIcon}
                loading="lazy"
                width={295}
                height={298}
                alt=""
                src="/frame-70@2x.png"
              />
              <div className={styles.courageGraphicTShirtParent}>
                <b className={styles.verticalStripedShirtContainer}>
                  C<span className={styles.ertical}>OURAGE</span> G
                  <span className={styles.ertical}>RAPHIC</span> T-
                  <span className={styles.ertical}>SHIRT</span>
                </b>
                <div className={styles.ratingContainer}>
                  <div className={styles.starsParent}>
                    <div className={styles.stars}>
                      <Image
                        className={styles.productRatingIcon}
                        loading="lazy"
                        width={19}
                        height={19}
                        alt=""
                        src="/star-1.svg"
                      />
                      <Image
                        className={styles.productRatingIcon}
                        loading="lazy"
                        width={19}
                        height={19}
                        alt=""
                        src="/star-2.svg"
                      />
                      <Image
                        className={styles.productRatingIcon}
                        loading="lazy"
                        width={19}
                        height={19}
                        alt=""
                        src="/filled-stars.svg"
                      />
                      <Image
                        className={styles.productRatingIcon}
                        loading="lazy"
                        width={19}
                        height={19}
                        alt=""
                        src="/star-4.svg"
                      />
                    </div>
                    <div className={styles.spacing}>
                      <span>4.0/</span>
                      <span className={styles.span}>5</span>
                    </div>
                  </div>
                  <b className={styles.placeholder}>$145</b>
                </div>
              </div>
            </div>
            <div className={styles.productVisualsParent}>
              <Image
                className={styles.cardImageIcon}
                loading="lazy"
                width={295}
                height={298}
                alt=""
                src="/frame-71@2x.png"
              />
              <div className={styles.looseFitBermudaShortsParent}>
                <b className={styles.verticalStripedShirtContainer}>
                  L<span className={styles.ertical}>OOSE</span> F
                  <span className={styles.ertical}>IT</span> B
                  <span className={styles.ertical}>ERMUDA</span> S
                  <span className={styles.ertical}>HORTS</span>
                </b>
                <div className={styles.ratingContainer}>
                  <div className={styles.starsParent}>
                    <div className={styles.starParent}>
                      <Image
                        className={styles.productRatingIcon}
                        loading="lazy"
                        width={19}
                        height={19}
                        alt=""
                        src="/star-1.svg"
                      />
                      <Image
                        className={styles.productRatingIcon}
                        width={19}
                        height={19}
                        alt=""
                        src="/star-2.svg"
                      />
                      <Image
                        className={styles.productRatingIcon}
                        width={19}
                        height={19}
                        alt=""
                        src="/filled-stars.svg"
                      />
                    </div>
                    <div className={styles.div}>
                      <span>3.0/</span>
                      <span className={styles.span}>5</span>
                    </div>
                  </div>
                  <b className={styles.b}>$80</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondProductAction}>
            <div className={styles.viewMore}>
              <div className={styles.viewAll}>View All</div>
            </div>
          </div>
        </div>
        <div className={styles.cardContent1}>
          <div className={styles.image10Wrapper}>
            <Image
              className={styles.image10Icon}
              loading="lazy"
              width={252}
              height={378}
              alt=""
              src="/image-10@2x.png"
            />
          </div>
          <div className={styles.fadedSkinnyJeansParent}>
            <b className={styles.verticalStripedShirtContainer}>
              F<span className={styles.ertical}>ADED</span> S
              <span className={styles.ertical}>KINNY</span> J
              <span className={styles.ertical}>EANS</span>
            </b>
            <div className={styles.ratingContainer}>
              <div className={styles.starsParent}>
                <div className={styles.stars}>
                  <Image
                    className={styles.productRatingIcon}
                    width={19}
                    height={19}
                    alt=""
                    src="/star-1.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    width={19}
                    height={19}
                    alt=""
                    src="/star-2.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    width={19}
                    height={19}
                    alt=""
                    src="/filled-stars.svg"
                  />
                  <Image
                    className={styles.productRatingIcon}
                    width={19}
                    height={19}
                    alt=""
                    src="/star-4.svg"
                  />
                  <Image
                    className={styles.frameChild5}
                    width={9}
                    height={17}
                    alt=""
                    src="/star-5-3.svg"
                  />
                </div>
                <div className={styles.div1}>
                  <span>4.5/</span>
                  <span className={styles.span}>5</span>
                </div>
              </div>
              <b className={styles.b1}>$210</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
