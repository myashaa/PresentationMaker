import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { EBorderStyle, TElement } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import {
  changeElementColor,
  changeElementBorder,
} from "../../../model/element/ElementActions";
import { changeFigureColor } from "../../../model/element/FigureActions";
import { EFigureType, TFigure } from "../../../model/element/FigureTypes";

type FigureFormProps = {
  element?: TElement;
  slideId?: string;
};

export function FigureForm({ slideId, element }: FigureFormProps) {
  const figure = element?.data as TFigure;

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          category
        </span>
        <span className={styles.headerFormTitle}>Фигура</span>
      </div>

      <FieldSelect
        label={"Тип фигуры"}
        items={[EFigureType.square, EFigureType.circle, EFigureType.triangle]}
        value={figure.figure}
        onChange={(value) => {
          const type = value as EFigureType;

          // dispatch(changeElementBorder, true, slideId, element?.id, {
          //   width: element?.border?.width,
          //   type,
          //   color: element?.border?.color,
          // });
        }}
      />

      <FieldInput
        label={"Заливка"}
        onChange={(text) =>
          dispatch(changeFigureColor, true, slideId, element?.id, text)
        }
        value={figure?.fill.toUpperCase()}
      />

      <div className={styles.line}></div>

      <FieldInput
        label={"Высота"}
        type={"number"}
        onChange={(text) =>
          dispatch(
            resizeElement,
            true,
            slideId,
            element?.id,
            element?.width,
            parseInt(text)
          )
        }
        value={element?.height.toString()}
      />

      <FieldInput
        label={"Ширина"}
        type={"number"}
        onChange={(text) =>
          dispatch(
            resizeElement,
            true,
            slideId,
            element?.id,
            parseInt(text),
            element?.height
          )
        }
        value={element?.width.toString()}
      />
      <FieldInput
        label={"Позиция сверху"}
        type={"number"}
        onChange={(text) =>
          dispatch(moveElement, true, slideId, element?.id, {
            x: element?.position.x,
            y: parseInt(text),
          })
        }
        value={element?.position.y.toString()}
      />
      <FieldInput
        label={"Позиция слева"}
        type={"number"}
        onChange={(text) =>
          dispatch(moveElement, true, slideId, element?.id, {
            x: parseInt(text),
            y: element?.position.y,
          })
        }
        value={element?.position.x.toString()}
      />

      <FieldSelect
        label={"Вид рамки"}
        items={[EBorderStyle.dashed, EBorderStyle.dotted, EBorderStyle.solid]}
        value={element?.border?.type}
        onChange={(value) => {
          const style = value as EBorderStyle;
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: element?.border?.width,
            type: style,
            color: element?.border?.color,
          });
        }}
      />

      <FieldInput
        label={"Толщина рамки"}
        type={"number"}
        onChange={(text) =>
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: parseInt(text),
            type: element?.border?.type,
            color: element?.border?.color,
          })
        }
        value={element?.border?.width?.toString()}
      />

      <FieldInput
        label={"Цвет рамки"}
        onChange={(text) =>
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: element?.border?.width,
            type: element?.border?.type,
            color: text,
          })
        }
        value={element?.border?.color?.toUpperCase()}
      />

      <FieldInput
        label={"Фон"}
        onChange={(text) =>
          dispatch(changeElementColor, true, slideId, element?.id, text)
        }
        value={element?.color?.toUpperCase()}
      />
    </div>
  );
}
