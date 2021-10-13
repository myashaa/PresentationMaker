import React, { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import "./MenuBar.styles.css";
import { MenuButton } from "./MenuButton";

export type MenuAction = {
  label: string;
  action?: () => void;
};

type Menu = {
  label: string;
  actions?: MenuAction[];
};

type MenuBarProps = {
  menu: Menu[];
};

export function MenuBar({ menu }: MenuBarProps) {
  const [menuIndex, setMenuIndex] = useState(-1);
  const [isExpandMenu, setExpandMenu] = useState(false);

  const menuRef = useRef() as React.RefObject<HTMLDivElement>;
  useOnClickOutside(menuRef, () => {
    expandMenu(-1, false);
  });

  const expandMenu = (id: number, state: boolean) => {
    setMenuIndex(id);
    setExpandMenu(state);
  };

  const menuButtons = menu.map((button, index) => (
    <MenuButton
      key={index}
      label={button.label}
      items={button?.actions || []}
      expand={isExpandMenu && index === menuIndex}
      onClick={() =>
        button?.actions?.length &&
        expandMenu(index, !isExpandMenu || index !== menuIndex)
      }
      onHover={() =>
        button?.actions?.length && isExpandMenu && expandMenu(index, true)
      }
    />
  ));

  return (
    <div ref={menuRef} className="presentation-actions">
      {menuButtons}
    </div>
  );
}
