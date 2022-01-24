import { useEffect } from "react";
import { connect } from "react-redux";
import { TPresentation } from "./model/presentation/PresentationTypes";
import { RootState } from "./redux/store";
import { EMode } from "./model/editor/EditorTypes";
import Player from "./components/player/Player";
import { TSlide } from "./model/slide/SlideTypes";
import { Editor } from "./components/editor/Editor";

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
      {mode === EMode.edit && <Editor />}
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
