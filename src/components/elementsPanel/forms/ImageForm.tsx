import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { TElement } from "../../../model/element/ElementTypes";
import { TImage } from "../../../model/element/ImageTypes";

type ImageFormProps = {
  element?: TElement;
  slideId?: string;
};

export function ImageForm({ element, slideId }: ImageFormProps) {
  const image = element?.data as TImage;

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          category
        </span>
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>
      {/* <FieldSelect label={"Фильтр"} items={filters} onChange={(value) => setFilter(value)} /> */}
      <FieldSelect
        label={"Фильтр"}
        items={["asf"]}
        value={"Блюр"}
        onChange={(value) => {
          // let text = "";
          // if (value == "Сплошная") text = "solid";
          // if (value == "Пунктирная") text = "dashed";
          // if (value == "Точечная") text = "dotted";
          // if (value == "Двойная") text = "double";
          // dispatch(changeElementBorder, true, slideId, element?.id, {
          //   width: element?.border?.width,
          //   type: value,
          //   color: element?.border?.color,
          // });
        }}
      />
      <div className={styles.line}></div>
    </div>
  );
}
