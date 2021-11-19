import { MenuBar } from "../menu/MenuBar";
import { PresentationTitle } from "./PresentationTitle";
import { menu } from "../menu/Menu";
import { setPresentationTitle } from "../PresentationUtils";

import Logo from "../../assets/icons/logo.svg";

import styles from "./Header.module.css";

type HeaderProps = {
  title?: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.appLogo} alt="" />
      <div className={styles.presentationInfo}>
        <PresentationTitle
          title={title || "Без имени"}
          onSubmit={(title) => setPresentationTitle(title)}
        />
        <MenuBar menu={menu} />
      </div>
    </div>
  );
}
