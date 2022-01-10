import styles from "./Form.module.css";
import { FieldInput } from "../../fields/FieldInput";
import { dispatch } from "../../../editor";
import {
  clearBackground,
  setBackground,
} from "../../../model/slide/SlideActions";
import { ActionButton } from "../../header/actions/ActionButton";
import { TBackground, TSlide } from "../../../model/slide/SlideTypes";
import { TImage } from "../../../model/element/ImageTypes";
import { ColorPicker } from "../../fields/colorPicker/ColorPicker";

type SlideFormProps = {
  slide?: TSlide;
};

export function SlideForm({ slide }: SlideFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>
          filter
        </span>
        <span className={styles.headerFormTitle}>Слайд</span>
      </div>
      <FieldInput
        label={"Установить цвет фона"}
        type={"text"}
        onChange={(text) => {
          const b: TBackground = {
            color: text,
          };
          dispatch(setBackground, true, slide?.id, b);
        }}
        value={slide?.background?.color?.toUpperCase()}
      />

      <div style={{ display: "flex" }}>
        <ActionButton
          label="Выбрать фон"
          style={{ flex: 1 }}
          onClick={() => {
            const fileInputNode = document.createElement("input");
            fileInputNode.type = "file";
            fileInputNode.click();
            fileInputNode.addEventListener("change", () => {
              const file = fileInputNode.files?.[0] as File;
              const reader = new FileReader();

              reader.onloadend = function () {
                const newImage: TImage = {
                  image: "https://via.placeholder.com/150",
                };

                if (file.type.includes("image")) {
                  newImage.image = String(reader.result);
                }

                const b: TBackground = {
                  picture: newImage,
                };

                dispatch(setBackground, true, slide?.id, b);
              };

              reader.readAsDataURL(file);
            });
          }}
        />
        <ActionButton
          icon="delete"
          style={{ marginRight: 0 }}
          onClick={() => dispatch(clearBackground, true, slide?.id)}
        />
      </div>
      <ColorPicker />
    </div>
  );
}
