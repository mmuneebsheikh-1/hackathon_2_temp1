import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  footerContentAlignSelf?: CSSProperties["alignSelf"];
  footerContentWidth?: CSSProperties["width"];
  footerContentOverflowX?: CSSProperties["overflowX"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  footerContentAlignSelf,
  footerContentWidth,
  footerContentOverflowX,
}) => {
  const footerContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: footerContentAlignSelf,
      width: footerContentWidth,
      overflowX: footerContentOverflowX,
    };
  }, [footerContentAlignSelf, footerContentWidth, footerContentOverflowX]);

  return (
    <section className={[styles.newsletterSignupParent, className].join(" ")}>
      <div className={styles.newsletterSignup}>
        <div className={styles.subscriptionForm}>
          <h1 className={styles.stayUptoDate}>
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className={styles.inputFields}>
            <div className={styles.emailInput}>
              <Image
                className={styles.inputBoxIcon}
                width={24}
                height={24}
                alt=""
                src="/frame-16.svg"
              />
              <div className={styles.enterYourEmail}>
                Enter your email address
              </div>
            </div>
            <div className={styles.subscriptionButton}>
              <div className={styles.subscribeToNewsletter}>
                Subscribe to Newsletter
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.footerContent} style={footerContentStyle}>
          <div className={styles.companyInfo}>
            <b className={styles.shopco}>SHOP.CO</b>
            <div className={styles.brandDescription}>
              <div className={styles.weHaveClothes}>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </div>
              <div className={styles.socialMedia}>
                <Image
                  className={styles.socialIcons}
                  loading="lazy"
                  width={28}
                  height={28}
                  alt=""
                  src="/1.svg"
                />
                <Image
                  className={styles.socialIcons}
                  loading="lazy"
                  width={28}
                  height={28}
                  alt=""
                  src="/2.svg"
                />
                <Image
                  className={styles.socialIcons}
                  loading="lazy"
                  width={28}
                  height={28}
                  alt=""
                  src="/3.svg"
                />
                <Image
                  className={styles.socialIcons}
                  loading="lazy"
                  width={28}
                  height={28}
                  alt=""
                  src="/4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.helpMenu}>
            <div className={styles.helpMenu1}>Company</div>
            <div className={styles.aboutFeaturesWorksContainer}>
              <p className={styles.about}>{`About          `}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.about}>{`Features          `}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.about}>{`Works          `}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.about}>{`Career  `}</p>
            </div>
          </div>
          <div className={styles.helpMenu}>
            <div className={styles.helpMenu1}>Help</div>
            <div className={styles.aboutFeaturesWorksContainer}>
              <p className={styles.blankLine}>Customer Support</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Delivery Details</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>{`Terms & Conditions`}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Privacy Policy</p>
            </div>
          </div>
          <div className={styles.helpMenu4}>
            <div className={styles.helpMenu1}>FAQ</div>
            <div className={styles.aboutFeaturesWorksContainer2}>
              <p className={styles.blankLine}>Account</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Manage Deliveries</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Orders</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Payments</p>
            </div>
          </div>
          <div className={styles.helpMenu}>
            <div className={styles.helpMenu1}>Resources</div>
            <div className={styles.aboutFeaturesWorksContainer}>
              <p className={styles.blankLine}>Free eBooks</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Development Tutorial</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>How to - Blog</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>Youtube Playlist</p>
            </div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.copyrightParent}>
            <div className={styles.copyright}>
              <div className={styles.allRightsReserved}>
                Shop.co © 2000-2023, All Rights Reserved
              </div>
            </div>
            <div className={styles.socialMedia}>
              <Image
                className={styles.badgeIcon}
                loading="lazy"
                width={47}
                height={30}
                alt=""
                src="/badge.svg"
              />
              <Image
                className={styles.badgeIcon}
                loading="lazy"
                width={47}
                height={30}
                alt=""
                src="/badge-1.svg"
              />
              <Image
                className={styles.badgeIcon}
                loading="lazy"
                width={47}
                height={30}
                alt=""
                src="/badge-2.svg"
              />
              <Image
                className={styles.badgeIcon}
                loading="lazy"
                width={47}
                height={30}
                alt=""
                src="/badge-3.svg"
              />
              <Image
                className={styles.badgeIcon}
                loading="lazy"
                width={47}
                height={30}
                alt=""
                src="/badge-4.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FrameComponent;
