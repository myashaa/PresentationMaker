import { useEffect } from "react";
import { connect } from "react-redux";

import { Header } from "./components/header/Header";
import ActionBar from "./components/header/actions/ActionBar";
import SlidesPanel from "./components/slidesPanel/SlidesPanel";
import { TPresentation } from "./model/presentation/PresentationTypes";

import { RootState } from "./redux/store";

import styles from "./App.module.css";
import SlideEditor from "./components/slide/Slide";
import ElementsPanel from "./components/elementsPanel/ElementsPanel";
import { EMode } from "./model/editor/EditorTypes";
import Player from "./components/player/Player";
import { TSlide } from "./model/slide/SlideTypes";

type AppProps = {
  presentation: TPresentation;
  slides: TSlide[];
  mode: EMode;
};

function App({ presentation, mode, slides }: AppProps) {
  useEffect(() => {
    document.title = presentation.name;
  }, [presentation]);

  return (
    <div>
      {mode === EMode.edit && (
        <div className={styles.app}>
          <Header />
          <ActionBar />
          <div className={styles.content}>
            <SlidesPanel />
            <SlideEditor />
            <ElementsPanel />
          </div>
        </div>
      )}
      {mode === EMode.view && <Player slides={slides} />}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    mode: state.mode,
    presentation: state.presentation,
    slides: state.presentation.slideList,
    selectedSlides: state.presentation.selectedSlidesIds,
  };
};

export default connect(mapStateToProps)(App);
