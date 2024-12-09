import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import Pagination from "../components/pagination";
import FrameComponent from "../components/frame-component";
import styles from "./category-page.module.css";

const CategoryPage: NextPage = () => {
  return (
    <div className={styles.categoryPage}>
      <FrameComponent5 />
      <section className={styles.sortDropdown}>
        <Pagination />
      </section>
      <FrameComponent
        footerContentAlignSelf="unset"
        footerContentWidth="1240px"
        footerContentOverflowX="auto"
      />
    </div>
  );
};

export default CategoryPage;
