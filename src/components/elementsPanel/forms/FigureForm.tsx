import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { TElement } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import {
  changeFigure,
  changeFigureColor,
} from "../../../model/element/FigureActions";
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
        items={[EFigureType.triangle, EFigureType.square, EFigureType.circle]}
        value={figure.figure}
        onChange={(value) => {
          const type = value as EFigureType;

          dispatch(changeFigure, true, slideId, element?.id, type);
        }}
      />

      <FieldInput
        label={"Заливка"}
        onChange={(text) =>
          dispatch(changeFigureColor, true, slideId, element?.id, text)
        }
        value={figure?.fill.toUpperCase()}
        color
      />

      <div className={styles.line}></div>
    </div>
  );
}
