import { Header } from "./components/header/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";
import { Editor as EditorType } from "./model/editor/EditorTypes";
import { PresentationTitle } from "./components/header/PresentationTitle";
import { MenuBar } from "./components/menu/MenuBar";
import { menu } from "./components/header/Menu";
import { setPresentationTitle } from "./components/PresentationUtils";
import { useEffect } from "react";
import { SlideList } from "./components/slides/SlideList";

import "./App.css";

type AppProps = {
  editor: EditorType;
};

function App({ editor }: AppProps) {
  useEffect(() => {
    document.title = editor.presentation.name || "Презентация";
    console.log(editor);
  }, [editor]);

  const { slideList, selectedSlidesIds } = editor.presentation;

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
          <Editor
            slide={
              slideList.filter(
                (slide, index) =>
                  index === selectedSlidesIds[selectedSlidesIds.length - 1] &&
                  slide
              )[0]
            }
          />
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
