import { MenuItemProps } from "./MenuTypes";

import "./MenuItem.styles.css";

export function MenuItem({ label, actionCallback }: MenuItemProps) {
  return (
    <div className="menu-item" onClick={actionCallback}>
      <span>{label}</span>
    </div>
  );
}
