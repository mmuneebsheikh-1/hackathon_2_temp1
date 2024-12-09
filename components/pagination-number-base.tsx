import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./pagination-number-base.module.css";

export type PaginationNumberBaseType = {
  className?: string;
  number?: string;

  /** Variant props */
  shape?: string;
  state?: string;

  /** Style props */
  numberWidth?: CSSProperties["width"];
};

const PaginationNumberBase: NextPage<PaginationNumberBaseType> = ({
  className = "",
  shape = "Square",
  state = "Default",
  number,
  numberWidth,
}) => {
  const numberStyle: CSSProperties = useMemo(() => {
    return {
      width: numberWidth,
    };
  }, [numberWidth]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-shape={shape}
      data-state={state}
    >
      <div className={styles.content}>
        <div className={styles.number} style={numberStyle}>
          {number}
        </div>
      </div>
    </div>
  );
};

export default PaginationNumberBase;
