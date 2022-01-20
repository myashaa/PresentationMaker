import styles from "./Form.module.css";
import { FieldSelect } from "../../fields/FieldSelect";
import { TElement } from "../../../model/element/ElementTypes";
import { EFilter, TImage } from "../../../model/element/ImageTypes";
import { dispatch } from "../../../editor";
import { setFilter } from "../../../model/element/ImageActions";
import { TextInput } from "../../inputs/TextInput";

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

      <div className={styles.formTitle}>Фильтр</div>
      <div className={styles.formFlex}>
        <TextInput style={{ marginRight: 8, flex: 1, width: "100%" }} />
        <TextInput label="%" style={{ width: 64 }} />
      </div>

      {/* <FieldSelect
        label={"Фильтр"}
        items={[EFilter.none, EFilter.blur, EFilter.baw]}
        value={image.filter}
        onChange={(value) => {
          const filter = value as EFilter;
          dispatch(setFilter, true, slideId, element?.id, filter);
        }}
      /> */}
    </div>
  );
}
