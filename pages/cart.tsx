import type { NextPage } from "next";
import SignUpBanner from "../components/sign-up-banner";
import FrameComponent from "../components/frame-component";
import styles from "./cart.module.css";

const Cart: NextPage = () => {
  return (
    <div className={styles.cart}>
      <SignUpBanner />
      <FrameComponent
        footerContentAlignSelf="stretch"
        footerContentWidth="unset"
        footerContentOverflowX="unset"
      />
    </div>
  );
};

export default Cart;
