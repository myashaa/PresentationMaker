import { connect } from "react-redux";
import {
  TElement,
  TPosition,
  TSize,
} from "../../../model/element/ElementTypes";
import { AppDispatch } from "../../../redux/store";
import { TextInput } from "../../inputs/TextInput";

import styles from "./Form.module.css";

type Props = {
  element: TElement;
  slideId: string;
  moveElement: (id: string, position: TPosition, slide: string) => void;
  resizeElement: (id: string, size: TSize, slide: string) => void;
};

function ElementForm({ element, slideId, resizeElement, moveElement }: Props) {
  const setWidth = (value: string) => {
    const w = parseInt(value);
    resizeElement(element?.id, { width: w, height: element.height }, slideId);
  };

  const setHeight = (value: string) => {
    const h = parseInt(value);
    resizeElement(element.id, { width: element.width, height: h }, slideId);
  };

  const setX = (value: string) => {
    const x = parseInt(value);
    moveElement(element?.id, { x, y: element.position.y }, slideId);
  };

  const setY = (value: string) => {
    const y = parseInt(value);
    moveElement(element?.id, { x: element.position.x, y }, slideId);
  };

  return (
    <div>
      <div className={styles.formTitle}>Размеры</div>
      <div className={styles.formFlex}>
        <TextInput
          label="Ширина"
          value={`${element?.width}`}
          style={{ marginRight: 8 }}
          onChange={setWidth}
        />
        <TextInput
          label="Высота"
          value={`${element?.height}`}
          onChange={setHeight}
        />
      </div>

      <div className={styles.formTitle}>Позиция</div>
      <div className={styles.formFlex}>
        <TextInput
          label="X"
          value={`${element?.position.x}`}
          style={{ marginRight: 8 }}
          onChange={setX}
        />
        <TextInput
          label="Y"
          value={`${element?.position.y}`}
          onChange={setY}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    moveElement: (id: string, position: TPosition, slide: string) =>
      dispatch({
        type: "MOVE_ELEMENT",
        payload: { id, position, slide },
      }),
    resizeElement: (id: string, size: TSize, slide: string) =>
      dispatch({
        type: "RESIZE_ELEMENT",
        payload: { id, width: size.width, height: size.height, slide },
      }),
  };
};

export default connect(null, mapDispatchToProps)(ElementForm);
