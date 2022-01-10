import { useEffect } from "react";

import { Header } from "./components/header/Header";
import { ActionBar } from "./components/header/actions/ActionBar";
import { SlidesPanel } from "./components/slidesPanel/SlidesPanel";
import { ElementsPanel } from "./components/elementsPanel/ElementsPanel";
import { SlideEditor } from "./components/slide/Slide";

import { EMode, TEditor } from "./model/editor/EditorTypes";
import { TSlide } from "./model/slide/SlideTypes";
import { TElement } from "./model/element/ElementTypes";

import { getByKey, getLastElement } from "./utils";
import styles from "./App.module.css";
import { Player } from "./components/player/Player";
import { connect } from "react-redux";
import { RootState } from "./redux/store";
import { TPresentation } from "./model/presentation/PresentationTypes";

type AppProps = {
  presentation: TPresentation;
};

function App({ presentation }: AppProps) {
  // const { slideList, name, selectedSlidesIds, selectedElementIds } =
  //   presentation;

  // const currentSlide: TSlide = getByKey(
  //   slideList,
  //   "id",
  //   getLastElement(selectedSlidesIds)
  // );

  // const currentElement: TElement = getByKey(
  //   currentSlide?.elementList,
  //   "id",
  //   getLastElement(selectedElementIds)
  // );

  useEffect(() => {
    document.title = presentation.name;
  }, [presentation]);

  return (
    <div>
      <Header />
      {/* {presentation.mode === EMode.edit && (
        <div className={styles.app}>
          <ActionBar
            selectedSlide={selectedSlidesIds[selectedSlidesIds.length - 1]}
            editor={editor}
            selectedElement={selectedElementIds[selectedElementIds.length]}
          />

          <div className={styles.content}>
            <SlidesPanel
              slides={slideList}
              selectedSlides={selectedSlidesIds}
            />
            <SlideEditor
              slide={currentSlide}
              selectedElements={selectedElementIds}
            />
            <ElementsPanel slide={currentSlide} element={currentElement} />
          </div>
        </div>
      )} */}
      {/* {editor.mode === EMode.view && (
        <div className={styles.playerContainer}>
          <Player slides={slideList} />
        </div>
      )} */}
      test
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return { presentation: state.presentation };
};

export default connect(mapStateToProps)(App);
