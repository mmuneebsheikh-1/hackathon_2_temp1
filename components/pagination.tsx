import type { NextPage } from "next";
import Image from "next/image";
import Button from "./button";
import PaginationNumberBase from "./pagination-number-base";
import styles from "./pagination.module.css";

export type PaginationType = {
  className?: string;
};

const Pagination: NextPage<PaginationType> = ({ className = "" }) => {
  return (
    <div className={[styles.pagination, className].join(" ")}>
      <div className={styles.topDivider} />
      <div className={styles.frameParent}>
        <div className={styles.homeLinkParentParent}>
          <div className={styles.homeLinkParent}>
            <div className={styles.homeWrapper}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.homeLinkContainer}>
              <Image
                className={styles.frameIcon}
                loading="lazy"
                width={16}
                height={16}
                alt=""
                src="/frame-5@2x.png"
              />
            </div>
            <div className={styles.casual}>Casual</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.filtersParent}>
                <h3 className={styles.filters}>Filters</h3>
                <div className={styles.frameWrapper}>
                  <Image
                    className={styles.frameIcon1}
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/frame-61.svg"
                  />
                </div>
              </div>
              <div className={styles.filterHeaders} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.categoryFilterLabelsParent}>
                <div className={styles.categoryFilterLabels}>
                  <div className={styles.tShirts}>T-shirts</div>
                </div>
                <Image
                  className={styles.emptyCategoryIcons}
                  width={16}
                  height={16}
                  alt=""
                  src="/frame-5@2x.png"
                />
              </div>
              <div className={styles.categoryFilterLabelsParent}>
                <div className={styles.categoryFilterLabels}>
                  <div className={styles.shorts}>Shorts</div>
                </div>
                <Image
                  className={styles.emptyCategoryIcons}
                  width={16}
                  height={16}
                  alt=""
                  src="/frame-5@2x.png"
                />
              </div>
              <div className={styles.categoryFilterLabelsParent}>
                <div className={styles.categoryFilterLabels}>
                  <div className={styles.shirts}>Shirts</div>
                </div>
                <Image
                  className={styles.emptyCategoryIcons}
                  width={16}
                  height={16}
                  alt=""
                  src="/frame-5@2x.png"
                />
              </div>
              <div className={styles.categoryFilterLabelsParent}>
                <div className={styles.categoryFilterLabels}>
                  <div className={styles.hoodie}>Hoodie</div>
                </div>
                <Image
                  className={styles.emptyCategoryIcons}
                  width={16}
                  height={16}
                  alt=""
                  src="/frame-5@2x.png"
                />
              </div>
              <div className={styles.jeansFilter}>
                <div className={styles.filtersParent}>
                  <div className={styles.categoryFilterLabels}>
                    <div className={styles.jeans}>Jeans</div>
                  </div>
                  <Image
                    className={styles.emptyCategoryIcons}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-5@2x.png"
                  />
                </div>
                <div className={styles.jeansFilterChild} />
              </div>
            </div>
            <div className={styles.priceFilter}>
              <div className={styles.filtersParent}>
                <h3 className={styles.price}>Price</h3>
                <div className={styles.frameFrame}>
                  <Image
                    className={styles.frameIcon}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-12@2x.png"
                  />
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>$50</div>
                <div className={styles.div1}>$200</div>
              </div>
              <Image
                className={styles.priceFilterChild}
                loading="lazy"
                width={247}
                height={20}
                alt=""
                src="/group-6.svg"
              />
              <div className={styles.priceFilterItem} />
            </div>
            <div className={styles.colorFilter}>
              <div className={styles.categoryFilterLabelsParent}>
                <h3 className={styles.colors}>Colors</h3>
                <div className={styles.frameFrame}>
                  <Image
                    className={styles.frameIcon}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-12@2x.png"
                  />
                </div>
              </div>
              <div className={styles.frameParent5}>
                <Image
                  className={styles.frameChild}
                  loading="lazy"
                  width={37}
                  height={37}
                  alt=""
                  src="/group-8.svg"
                />
                <div className={styles.colorSwatches} />
                <div className={styles.colorSwatches1} />
                <div className={styles.colorSwatches2} />
                <div className={styles.colorSwatches3} />
                <Image
                  className={styles.frameChild}
                  loading="lazy"
                  width={37}
                  height={37}
                  alt=""
                  src="/group-8-1.svg"
                />
                <div className={styles.colorSwatches4} />
                <div className={styles.colorSwatches5} />
                <div className={styles.colorSwatches6} />
                <div className={styles.colorSwatches7} />
              </div>
            </div>
            <div className={styles.topDivider} />
            <div className={styles.frameParent6}>
              <div className={styles.sizeParent}>
                <h3 className={styles.size}>Size</h3>
                <Image
                  className={styles.emptyCategoryIcons}
                  width={16}
                  height={16}
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.xxSmall}>XX-Small</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.xSmall}>X-Small</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.small}>Small</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.medium}>Medium</div>
                </div>
                <div className={styles.largeWrapper}>
                  <div className={styles.large}>Large</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.xLarge}>X-Large</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.xxLarge}>XX-Large</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.xLarge1}>3X-Large</div>
                </div>
                <div className={styles.xxSmallWrapper}>
                  <div className={styles.xxLarge}>4X-Large</div>
                </div>
              </div>
            </div>
            <div className={styles.topDivider} />
            <div className={styles.frameParent8}>
              <div className={styles.sizeParent}>
                <h3 className={styles.dressStyle}>Dress Style</h3>
                <Image
                  className={styles.emptyCategoryIcons}
                  width={16}
                  height={16}
                  alt=""
                  src="/frame-12@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.sizeParent}>
                  <div className={styles.xSmall}>Casual</div>
                  <Image
                    className={styles.emptyCategoryIcons}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-5@2x.png"
                  />
                </div>
                <div className={styles.sizeParent}>
                  <div className={styles.xLarge}>Formal</div>
                  <Image
                    className={styles.emptyCategoryIcons}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-5@2x.png"
                  />
                </div>
                <div className={styles.sizeParent}>
                  <div className={styles.party}>Party</div>
                  <Image
                    className={styles.emptyCategoryIcons}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-5@2x.png"
                  />
                </div>
                <div className={styles.sizeParent}>
                  <div className={styles.gym}>Gym</div>
                  <Image
                    className={styles.emptyCategoryIcons}
                    width={16}
                    height={16}
                    alt=""
                    src="/frame-5@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.applyFilterWrapper}>
              <div className={styles.applyFilter}>Apply Filter</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.productRowParent}>
            <div className={styles.productRow}>
              <div className={styles.productItems}>
                <h1 className={styles.casual2}>Casual</h1>
                <Image
                  className={styles.productItemsChild}
                  loading="lazy"
                  width={295}
                  height={298}
                  alt=""
                  src="/frame-331@2x.png"
                />
                <div className={styles.productDetails}>
                  <h3 className={styles.gradientGraphicTShirt}>
                    Gradient Graphic T-shirt
                  </h3>
                  <div className={styles.productRating}>
                    <div className={styles.ratingStars}>
                      <div className={styles.filledStarsParent}>
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/star-1.svg"
                        />
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/star-2.svg"
                        />
                        <Image
                          className={styles.filledStarsIcon}
                          width={19}
                          height={19}
                          alt=""
                          src="/filled-stars.svg"
                        />
                        <Image
                          className={styles.starIcon}
                          width={9}
                          height={17}
                          alt=""
                          src="/star-5.svg"
                        />
                      </div>
                      <div className={styles.emptyRating}>
                        <span>3.5/</span>
                        <span className={styles.span}>5</span>
                      </div>
                    </div>
                    <b className={styles.emptyPrice}>$145</b>
                  </div>
                </div>
                <div className={styles.imageContainerWrapper}>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image8Icon}
                      width={268}
                      height={402}
                      alt=""
                      src="/image-8@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.productDetails1}>
                  <div className={styles.skinnyFitJeansParent}>
                    <h3 className={styles.skinnyFitJeansContainer}>
                      S<span className={styles.kinny}>KINNY</span> F
                      <span className={styles.kinny}>IT</span> J
                      <span className={styles.kinny}>EANS</span>
                    </h3>
                    <div className={styles.jeansRatingParent}>
                      <div className={styles.ratingStars}>
                        <div className={styles.filledStarsParent}>
                          <Image
                            className={styles.filledStarsIcon}
                            width={19}
                            height={19}
                            alt=""
                            src="/star-1.svg"
                          />
                          <Image
                            className={styles.filledStarsIcon}
                            loading="lazy"
                            width={19}
                            height={19}
                            alt=""
                            src="/star-2.svg"
                          />
                          <Image
                            className={styles.filledStarsIcon}
                            width={19}
                            height={19}
                            alt=""
                            src="/filled-stars.svg"
                          />
                          <Image
                            className={styles.starIcon}
                            width={9}
                            height={17}
                            alt=""
                            src="/star-5.svg"
                          />
                        </div>
                        <div className={styles.emptyRating}>
                          <span>3.5/</span>
                          <span className={styles.span}>5</span>
                        </div>
                      </div>
                      <div className={styles.priceRangeParent}>
                        <b className={styles.priceRange}>$240</b>
                        <b className={styles.priceRange1}>$260</b>
                        <div className={styles.jeansSalePrice}>
                          <div className={styles.salePrice}>
                            <div className={styles.discountedValue}>-20%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  className={styles.productItemsChild}
                  loading="lazy"
                  width={295}
                  height={298}
                  alt=""
                  src="/frame-32@2x.png"
                />
                <div className={styles.verticalStripedShirtParent}>
                  <h3 className={styles.gradientGraphicTShirt}>
                    V<span className={styles.kinny}>ERTICAL</span> S
                    <span className={styles.kinny}>TRIPED</span> S
                    <span className={styles.kinny}>HIRT</span>
                  </h3>
                  <div className={styles.productRating}>
                    <div className={styles.ratingStars}>
                      <div className={styles.filledStarsParent}>
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/star-1.svg"
                        />
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/star-2.svg"
                        />
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/filled-stars.svg"
                        />
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/star-4.svg"
                        />
                        <Image
                          className={styles.filledStarsIcon}
                          loading="lazy"
                          width={19}
                          height={19}
                          alt=""
                          src="/star-5-2.svg"
                        />
                      </div>
                      <div className={styles.div3}>
                        <span>5.0/</span>
                        <span className={styles.span}>5</span>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <b className={styles.productPriceRange}>$212</b>
                      <b className={styles.productPriceRange1}>$232</b>
                      <div className={styles.jeansSalePrice}>
                        <div className={styles.salePrice}>
                          <div className={styles.discountedValue}>-20%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.productCountInfoParent}>
                  <div className={styles.productCountInfo}>
                    <div className={styles.productShowingCount}>
                      <div className={styles.showing110Of}>
                        Showing 1-10 of 100 Products
                      </div>
                    </div>
                    <div className={styles.productSorting}>
                      <div className={styles.sortDropdown}>
                        <div className={styles.showing110Of}>
                          <span>{`Sort by: `}</span>
                          <span className={styles.mostPopular}>
                            Most Popular
                          </span>
                        </div>
                      </div>
                      <Image
                        className={styles.sortIcon}
                        width={16}
                        height={16}
                        alt=""
                        src="/frame-1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.productRow1}>
                    <div className={styles.productContainer}>
                      <Image
                        className={styles.productItemsChild}
                        loading="lazy"
                        width={295}
                        height={298}
                        alt=""
                        src="/frame-34@2x.png"
                      />
                      <div className={styles.productInfo}>
                        <h3 className={styles.gradientGraphicTShirt}>
                          Polo with Tipping Details
                        </h3>
                        <div className={styles.productRating}>
                          <div className={styles.ratingStars}>
                            <div className={styles.starsParent}>
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-1.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-2.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/filled-stars.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-4.svg"
                              />
                              <Image
                                className={styles.starIcon}
                                width={9}
                                height={17}
                                alt=""
                                src="/star-5-3.svg"
                              />
                            </div>
                            <div className={styles.gym}>
                              <span>4.5/</span>
                              <span className={styles.span}>5</span>
                            </div>
                          </div>
                          <b className={styles.priceDetails}>$180</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productContainer}>
                      <Image
                        className={styles.productItemsChild}
                        loading="lazy"
                        width={295}
                        height={298}
                        alt=""
                        src="/frame-38@2x.png"
                      />
                      <div className={styles.blackStripedTShirtParent}>
                        <h3 className={styles.skinnyFitJeansContainer}>
                          Black Striped T-shirt
                        </h3>
                        <div className={styles.productRating}>
                          <div className={styles.ratingStars}>
                            <div className={styles.filledStarsParent}>
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-1.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-2.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/filled-stars.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-4.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-5-2.svg"
                              />
                            </div>
                            <div className={styles.div3}>
                              <span>5.0/</span>
                              <span className={styles.span}>5</span>
                            </div>
                          </div>
                          <div className={styles.oldPriceParent}>
                            <b className={styles.oldPrice}>$120</b>
                            <b className={styles.newPrice}>$150</b>
                            <div className={styles.jeansSalePrice}>
                              <div className={styles.offerPriceWrapper}>
                                <div className={styles.offerPrice}>-30%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productRow3}>
                  <div className={styles.productGrid}>
                    <div className={styles.productContainer}>
                      <Image
                        className={styles.productItemsChild}
                        loading="lazy"
                        width={295}
                        height={298}
                        alt=""
                        src="/frame-72@2x.png"
                      />
                      <div className={styles.blackStripedTShirtParent}>
                        <h3 className={styles.gradientGraphicTShirt}>
                          C<span className={styles.kinny}>HECKERED</span> S
                          <span className={styles.kinny}>HIRT</span>
                        </h3>
                        <div className={styles.jeansRatingParent}>
                          <div className={styles.productStars1}>
                            <div className={styles.starContainer}>
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-1.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-2.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/filled-stars.svg"
                              />
                              <Image
                                className={styles.filledStarsIcon}
                                width={19}
                                height={19}
                                alt=""
                                src="/star-4.svg"
                              />
                              <Image
                                className={styles.starIcon}
                                width={9}
                                height={17}
                                alt=""
                                src="/star-5-3.svg"
                              />
                            </div>
                            <div className={styles.gym}>
                              <span>4.5/</span>
                              <span className={styles.span}>5</span>
                            </div>
                          </div>
                          <b className={styles.priceDetails}>$180</b>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productContainer}>
                      <Image
                        className={styles.productItemsChild}
                        loading="lazy"
                        width={295}
                        height={298}
                        alt=""
                        src="/frame-73@2x.png"
                      />
                      <div className={styles.sleeveStripedTShirtParent}>
                        <h3 className={styles.gradientGraphicTShirt}>
                          S<span className={styles.kinny}>LEEVE</span> S
                          <span className={styles.kinny}>TRIPED</span> T-
                          <span className={styles.kinny}>SHIRT</span>
                        </h3>
                        <div className={styles.itemsContainer1}>
                          <div className={styles.starsParent}>
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/star-1.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/star-2.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/filled-stars.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/star-4.svg"
                            />
                            <Image
                              className={styles.starIcon}
                              width={9}
                              height={17}
                              alt=""
                              src="/star-5-3.svg"
                            />
                          </div>
                          <div className={styles.gym}>
                            <span>4.5/</span>
                            <span className={styles.span}>5</span>
                          </div>
                        </div>
                        <div className={styles.discountedAmountParent}>
                          <b className={styles.discountedAmount}>$130</b>
                          <b className={styles.originalPriceValue}>$160</b>
                          <div className={styles.jeansSalePrice}>
                            <div className={styles.offerPriceWrapper}>
                              <div className={styles.offerPrice}>-30%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.productsInfo}>
                  <div className={styles.productContainer}>
                    <Image
                      className={styles.productItemsChild}
                      loading="lazy"
                      width={295}
                      height={298}
                      alt=""
                      src="/frame-70@2x.png"
                    />
                    <div className={styles.productInfo1}>
                      <h3 className={styles.gradientGraphicTShirt}>
                        C<span className={styles.kinny}>OURAGE</span> G
                        <span className={styles.kinny}>RAPHIC</span> T-
                        <span className={styles.kinny}>SHIRT</span>
                      </h3>
                      <div className={styles.productRating}>
                        <div className={styles.ratingStars}>
                          <div className={styles.starsParent}>
                            <Image
                              className={styles.filledStarsIcon}
                              loading="lazy"
                              width={19}
                              height={19}
                              alt=""
                              src="/star-1.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              loading="lazy"
                              width={19}
                              height={19}
                              alt=""
                              src="/star-2.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              loading="lazy"
                              width={19}
                              height={19}
                              alt=""
                              src="/filled-stars.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/star-4.svg"
                            />
                          </div>
                          <div className={styles.div6}>
                            <span>4.0/</span>
                            <span className={styles.span}>5</span>
                          </div>
                        </div>
                        <b className={styles.emptyPrice}>$145</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContainer}>
                    <Image
                      className={styles.productItemsChild}
                      loading="lazy"
                      width={295}
                      height={298}
                      alt=""
                      src="/frame-71@2x.png"
                    />
                    <div className={styles.looseFitBermudaShortsParent}>
                      <h3 className={styles.gradientGraphicTShirt}>
                        L<span className={styles.kinny}>OOSE</span> F
                        <span className={styles.kinny}>IT</span> B
                        <span className={styles.kinny}>ERMUDA</span> S
                        <span className={styles.kinny}>HORTS</span>
                      </h3>
                      <div className={styles.productRating}>
                        <div className={styles.ratingStars}>
                          <div className={styles.filledStarsParent}>
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/star-1.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/star-2.svg"
                            />
                            <Image
                              className={styles.filledStarsIcon}
                              width={19}
                              height={19}
                              alt=""
                              src="/filled-stars.svg"
                            />
                          </div>
                          <div className={styles.div3}>
                            <span>3.0/</span>
                            <span className={styles.span}>5</span>
                          </div>
                        </div>
                        <b className={styles.b}>$80</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pageNumberContainer}>
              <div className={styles.topDivider} />
              <div className={styles.paginationControls}>
                <div className={styles.previousButtonContainer}>
                  <Button
                    destructive={false}
                    hierarchy="Secondary gray"
                    icon="Leading"
                    size="sm"
                    state="Default"
                  />
                </div>
                <div className={styles.cardContent}>
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="1"
                    numberWidth="7px"
                  />
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="2"
                  />
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="3"
                    numberWidth="9px"
                  />
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="..."
                    numberWidth="13px"
                  />
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="8"
                    numberWidth="10px"
                  />
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="9"
                    numberWidth="10px"
                  />
                  <PaginationNumberBase
                    shape="Square"
                    state="Default"
                    number="10"
                    numberWidth="16px"
                  />
                </div>
                <div className={styles.previousButtonContainer}>
                  <div className={styles.button}>
                    <div className={styles.buttonBase}>
                      <div className={styles.text}>Next</div>
                      <Image
                        className={styles.arrowRightIcon}
                        loading="lazy"
                        width={20}
                        height={20}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
