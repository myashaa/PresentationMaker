import { MenuButtonProps } from "./MenuTypes";
import { MenuPopup } from "./MenuPopup";

import styles from "./MenuButton.module.css";

export function MenuButton({
  label,
  items,
  expand,
  onClick,
  onHover,
}: MenuButtonProps) {
  return (
    <div className={styles.menuButtonContainer}>
      <span
        className={expand ? styles.menuButtonLabelSelected : styles.menuButtonLabel}
        onClick={onClick}
        onMouseEnter={onHover}
      >
        {label}
      </span>
      {expand && items && <MenuPopup data={items || []} onAction={onClick} />}
    </div>
  );
}
