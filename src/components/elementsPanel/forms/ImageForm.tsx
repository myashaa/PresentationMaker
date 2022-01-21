import styles from "./Form.module.css";
import { TElement } from "../../../model/element/ElementTypes";
import { EFilter, TImage } from "../../../model/element/ImageTypes";
import { Select } from "../../inputs/Select";
import { connect } from "react-redux";
import { AppDispatch } from "../../../redux/store";

type ImageFormProps = {
  element: TElement;
  slideId: string;
  setFilter: (element: TElement, slide: string, filter: EFilter) => void;
};

function ImageForm({ element, slideId, setFilter }: ImageFormProps) {
  const image = element?.data as TImage;

  const handleSetFilter = (value: string) => {
    const filter = value as EFilter;
    setFilter(element, slideId, filter);
  };

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>image</span>
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>

      <div className={styles.formTitle}>Фильтр</div>
      <div className={styles.formFlex}>
        <Select
          items={[EFilter.none, EFilter.blur, EFilter.baw]}
          value={image.filter || "Нет"}
          onChange={handleSetFilter}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    setFilter: (element: TElement, slide: string, filter: EFilter) =>
      dispatch({
        type: "SET_IMAGE_FILTER",
        payload: { element, slide, filter },
      }),
  };
};

export default connect(null, mapDispatchToProps)(ImageForm);
