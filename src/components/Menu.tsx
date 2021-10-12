import React, { useState } from "react";

import "./Menu.style.css";

type MenuProps = {
  label: string;
  items?: string[];
  render?: MenuItemProps[];
};

export function Menu({ label, items, render }: MenuProps) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div className="menu-container">
      <span
        className={`menu-label ${isPopupVisible ? "selected" : ""}`}
        onClick={() => setPopupVisible(!isPopupVisible)}
      >
        {label}
      </span>
      {isPopupVisible && <MenuPopup data={items || []} />}
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
  data: string[];
};

function MenuPopup({ data }: MenuPopupProps) {
  const menuItems = data.map((item, index) => (
    <MenuItem key={index} label={item} />
  ));

  return <div className="menu-popup">{menuItems}</div>;
}
