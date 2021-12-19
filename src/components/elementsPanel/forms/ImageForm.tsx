import styles from "./Form.module.css";
import { useState } from "react";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { dispatch } from "../../../editor";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import { changeElementColor } from "../../../model/element/ElementActions";
import { Element } from "../../../model/element/ElementTypes";

type ImageFormProps = {
  element?: Element;
  slideId?: string;
};

const filters = ["Блюр", "Чб"]
const colors = ["Красный", "Оранжевый", "Желтый", "Зеленый", "Голубой", "Синий", "Фиолетовый", "Розовый", "Белый", "Черный"]
const borders = ["Сплошная", "Пунктирная", "Точечная", "Двойная"]

export function ImageForm({element, slideId}: ImageFormProps) {
  const [filter, setFilter] = useState(filters[0])
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
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>
      <FieldSelect label={"Фильтр"} items={filters} onChange={(value) => setFilter(value)} />
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
