import type { NextPage } from "next";
import Image from "next/image";
import styles from "./style-browser.module.css";

export type StyleBrowserType = {
  className?: string;
};

const StyleBrowser: NextPage<StyleBrowserType> = ({ className = "" }) => {
  return (
    <section className={[styles.styleBrowser, className].join(" ")}>
      <div className={styles.styleHeaderParent}>
        <div className={styles.styleHeader}>
          <h1 className={styles.browseByDress}>BROWSE BY dress STYLE</h1>
        </div>
        <div className={styles.styleOptions}>
          <div className={styles.styleCategories}>
            <div className={styles.casualStyles}>
              <Image
                className={styles.image11Icon}
                width={973}
                height={649}
                alt=""
                src="/image-11@2x.png"
              />
              <h1 className={styles.casual}>Casual</h1>
            </div>
            <div className={styles.formalStyles}>
              <Image
                className={styles.image13Icon}
                width={1306}
                height={870}
                alt=""
                src="/image-13@2x.png"
              />
              <h1 className={styles.formal}>Formal</h1>
            </div>
          </div>
          <div className={styles.styleCategories}>
            <div className={styles.formalStyles}>
              <Image
                className={styles.image12Icon}
                width={770}
                height={616}
                alt=""
                src="/image-12@2x.png"
              />
              <h1 className={styles.party}>Party</h1>
            </div>
            <div className={styles.image14Parent}>
              <Image
                className={styles.image14Icon}
                width={452}
                height={677}
                alt=""
                src="/image-14@2x.png"
              />
              <h1 className={styles.gym}>Gym</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleBrowser;
