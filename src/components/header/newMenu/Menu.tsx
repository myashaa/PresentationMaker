import { dispatch, getEditor } from "../../../editor";
import { createPresentation, loadPresentation, savePresentation, setPresentation } from "../../../model/editor/EditorActions";
import { updateHistory } from "../../../model/history/HistoryActions";
import { ActionButton } from "../actions/ActionButton";
import styles from "./Menu.module.css";

type MenuProps = {
};


export function Menu({ }: MenuProps) {
  const style = {
    backgroundColor: "#fff",
    padding: "5px 0",
    marginRight: "3px",
    fontWeight: "bold",
    color: "#727272"
  };

  return (
    <div className={styles.container}>
      <ActionButton
        label="Создать"
        onClick={() => {
          dispatch(createPresentation, false);
          dispatch(updateHistory, false, getEditor());
        }}
        style={style}
      />
      <ActionButton
        label="Открыть"
        onClick={() => {
          loadPresentation((object) => {
            dispatch(setPresentation, false, object);
            dispatch(updateHistory, false, getEditor());
          })
        }}
        style={style}
      />
      <ActionButton
        label="Сохранить"
        onClick={() => {
          dispatch(savePresentation, false, {});
        }}
        style={style}
      />
      <ActionButton
        label="Сохранить как pdf"
        style={style}
      />
    </div>
  );
}
