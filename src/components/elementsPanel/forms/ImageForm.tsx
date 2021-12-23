import styles from "./Form.module.css";
import { useState } from "react";
import { FieldSelect } from "../../fields/FieldSelect";
import { FieldInput } from "../../fields/FieldInput";
import { dispatch } from "../../../editor";
import { moveElement, resizeElement } from "../../../model/slide/SlideActions";
import {
  changeElementColor,
  changeElementBorder,
} from "../../../model/element/ElementActions";
import { TElement } from "../../../model/element/ElementTypes";

type ImageFormProps = {
  element?: TElement;
  slideId?: string;
};

export function ImageForm({ element, slideId }: ImageFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          category
        </span>
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>
      {/* <FieldSelect label={"Фильтр"} items={filters} onChange={(value) => setFilter(value)} /> */}
      {/* <FieldSelect
        label={"Фильтр"}
        items={["Блюр"]}
        value={element?.data?.filter}
        onChange={(value) => {
          // let text = "";
          // if (value == "Сплошная") text = "solid";
          // if (value == "Пунктирная") text = "dashed";
          // if (value == "Точечная") text = "dotted";
          // if (value == "Двойная") text = "double";
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: element?.border?.width,
            type: value,
            color: element?.border?.color,
          })
        }
        }
      />  */}
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
        items={["Сплошная", "Пунктирная", "Точечная", "Двойная"]}
        value={element?.border?.type}
        onChange={(value) => {
          let text = "";
          if (value === "Сплошная") text = "solid";
          if (value === "Пунктирная") text = "dashed";
          if (value === "Точечная") text = "dotted";
          if (value === "Двойная") text = "double";
          dispatch(changeElementBorder, true, slideId, element?.id, {
            width: element?.border?.width,
            type: text,
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
