import { useEffect } from "react";
import { connect } from "react-redux";

import { Header } from "./components/header/Header";
import ActionBar from "./components/header/actions/ActionBar";
import SlidesPanel from "./components/slidesPanel/SlidesPanel";
import { TPresentation } from "./model/presentation/PresentationTypes";

import { RootState } from "./redux/store";

import styles from "./App.module.css";

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
      {/* {presentation.mode === EMode.edit && ( */}
      <div className={styles.app}>
        <Header />
        <ActionBar />
        <div className={styles.content}>
          <SlidesPanel />
          {/*   <SlideEditor
            slide={currentSlide}
            selectedElements={selectedElementIds}
          />*/}
          {/* <ElementsPanel /> */}
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
  return { presentation: state.presentation };
};

export default connect(mapStateToProps)(App);
