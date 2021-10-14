export type MenuAction = {
  label: string;
  action?: () => void;
};

export type Menu = {
  label: string;
  actions?: MenuAction[];
};

export type MenuBarProps = {
  menu: Menu[];
};

export type MenuButtonProps = {
  label: string;
  items?: MenuAction[];
  expand?: boolean;
  onClick?: () => void;
  onHover?: () => void;
};

export type MenuItemProps = {
  label: string;
  actionCallback?: () => void;
};

export type MenuPopupProps = {
  data: MenuAction[];
  onAction?: () => void;
};
