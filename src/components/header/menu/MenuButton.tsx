import styles from "./MenuButton.module.css";

type Props = {
  label: string;
  icon?: string;
  onClick?: () => void;
};

export function MenuButton({ label, icon, onClick }: Props) {
  return (
    <div className={styles.menuButton} onClick={onClick}>
      {icon && (
        <span className={`${styles.buttonIcon} material-icons`}>{icon}</span>
      )}
      {label}
    </div>
  );
}
