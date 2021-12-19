import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  label?: string;
  icon?: string;
  primary?: boolean;
  onClick?: () => void;
};

export function ActionButton({
  label,
  icon,
  primary,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      className={primary ? styles.actionButtonPrimary : styles.actionButton}
      onClick={onClick}
    >
      {icon && <span className="material-icons">{icon}</span>}
      {label && <span className={styles.actionButtonLabel}>{label}</span>}
    </button>
  );
}
