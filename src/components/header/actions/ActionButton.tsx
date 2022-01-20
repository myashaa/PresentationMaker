import { CSSProperties } from "react";
import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  label?: string;
  icon?: string | React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  iconStyle?: CSSProperties;
};

export function ActionButton({
  label,
  icon,
  primary,
  onClick,
  style,
  iconStyle,
}: ActionButtonProps) {
  return (
    <button
      style={style}
      className={primary ? styles.actionButtonPrimary : styles.actionButton}
      onClick={onClick}
    >
      {icon && (
        <span
          style={iconStyle}
          className={`${styles.buttonIcon} material-icons`}
        >
          {icon}
        </span>
      )}
      {label && <span className={styles.actionButtonLabel}>{label}</span>}
    </button>
  );
}
