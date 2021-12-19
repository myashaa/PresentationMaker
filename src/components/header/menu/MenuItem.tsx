import { MenuItemProps } from "./MenuTypes";

import styles from "./MenuItem.module.css";
import { COLORS } from "../../../colors";

export function MenuItem({
  label,
  materialIcon,
  actionCallback,
}: MenuItemProps) {
  return (
    <div
      className={label === "" ? styles.menuPopupDivider : styles.menuPopupItem}
      onClick={actionCallback}
    >
      {materialIcon && (
        <span className="material-icons" style={{ color: COLORS.lightGrey }}>
          {materialIcon}
        </span>
      )}
      {label && (
        <span
          className={styles.menuItemLabel}
          style={{ paddingLeft: !materialIcon ? 34 : 10 }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
