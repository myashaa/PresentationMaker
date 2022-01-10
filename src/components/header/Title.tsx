import { useState } from "react";
import { connect } from "react-redux";
import { renamePresentation } from "../../model/editor/EditorActions";
import { TPresentation } from "../../model/presentation/PresentationTypes";
import { AppDispatch, RootState } from "../../redux/store";

import styles from "./Title.module.css";

type Props = {
  presentation: TPresentation;
  renamePresentation: (presentation: TPresentation, name: string) => void;
};

export function Title({ presentation, renamePresentation }: Props) {
  const [name, setName] = useState(presentation.name);

  const setTitle = () => {
    renamePresentation(presentation, name);
  };

  return (
    <input
      className={styles.presentationTitle}
      value={name}
      onFocus={(e) => {
        e.currentTarget.select();
      }}
      onBlur={setTitle}
      onChange={(e) => setName(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          e.currentTarget.blur();
          setTitle();
        }
      }}
      placeholder="Новая презентация"
    />
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    renamePresentation: (presentation: TPresentation, name: string) =>
      dispatch({
        type: "RENAME_PRESENTATION",
        payload: renamePresentation(presentation, name),
      }),
  };
};

const mapStateToProps = (state: RootState) => {
  return { presentation: state.presentation };
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
