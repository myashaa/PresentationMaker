import styles from "./Form.module.css";
import { useState } from "react";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { Element } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import { changeElementColor, changeElementBorder } from "../../../model/element/ElementActions";
import { Figures } from "../../../model/element/FigureTypes";
import { changeFigureColor } from "../../../model/element/FigureActions";

type FigureFormProps = {
  element?: Element;
  slideId?: string;
};

// const types = [Figures.square, Figures.circle, Figures.triangle]
// const borders = ["Сплошная", "Пунктирная", "Точечная"]

export function FigureForm({slideId, element}: FigureFormProps) {
  // const [type, setType] = useState(types[0])

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Фигура</span>
      </div>
      {/* <FieldSelect label={"Тип фигуры"} items={types} onChange={(value) => {
        const t = value as Figures
        setType(t)
      }} /> */}
      <FieldInput label={"Заливка"} onChange={(text) => dispatch(changeFigureColor, true, slideId, element?.id, text)} value={element?.data.fill.toUpperCase()} />
      <div className={styles.line}></div>
      <FieldInput label={"Высота"} type={"number"} onChange={(text) => dispatch(resizeElement, true, slideId, element?.id, element?.width, parseInt(text))} value={element?.height.toString()} />
      <FieldInput label={"Ширина"} type={"number"} onChange={(text) => dispatch(resizeElement, true, slideId, element?.id, parseInt(text), element?.height)} value={element?.width.toString()} />
      <FieldInput label={"Позиция сверху"} type={"number"} onChange={(text) => dispatch(moveElement, true, slideId, element?.id, {x: element?.position.x, y: parseInt(text)})} value={element?.position.y.toString()} />
      <FieldInput label={"Позиция слева"} type={"number"} onChange={(text) => dispatch(moveElement, true, slideId, element?.id, {x: parseInt(text), y: element?.position.y})} value={element?.position.x.toString()} />
      {/* <FieldSelect label={"Вид рамки"} items={borders} onChange={(value) => setBorderType(value)} /> */}
      <FieldInput label={"Толщина рамки"} type={"number"} onChange={(text) => dispatch(changeElementBorder, true, slideId, element?.id, { width: parseInt(text), type: element?.border?.type, color: element?.border?.color })} value={element?.border?.width?.toString()} />
      <FieldInput label={"Цвет рамки"} onChange={(text) => dispatch(changeElementBorder, true, slideId, element?.id, {width: element?.border?.width, type: element?.border?.type, color: text})} value={element?.border?.color?.toUpperCase()} />
      <FieldInput label={"Фон"} onChange={(text) => dispatch(changeElementColor, true, slideId, element?.id, text)} value={element?.color?.toUpperCase()} />
    </div>
  );
}
