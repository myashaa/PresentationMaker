import { Slide } from "../../model/slide/SlideTypes";
import { Element as ElementType } from "../../model/element/ElementTypes";

import styles from "./Editor.module.css";

type EditorProps = {
  slide?: Slide;
  empty?: boolean;
};

export function Editor({ slide, empty }: EditorProps) {
  return (
    <>
      {!empty && (
        <div className={styles.appEditorView}>
          {slide?.elementList.map((element, index) => (
            <Element key={index} element={element} />
          ))}
        </div>
      )}
      {empty && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#acacac" }}>Создайте или выберите слайд</p>
        </div>
      )}
    </>
  );
}

type ElementProps = {
  element: ElementType;
};

export function Element({ element }: ElementProps) {
  return (
    <div
      className={styles.element}
      style={{
        width: element.width,
        height: element.height,
        top: element.position.y,
        left: element.position.x,
      }}
    ></div>
  );
}
