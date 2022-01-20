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

type AppProps = {
  presentation: TPresentation;
};

function App({ presentation }: AppProps) {
  useEffect(() => {
    document.title = presentation.name;
  }, [presentation]);

  return (
    <div>
      {/* {presentation.mode === EMode.edit && ( */}
      <div className={styles.app}>
        <Header />
        <ActionBar />
        <div className={styles.content}>
          <SlidesPanel />
          <SlideEditor />
          <ElementsPanel />
        </div>
      </div>
      {/*)} */}
      {/* {editor.mode === EMode.view && (
        <div className={styles.playerContainer}>
          <Player slides={slideList} />
        </div>
      )} */}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    presentation: state.presentation,
    slides: state.presentation.slideList,
    selectedSlides: state.presentation.selectedSlidesIds,
  };
};

export default connect(mapStateToProps)(App);
