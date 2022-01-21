import { connect } from "react-redux";
import { useHotKey } from "../../hooks/useHotKey";
import { TSlide } from "../../model/slide/SlideTypes";
import { AppDispatch, RootState } from "../../redux/store";
import { MiniSlide } from "./MiniSlide";
import styles from "./SlidesPanel.module.css";

type Props = {
  width?: number;
  slides: TSlide[];
  selected: string[];
  selectSlides: (ids: string[]) => void;
  deleteSlides: () => void;
};

const SlidesPanel = ({
  width = 300,
  slides,
  selected,
  selectSlides,
  deleteSlides,
}: Props) => {
  useHotKey((key) => {
    if (key === "Delete") {
      deleteSlides();
    }
  });

  const slideList = slides?.map((slide, index) => (
    <MiniSlide
      key={index}
      index={index + 1}
      elements={slide.elementList}
      background={slide.background}
      selected={selected.some((id) => id === slide.id)}
      onSelect={() => {
        selectSlides([slide.id]);
      }}
      onMultiSelect={() => {
        if (!selected.some((id) => id === slide.id))
          selectSlides([...selected, slide.id]);
        else if (selected.length > 1)
          selectSlides(selected.filter((id) => id !== slide.id));
      }}
      onDelete={() => {
        deleteSlides();
      }}
    />
  ));

  return (
    <div className={styles.sidePanel} style={{ width }}>
      {slideList}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    slides: state.presentation.slideList,
    selected: state.presentation.selectedSlidesIds,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    selectSlides: (ids: string[]) =>
      dispatch({
        type: "SELECT_SLIDES",
        payload: ids,
      }),
    deleteSlides: () =>
      dispatch({
        type: "DELETE_SLIDES",
        payload: null,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlidesPanel);
