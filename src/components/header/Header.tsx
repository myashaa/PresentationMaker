import React from "react";

import styles from "./Header.module.css";

import Logo from "../../logo.svg";

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.appLogo} alt="" />
      <div className={styles.presentationInfo}>{children}</div>
    </div>
  );
}
