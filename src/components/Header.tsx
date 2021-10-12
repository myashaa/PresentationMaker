import React from "react";

import "./Header.style.css";

import Logo from "../logo.svg";
import { Menu } from "./Menu";

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className="header">
      <img src={Logo} className="app-logo" alt="" />
      <div className="presentation-info">
        <h1 className="presentation-title">Название презентации</h1>
        <div className="presentation-actions">
          <Menu
            label="Файл"
            items={[
              "Создать",
              "Открыть",
              "Переименовать",
              "Сохранить",
              "Сохранить как",
            ]}
          />
          <Menu label="Вид" items={["Смотреть"]} />
          <Menu label="Слайд" items={["Создать", "Удалить", "Изменить фон"]} />
        </div>
      </div>
    </div>
  );
}
