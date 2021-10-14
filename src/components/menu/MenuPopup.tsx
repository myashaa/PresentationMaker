import { MenuItem } from "./MenuItem";
import { MenuPopupProps } from "./MenuTypes";

import "./MenuPopup.styles.css";

export function MenuPopup({ data, onAction }: MenuPopupProps) {
  const menuItems = data.map((item, index) => (
    <MenuItem
      key={index}
      label={item.label}
      actionCallback={() => {
        onAction && onAction();
        item.action && item.action();
      }}
    />
  ));

  return <div className="menu-popup">{menuItems}</div>;
}
