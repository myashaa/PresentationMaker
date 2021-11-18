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
  return (
    <div className="app">
      <Header title={editor.presentation.name} />
      <ActionBar />

      <div className="app-content">
        <SidePanel width={300}>
          <SlideList
            slides={editor.presentation.slideList}
            selectedSlides={editor.presentation.selectedSlidesIds}
          />
        </SidePanel>

        <EditorContainer>
          <Editor />
        </EditorContainer>

        <SidePanel width={300}></SidePanel>
      </div>
    </div>
  );
}

export default App;
