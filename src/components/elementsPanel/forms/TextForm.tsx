import styles from "./Form.module.css";
import { useState } from "react";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { FieldCheckbox } from "../../fields/FieldCheckbox";
import { Element } from "../../../model/element/ElementTypes";
import { dispatch } from "../../../editor";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import { changeElementColor } from "../../../model/element/ElementActions";
import { setFontBold } from "../../../model/element/TextActions";

type TextFormProps = {
  element?: Element;
  slideId?: string;
};

// для списка элементов нужно для кей
type TListElement = {
  id: string;
  value: string;
}

const fonts = ["Arial", "Roboto", "Open Sans"]
const colors = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый", "Розовый", "Белый", "Черный"]
const borders = ["Сплошная", "Пунктирная", "Точечная", "Двойная"]

export function TextForm({ element, slideId }: TextFormProps) {
  const [fontFamily, setFontFamily] = useState(fonts[0])
  const [fontSize, setFontSize] = useState(0)
  const [color, setColor] = useState(colors[0])  
  // const [isBold, setBold] = useState(false)
  const [isUnderline, setUnderline] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [borderWidth, setBorderWidth] = useState(0)
  const [borderType, setBorderType] = useState(borders[0])
  const [borderColor, setBorderColor] = useState(colors[0])  
  const [backgroundColor, setBackgroundColor] = useState(colors[0])  
  
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <FieldSelect label={"Шрифт"} items={fonts} onChange={(value) => setFontFamily(value)} />
      <FieldInput label={"Размер"} type={"number"} onChange={(text) => setFontSize(parseInt(text))} value={fontSize.toString()} />
      <FieldSelect label={"Цвет"} items={colors} onChange={(value) => setColor(value)} />
      <FieldCheckbox label={"Жирный"} checked={element?.data.bold} onChange={() => dispatch(setFontBold, true, slideId, element?.id, !element?.data.bold)} />
      <FieldCheckbox label={"Подчеркнутый"} checked={isUnderline} onChange={() => setUnderline(!isUnderline)} />
      <FieldCheckbox label={"Курсивный"} checked={isItalic} onChange={() => setItalic(!isItalic)} />
      <div className={styles.line}></div>
      <FieldInput label={"Высота"} type={"number"} onChange={(text) => dispatch(resizeElement, true, slideId, element?.id, element?.width, parseInt(text))} value={element?.height.toString()} />
      <FieldInput label={"Ширина"} type={"number"} onChange={(text) => dispatch(resizeElement, true, slideId, element?.id, parseInt(text), element?.height)} value={element?.width.toString()} />
      <FieldInput label={"Позиция сверху"} type={"number"} onChange={(text) => dispatch(moveElement, true, slideId, element?.id, {x: element?.position.x, y: parseInt(text)})} value={element?.position.y.toString()} />
      <FieldInput label={"Позиция слева"} type={"number"} onChange={(text) => dispatch(moveElement, true, slideId, element?.id, {x: parseInt(text), y: element?.position.y})} value={element?.position.x.toString()} />
      <FieldInput label={"Рамка"} type={"number"} onChange={(text) => setBorderWidth(parseInt(text))} value={borderWidth.toString()} />
      <FieldSelect items={borders} onChange={(value) => setBorderType(value)} />
      <FieldSelect items={colors} onChange={(value) => setBorderColor(value)} />
      <FieldInput label={"Фон"} onChange={(text) => dispatch(changeElementColor, true, slideId, element?.id, text)} value={element?.color?.toUpperCase()} />
    </div>
  );
}
