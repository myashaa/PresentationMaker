import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

import { MenuButton } from "./MenuButton";

import styles from "./MenuBar.module.css";
import { AppDispatch } from "../../../redux/store";

export function MenuBar() {
  return (
    <div className={styles.presentationMenuBar}>
      <MenuButton label="Создать" icon="insert_drive_file" onClick={() => {}} />
      <MenuButton label="Открыть" icon="folder_open" onClick={() => {}} />
      <MenuButton label="Сохранить" icon="save  " onClick={() => {}} />
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    // ...
  };
};
