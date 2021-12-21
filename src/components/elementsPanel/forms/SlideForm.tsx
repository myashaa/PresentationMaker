import styles from "./Form.module.css";
import { FieldInput } from "../../fields/FieldInput";
import { dispatch } from "../../../editor";
import { clearBackground, setBackground } from "../../../model/slide/SlideActions";
import { Background, Slide } from "../../../model/slide/SlideTypes";
import { ActionButton } from "../../header/actions/ActionButton";
import { Image } from "../../../model/element/ElementTypes";

type SlideFormProps = {
  slide?: Slide;
};

export function SlideForm({ slide }: SlideFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>filter</span>
        <span className={styles.headerFormTitle}>Слайд</span>
      </div>
      <FieldInput label={"Установить цвет фона"} type={"text"} onChange={(text) => {
        const b: Background = {
          color: text,
        }
        dispatch(setBackground, true, slide?.id, b)
      }} value={slide?.background?.color?.toUpperCase()} />

      <div style={{display: "flex"}}>
        <ActionButton label="Выбрать фон" style={{ flex: 1 }} onClick={() => {
           const fileInputNode = document.createElement("input");
            fileInputNode.type = "file";
            fileInputNode.click();
            fileInputNode.addEventListener("change", () => {
              const file = fileInputNode.files?.[0] as File;
              const reader  = new FileReader();

              reader.onloadend = function () {

                const newImage: Image = {
                  url: "https://via.placeholder.com/150",
                };

                if (file.type.includes("image")) {
                  newImage.url = String(reader.result);
                }

                const b: Background = {
                  picture: newImage
                }

                dispatch(setBackground, true, slide?.id, b);
              }

              reader.readAsDataURL(file);
            })
        }} />
        <ActionButton icon="delete" style={{ marginRight: 0 }} onClick={() =>  dispatch(clearBackground, true, slide?.id)} />
      </div>
    </div>  
  );
}
