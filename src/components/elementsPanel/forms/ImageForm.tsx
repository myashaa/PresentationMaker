import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { TElement } from "../../../model/element/ElementTypes";
import { EFilter, TImage } from "../../../model/element/ImageTypes";
import { dispatch } from "../../../editor";
import { setFilter } from "../../../model/element/ImageActions";

type ImageFormProps = {
  element?: TElement;
  slideId?: string;
};

export function ImageForm({ element, slideId }: ImageFormProps) {
  const image = element?.data as TImage;

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>image</span>
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>
      {/* <FieldSelect label={"Фильтр"} items={filters} onChange={(value) => setFilter(value)} /> */}
      <FieldSelect
        label={"Фильтр"}
        items={[EFilter.none, EFilter.blur, EFilter.baw]}
        value={image.filter}
        onChange={(value) => {
          const filter = value as EFilter;
          dispatch(setFilter, true, slideId, element?.id, filter);
        }}
      />
      <div className={styles.line}></div>
    </div>
  );
}
