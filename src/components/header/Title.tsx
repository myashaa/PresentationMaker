import { useEffect, useState } from "react";
import { dispatch } from "../../editor";
import { renamePresentation } from "../../model/editor/EditorActions";

import styles from "./Title.module.css";

type Props = {
  title: string;
};

export function Title({ title }: Props) {
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const setTitle = () => {
    dispatch(renamePresentation, true, value);
  };

  return (
    <input
      className={styles.presentationTitle}
      value={value}
      onFocus={(e) => {
        e.currentTarget.select();
      }}
      onBlur={setTitle}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          e.currentTarget.blur();
          setTitle();
        }
      }}
    />
  );
}
