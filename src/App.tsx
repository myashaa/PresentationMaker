import { Header } from "./components/header/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";

import "./App.css";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";
import { MiniSlide } from "./components/slides/MiniSlide";
import { TextForm } from "./components/elements/TextForm";
import { ImageForm } from "./components/elements/ImageForm";
import { FigureForm } from "./components/elements/FigureForm";
import { Editor as EditorType } from "./model/editor/EditorTypes";
import { PresentationTitle } from "./components/header/PresentationTitle";
import { MenuBar } from "./components/menu/MenuBar";
import { menu } from "./components/header/Menu";
import { setPresentationTitle } from "./components/PresentationUtils";
import { useEffect } from "react";
import { SlideList } from "./components/slides/SlideList";
import { dispatch } from "./editor";

type AppProps = {
  editor: EditorType;
};

function App({ editor }: AppProps) {
  useEffect(() => {
    document.title = editor.presentation.name || "Презентация";
  }, [editor]);

  return (
    <div className="app">
      <Header>
        <PresentationTitle
          title={editor?.presentation?.name || "Жопа"}
          onSubmit={(title) => setPresentationTitle(title)}
        />
        <MenuBar menu={menu} />
      </Header>

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

        <SidePanel width={300}>
          {/* <TextForm /> */}
          {/* <ImageForm /> */}
          {/* <FigureForm /> */}
        </SidePanel>
      </div>
    </div>
  );
}

export default App;
