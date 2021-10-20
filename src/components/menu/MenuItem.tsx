import { MenuItemProps } from "./MenuTypes";

import "./MenuItem.styles.css";

export function MenuItem({
  label,
  materialIcon,
  actionCallback,
}: MenuItemProps) {
  return (
    <div
      className={label === "" ? "menu-popup-divider" : "menu-popup-item"}
      onClick={actionCallback}
    >
      {materialIcon && (
        <span className="material-icons" style={{ color: "#d2d2d2" }}>
          {materialIcon}
        </span>
      )}
      {label && (
        <span
          className="menu-item-label"
          style={{ paddingLeft: !materialIcon ? 34 : 10 }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
