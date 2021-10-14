import React from "react";

import "./Header.style.css";

import Logo from "../logo.svg";
import { MenuBar } from "../menu/MenuBar";
import { PresentationTitle } from "../header/PresentationTitle";

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className="header">
      <img src={Logo} className="app-logo" alt="" />
      <div className="presentation-info">
        <PresentationTitle title="Команда Ю - Демонстрация" />
        <MenuBar
          menu={[
            {
              label: "Файл",
              actions: [
                {
                  label: "Создать",
                  action: function () {
                    console.log("Новая презентация");
                  },
                },
                { label: "Открыть" },
                { label: "Переименовать" },
                { label: "Сохранить" },
                { label: "Сохранить как" },
              ],
            },
            {
              label: "Слайд",
              actions: [
                { label: "Новый слайд" },
                { label: "Удалить слайд" },
                { label: "Изменить фон" },
              ],
            },
            { label: "Вид", actions: [{ label: "Режим просмотра" }] },
            {
              label: "Прочее",
              actions: [
                { label: "Инструкция пользователя" },
                { label: "О проекте" },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
