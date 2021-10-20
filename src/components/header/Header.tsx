import React from "react";

import "./Header.style.css";

import Logo from "../../logo.svg";
import { MenuBar } from "../menu/MenuBar";
import { PresentationTitle } from "../header/PresentationTitle";

import { menu } from "./Menu";

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className="header">
      <img src={Logo} className="app-logo" alt="" />
      <div className="presentation-info">
        <PresentationTitle title="Команда Ю - Демонстрация" />
        <MenuBar menu={menu} />
      </div>
    </div>
  );
}
