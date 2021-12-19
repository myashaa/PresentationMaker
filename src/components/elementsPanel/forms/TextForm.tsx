import styles from "./Form.module.css";
import { useState } from "react";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { FieldCheckbox } from "../../fields/FieldCheckbox";
import { Element } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import { changeElementColor, changeElementBorder } from "../../../model/element/ElementActions";
import { setFontBold, setFontUnderline, setFontItalic } from "../../../model/element/TextActions";

type TextFormProps = {
  element?: Element;
  slideId?: string;
};

// для списка элементов нужно для кей
type TListElement = {
  id: string;
  value: string;
}

// const fonts = ["Arial", "Roboto", "Open Sans"]
// const borders = ["Сплошная", "Пунктирная", "Точечная"]

export function TextForm({ element, slideId }: TextFormProps) {
  // const [fontFamily, setFontFamily] = useState(fonts[0])
  // const [fontSize, setFontSize] = useState(0)
  // const [color, setColor] = useState(colors[0])  
  // const [borderType, setBorderType] = useState(borders[0])
  
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      {/* <FieldSelect label={"Шрифт"} items={fonts} onChange={(value) => setFontFamily(value)} /> */}
      {/* <FieldInput label={"Размер"} type={"number"} onChange={(text) => setFontSize(parseInt(text))} value={fontSize.toString()} /> */}
      {/* <FieldSelect label={"Цвет"} items={colors} onChange={(value) => setColor(value)} /> */}
      <FieldCheckbox label={"Жирный"} checked={element?.data.bold} onChange={() => dispatch(setFontBold, true, slideId, element?.id, !element?.data.bold)} />
      <FieldCheckbox label={"Подчеркнутый"} checked={element?.data.underline} onChange={() => dispatch(setFontUnderline, true, slideId, element?.id, !element?.data.underline)} />
      <FieldCheckbox label={"Курсивный"} checked={element?.data.italic} onChange={() => dispatch(setFontItalic, true, slideId, element?.id, !element?.data.italic)} />
      <div className={styles.line}></div>
      <FieldInput label={"Высота"} type={"number"} onChange={(text) => dispatch(resizeElement, true, slideId, element?.id, element?.width, parseInt(text))} value={element?.height.toString()} />
      <FieldInput label={"Ширина"} type={"number"} onChange={(text) => dispatch(resizeElement, true, slideId, element?.id, parseInt(text), element?.height)} value={element?.width.toString()} />
      <FieldInput label={"Позиция сверху"} type={"number"} onChange={(text) => dispatch(moveElement, true, slideId, element?.id, {x: element?.position.x, y: parseInt(text)})} value={element?.position.y.toString()} />
      <FieldInput label={"Позиция слева"} type={"number"} onChange={(text) => dispatch(moveElement, true, slideId, element?.id, {x: parseInt(text), y: element?.position.y})} value={element?.position.x.toString()} />
      {/* <FieldSelect label={"Вид рамки"} items={borders} onChange={(value) => setBorderType(value)} /> */}
      <FieldInput label={"Толщина рамки"} type={"number"} onChange={(text) => dispatch(changeElementBorder, true, slideId, element?.id, { width: parseInt(text), type: element?.border?.type, color: element?.border?.color })} value={element?.border?.width.toString()} />
      <FieldInput label={"Цвет рамки"} onChange={(text) => dispatch(changeElementBorder, true, slideId, element?.id, {width: element?.border?.width, type: element?.border?.type, color: text})} value={element?.border?.color?.toUpperCase()} />
      <FieldInput label={"Фон"} onChange={(text) => dispatch(changeElementColor, true, slideId, element?.id, text)} value={element?.color?.toUpperCase()} />
    </div>
  );
}
