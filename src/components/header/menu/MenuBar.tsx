import { MenuButton } from "./MenuButton";

import styles from "./MenuBar.module.css";
import { AppDispatch } from "../../../redux/store";
import { connect } from "react-redux";
import { loadPresentation } from "../../../model/editor/EditorActions";
import { TPresentation } from "../../../model/presentation/PresentationTypes";

type Props = {
  newPresentation: () => void;
  openPresentation: (presentation: TPresentation) => void;
  savePresentation: () => void;
};

function MenuBar({
  newPresentation,
  openPresentation,
  savePresentation,
}: Props) {
  const handleOpen = () => {
    loadPresentation((object) => {
      openPresentation(object);
    });
  };

  return (
    <div className={styles.presentationMenuBar}>
      <MenuButton
        label="Создать"
        onClick={newPresentation}
      />
      <MenuButton label="Открыть" onClick={handleOpen} />
      <MenuButton label="Сохранить" onClick={savePresentation} />
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    newPresentation: () =>
      dispatch({
        type: "NEW_PRESENTATION",
        payload: null,
      }),
    openPresentation: (presentation: TPresentation) =>
      dispatch({
        type: "OPEN_PRESENTATION",
        payload: presentation,
      }),
    savePresentation: () =>
      dispatch({
        type: "SAVE_PRESENTATION",
        payload: null,
      }),
  };
};

export default connect(null, mapDispatchToProps)(MenuBar);
