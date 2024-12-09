import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent1 from "./frame-component1";
import styles from "./sign-up-banner.module.css";

export type SignUpBannerType = {
  className?: string;
};

const SignUpBanner: NextPage<SignUpBannerType> = ({ className = "" }) => {
  return (
    <section className={[styles.signUpBanner, className].join(" ")}>
      <header className={styles.signupBannerContent}>
        <div className={styles.signUpAndContainer}>
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className={styles.signUpNow}>Sign Up Now</span>
        </div>
        <Image
          className={styles.signupBannerImage}
          loading="lazy"
          width={20}
          height={20}
          alt=""
          src="/frame.svg"
        />
      </header>
      <div className={styles.headerRight}>
        <div className={styles.shopcoParent}>
          <h1 className={styles.shopco}>SHOP.CO</h1>
          <div className={styles.frameParent}>
            <div className={styles.shopParent}>
              <div className={styles.shop}>Shop</div>
              <Image
                className={styles.frameIcon}
                loading="lazy"
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
          <div className={styles.frameGroup}>
            <Image
              className={styles.headerIcons}
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
          <div className={styles.headerIconsParent}>
            <Image
              className={styles.headerIcons}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-3.svg"
            />
            <Image
              className={styles.headerIcons}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/frame-4.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.headerSeparator}>
        <div className={styles.headerSeparatorChild} />
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.navLinksBottom}>
          <div className={styles.homeLink}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.frameWrapper}>
            <Image
              className={styles.frameIcon2}
              loading="lazy"
              width={16}
              height={16}
              alt=""
              src="/frame-5@2x.png"
            />
          </div>
          <div className={styles.cart}>Cart</div>
        </div>
      </div>
      <div className={styles.cartBanner}>
        <h1 className={styles.yourCart}>Your cart</h1>
      </div>
      <div className={styles.cartItems}>
        <div className={styles.cartItem}>
          <div className={styles.itemInfo}>
            <div className={styles.productName}>
              <div className={styles.itemDetails}>
                <Image
                  className={styles.itemDetailsChild}
                  loading="lazy"
                  width={124}
                  height={124}
                  alt=""
                  src="/frame-33@2x.png"
                />
                <div className={styles.itemNamesParent}>
                  <div className={styles.itemNames}>
                    <div className={styles.itemName}>
                      <b className={styles.gradientGraphicTShirt}>
                        Gradient Graphic T-shirt
                      </b>
                      <div className={styles.sizeLargeParent}>
                        <div className={styles.sizeLarge}>
                          <span>{`Size: `}</span>
                          <span className={styles.large}>Large</span>
                        </div>
                        <div className={styles.colorWhite}>
                          <span>{`Color: `}</span>
                          <span className={styles.large}>White</span>
                        </div>
                      </div>
                    </div>
                    <b className={styles.b}>$145</b>
                  </div>
                  <FrameComponent1 />
                </div>
              </div>
              <div className={styles.itemDetails1} />
            </div>
            <div className={styles.productName}>
              <div className={styles.itemDetails}>
                <Image
                  className={styles.itemDetailsChild}
                  loading="lazy"
                  width={124}
                  height={124}
                  alt=""
                  src="/frame-33-1@2x.png"
                />
                <div className={styles.itemNamesParent}>
                  <div className={styles.frameDiv}>
                    <div className={styles.itemName}>
                      <b className={styles.gradientGraphicTShirt}>
                        C<span className={styles.heckered}>HECKERED</span> S
                        <span className={styles.heckered}>HIRT</span>
                      </b>
                      <div className={styles.sizeLargeParent}>
                        <div className={styles.sizeMedium}>
                          <span>{`Size: `}</span>
                          <span className={styles.large}>Medium</span>
                        </div>
                        <div className={styles.colorRed}>
                          <span>{`Color: `}</span>
                          <span className={styles.large}>Red</span>
                        </div>
                      </div>
                    </div>
                    <b className={styles.b1}>$180</b>
                  </div>
                  <FrameComponent1 />
                </div>
              </div>
              <div className={styles.itemDetails1} />
            </div>
            <div className={styles.productImage}>
              <div className={styles.image9Wrapper}>
                <Image
                  className={styles.image9Icon}
                  loading="lazy"
                  width={102}
                  height={153}
                  alt=""
                  src="/image-9@2x.png"
                />
              </div>
              <div className={styles.itemNamesParent}>
                <div className={styles.frameParent2}>
                  <div className={styles.skinnyFitJeansParent}>
                    <b className={styles.skinnyFitJeansContainer}>
                      S<span className={styles.heckered}>KINNY</span> F
                      <span className={styles.heckered}>IT</span> J
                      <span className={styles.heckered}>EANS</span>
                    </b>
                    <div className={styles.sizeLargeParent}>
                      <div className={styles.sizeLarge}>
                        <span>{`Size: `}</span>
                        <span className={styles.large}>Large</span>
                      </div>
                      <div className={styles.colorBlue}>
                        <span>{`Color: `}</span>
                        <span className={styles.large}>Blue</span>
                      </div>
                    </div>
                  </div>
                  <b className={styles.b2}>$240</b>
                </div>
                <FrameComponent1 />
              </div>
            </div>
          </div>
          <div className={styles.orderDetails}>
            <h3 className={styles.orderSummary}>Order Summary</h3>
            <div className={styles.orderDetails1}>
              <div className={styles.subtotalParent}>
                <div className={styles.subtotal}>Subtotal</div>
                <b className={styles.b3}>$565</b>
              </div>
              <div className={styles.subtotalParent}>
                <div className={styles.discount20}>Discount (-20%)</div>
                <b className={styles.b4}>-$113</b>
              </div>
              <div className={styles.deliveryFeeParent}>
                <div className={styles.deliveryFee}>Delivery Fee</div>
                <b className={styles.b5}>$15</b>
              </div>
              <div className={styles.orderDetailsChild} />
              <div className={styles.totalParent}>
                <div className={styles.total}>Total</div>
                <b className={styles.b6}>$467</b>
              </div>
            </div>
            <div className={styles.promoCodeInputParent}>
              <div className={styles.promoCodeInput}>
                <Image
                  className={styles.headerIcons}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/frame-15.svg"
                />
                <div className={styles.searchForProducts}>Add promo code</div>
              </div>
              <div className={styles.applyWrapper}>
                <div className={styles.apply}>Apply</div>
              </div>
            </div>
            <div className={styles.goToCheckoutParent}>
              <div className={styles.goToCheckout}>Go to Checkout</div>
              <Image
                className={styles.arrowDownBold1Icon}
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/arrowdownbold-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;
