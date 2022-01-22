import Title from "./Title";

import Logo from "../../assets/icons/logo.svg";

import styles from "./Header.module.css";
import MenuBar from "./menu/MenuBar";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.appLogo} alt="" />
      <div className={styles.presentationInfo}>
        <Title />
        <MenuBar />
      </div>
    </div>
  );
}
