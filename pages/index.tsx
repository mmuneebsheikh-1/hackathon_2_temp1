import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import ProductContainer from "../components/product-container";
import StyleBrowser from "../components/style-browser";
import ReviewSlides from "../components/review-slides";
import ReviewSlides1 from "../components/review-slides1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.rectangleParent}>
        <Image
          className={styles.frameChild}
          width={1440}
          height={663}
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </section>
      <div className={styles.homepageInner}>
        <div className={styles.frameParent}>
          <div className={styles.internationalBrandsWrapper}>
            <div className={styles.internationalBrands}>
              International Brands
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.parent}>
              <b className={styles.b}>2,000+</b>
              <div className={styles.highQualityProducts}>
                High-Quality Products
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <b className={styles.b}>30,000+</b>
            <div className={styles.happyCustomers}>Happy Customers</div>
          </div>
        </div>
      </div>
      <header className={styles.signUpAndGet20OffToYouParent}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
        <Image
          className={styles.frameIcon}
          width={20}
          height={20}
          alt=""
          src="/frame.svg"
        />
      </header>
      <section className={styles.homepageChild}>
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
              className={styles.frameIcon2}
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
          <div className={styles.frameDiv}>
            <Image
              className={styles.frameIcon2}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-3.svg"
            />
            <Image
              className={styles.frameIcon2}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
      </section>
      <b className={styles.b2}>200+</b>
      <FrameComponent2 />
      <FrameComponent3 />
      <section className={styles.newArrivalsWrapper}>
        <h1 className={styles.topSelling}>NEW ARRIVALS</h1>
      </section>
      <FrameComponent4 />
      <div className={styles.separator}>
        <div className={styles.divider} />
      </div>
      <section className={styles.topSellingWrapper}>
        <h1 className={styles.topSelling}>top selling</h1>
      </section>
      <ProductContainer />
      <StyleBrowser />
      <div className={styles.customerReviewsWrapper}>
        <div className={styles.customerReviews}>
          <div className={styles.reviewHeader}>
            <h1 className={styles.ourHappyCustomers}>OUR HAPPY CUSTOMERS</h1>
          </div>
          <div className={styles.reviewNavigation}>
            <Image
              className={styles.arrowDownBold2Icon}
              width={24}
              height={24}
              alt=""
              src="/arrowdownbold-2@2x.png"
            />
            <Image
              className={styles.arrowDownBold2Icon}
              width={24}
              height={24}
              alt=""
              src="/arrowdownbold-11@2x.png"
            />
          </div>
        </div>
      </div>
      <section className={styles.reviewCarousel}>
        <ReviewSlides />
        <ReviewSlides
          reviewSlidesMarginLeft="unset"
          reviewSlidesFilter="unset"
        />
        <ReviewSlides1
          alexK="Alex K."
          findingClothesThatAlignWith={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
        />
        <ReviewSlides1
          reviewSlidesFilter="unset"
          alexK="James L."
          alexKMinWidth="84px"
          findingClothesThatAlignWith={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
        />
        <ReviewSlides1
          reviewSlidesFilter="blur(4px)"
          alexK="Mooen"
          alexKMinWidth="66px"
          findingClothesThatAlignWith={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
        />
      </section>
      <FrameComponent />
    </div>
  );
};

export default Homepage;
