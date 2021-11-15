import React from "react";

import styles from "./Header.module.css";

import Logo from "../../logo.svg";
import { MenuBar } from "../menu/MenuBar";
import { PresentationTitle } from "../header/PresentationTitle";

import { menu } from "./Menu";

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.appLogo} alt="" />
      <div className={styles.presentationInfo}>
        <PresentationTitle title="Команда Ю" />
        <MenuBar menu={menu} />
      </div>
    </div>
  );
}
