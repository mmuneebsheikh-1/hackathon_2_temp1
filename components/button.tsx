import type { NextPage } from "next";
import ButtonBase from "./button-base";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;

  /** Variant props */
  destructive?: boolean;
  hierarchy?: string;
  icon?: string;
  size?: string;
  state?: string;
};

const Button: NextPage<ButtonType> = ({
  className = "",
  destructive = false,
  hierarchy = "Primary",
  icon = false,
  size = "md",
  state = "Default",
}) => {
  return (
    <div
      className={[styles.button, className].join(" ")}
      data-destructive={destructive}
      data-hierarchy={hierarchy}
      data-icon={icon}
      data-size={size}
      data-state={state}
    >
      <ButtonBase icon="Leading" size="sm" />
    </div>
  );
};

export default Button;
