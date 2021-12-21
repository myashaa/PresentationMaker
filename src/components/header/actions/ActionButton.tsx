import { CSSProperties } from "react";
import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  label?: string;
  icon?: string;
  primary?: boolean;
  onClick?: () => void;
  style?: CSSProperties
};

export function ActionButton({
  label,
  icon,
  primary,
  onClick,
  style,
}: ActionButtonProps) {
  return (
    <button
      style={style}
      className={primary ? styles.actionButtonPrimary : styles.actionButton}
      onClick={onClick}
    >
      {icon && <span className="material-icons">{icon}</span>}
      {label && <span className={styles.actionButtonLabel}>{label}</span>}
    </button>
  );
}
