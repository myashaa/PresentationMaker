import { MenuItem } from "./MenuItem";
import { MenuPopupProps } from "./MenuTypes";

import styles from "./MenuPopup.module.css";

export function MenuPopup({ data, onAction }: MenuPopupProps) {
  const menuItems = data.map((item, index) => (
    <MenuItem
      key={index}
      materialIcon={item.icon}
      label={item.label}
      actionCallback={() => {
        onAction && onAction();
        item.action && item.action();
      }}
    />
  ));

  return <div className={styles.menuPopup}>{menuItems}</div>;
}
