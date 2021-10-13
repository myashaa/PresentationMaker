import React, { useState } from "react";
import { MenuAction } from "./MenuBar";

import "./MenuButton.styles.css";

type MenuButtonProps = {
  label: string;
  items?: MenuAction[];
  expand?: boolean;
  onClick?: () => void;
  onHover?: () => void;
};

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

type MenuItemProps = {
  label: string;
  actionCallback?: () => void;
};

function MenuItem({ label, actionCallback }: MenuItemProps) {
  return (
    <div className="menu-item" onClick={actionCallback}>
      <span>{label}</span>
    </div>
  );
}

type MenuPopupProps = {
  data: MenuAction[];
  onAction?: () => void;
};

function MenuPopup({ data, onAction }: MenuPopupProps) {
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
