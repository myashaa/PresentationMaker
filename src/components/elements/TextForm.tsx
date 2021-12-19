import styles from "./Form.module.css";
import { FieldInput } from "../form/FieldInput";
import { FieldCheckbox } from "../form/FieldCheckbox";
import { FieldSelect } from "../form/FieldSelect";
import { useState } from "react";

type TextFormProps = {};

// для списка элементов нужно для кей
type TListElement = {
  id: string;
  value: string;
}

const fonts = ["Arial", "Roboto", "Open Sans"]
const colors = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый", "Розовый", "Белый", "Черный"]
const borders = ["Сплошная", "Пунктирная", "Точечная", "Двойная"]

export function TextForm({ }: TextFormProps) {
  const [fontFamily, setFontFamily] = useState(fonts[0])
  const [fontSize, setFontSize] = useState(0)
  const [color, setColor] = useState(colors[0])  
  const [isBold, setBold] = useState(false)
  const [isUnderline, setUnderline] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [marginTop, setMarginTop] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
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
      <FieldCheckbox label={"Жирный"} checked={isBold} onChange={() => setBold(!isBold)} />
      <FieldCheckbox label={"Подчеркнутый"} checked={isUnderline} onChange={() => setUnderline(!isUnderline)} />
      <FieldCheckbox label={"Курсивный"} checked={isItalic} onChange={() => setItalic(!isItalic)} />
      <div className={styles.line}></div>
      <FieldInput label={"Высота"} type={"number"} onChange={(text) => setHeight(parseInt(text))} value={height.toString()} />
      <FieldInput label={"Ширина"} type={"number"} onChange={(text) => setWidth(parseInt(text))} value={width.toString()} />
      <FieldInput label={"Отступ сверху"} type={"number"} onChange={(text) => setMarginTop(parseInt(text))} value={marginTop.toString()} />
      <FieldInput label={"Отступ слева"} type={"number"} onChange={(text) => setMarginLeft(parseInt(text))} value={marginLeft.toString()} />
      <FieldInput label={"Рамка"} type={"number"} onChange={(text) => setBorderWidth(parseInt(text))} value={borderWidth.toString()} />
      <FieldSelect items={borders} onChange={(value) => setBorderType(value)} />
      <FieldSelect items={colors} onChange={(value) => setBorderColor(value)} />
      <FieldSelect label={"Заливка"} items={colors} onChange={(value) => setBackgroundColor(value)} />
    </div>
  );
}
