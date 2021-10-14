import { MenuButtonProps } from "./MenuTypes";
import { MenuPopup } from "./MenuPopup";

import "./MenuButton.styles.css";

export function MenuButton({
  label,
  items,
  expand,
  onClick,
  onHover,
}: MenuButtonProps) {
  return (
    <div className="menu-container">
      <span
        className={`menu-label ${expand ? "selected" : ""}`}
        onClick={onClick}
        onMouseEnter={onHover}
      >
        {label}
      </span>
      {expand && items && <MenuPopup data={items || []} onAction={onClick} />}
    </div>
  );
}
