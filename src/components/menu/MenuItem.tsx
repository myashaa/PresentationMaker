import { MenuItemProps } from "./MenuTypes";

import styles from "./MenuItem.module.css";

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
        <span className="material-icons" style={{ color: "#d2d2d2" }}>
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
