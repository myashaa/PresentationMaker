import { Header } from "./components/header/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";
import { Editor as EditorType } from "./model/editor/EditorTypes";
import { SlideList } from "./components/slides/SlideList";

import "./App.css";

type AppProps = {
  editor: EditorType;
};

function App({ editor }: AppProps) {
  const { slideList, name, selectedSlidesIds, selectedElementIds } =
    editor.presentation;

  return (
    <div className="app">
      <Header title={name} />
      <ActionBar
        selectedSlide={selectedSlidesIds[selectedSlidesIds.length - 1]}
      />

      <div className="app-content">
        <SidePanel width={300}>
          <SlideList slides={slideList} selectedSlides={selectedSlidesIds} />
        </SidePanel>

        <EditorContainer>
          <Editor
            slideId={selectedSlidesIds[selectedSlidesIds.length - 1]}
            slide={slideList[selectedSlidesIds[selectedSlidesIds.length - 1]]}
            selectedElements={selectedElementIds}
          />
        </EditorContainer>

        <SidePanel width={300}></SidePanel>
      </div>
    </div>
  );
}

export default App;
