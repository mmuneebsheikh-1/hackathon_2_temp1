import type { NextPage } from "next";
import Image from "next/image";
import styles from "./button-base.module.css";

export type ButtonBaseType = {
  className?: string;

  /** Variant props */
  icon?: string;
  size?: string;
};

const ButtonBase: NextPage<ButtonBaseType> = ({
  className = "",
  icon = "Leading",
  size = "md",
}) => {
  return (
    <div
      className={[styles.buttonBase, className].join(" ")}
      data-icon={icon}
      data-size={size}
    >
      <Image
        className={styles.arrowLeftIcon}
        loading="lazy"
        width={20}
        height={20}
        alt=""
        src="/arrowleft.svg"
      />
      <div className={styles.previousPage}>Previous</div>
    </div>
  );
};

export default ButtonBase;
