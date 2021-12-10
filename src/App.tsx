import { Header } from "./components/header/Header";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";
import { Editor as EditorType } from "./model/editor/EditorTypes";

import { SlidesPanel } from "./components/editor/SlidesPanel";
import { ElementsPanel } from "./components/editor/ElementsPanel";

import "./App.css";
import { useEffect } from "react";
import { dispatch } from "./editor";
import { updateHistory } from "./model/editor/EditorActions";
// import { Popup } from "./components/popup/Popup";

type AppProps = {
  editor: EditorType;
};

function App({ editor }: AppProps) {
  const { slideList, name, selectedSlidesIds, selectedElementIds } =
    editor.presentation;

    useEffect(() => {

      console.log(editor)
    }, [editor])

  return (
    <div className="app">
      {/* <Popup title={"Подтверждение действия"} text={"Подтверждение действия"} />   */}
      <Header title={name} />
      <ActionBar
        selectedSlide={selectedSlidesIds[selectedSlidesIds.length - 1]}
        editor={editor}
      />

      <div className="app-content">
        <SlidesPanel
          width={300}
          slides={slideList}
          selectedSlides={selectedSlidesIds}
        />
        <Editor
          slideId={selectedSlidesIds[selectedSlidesIds.length - 1]}
          slide={slideList[selectedSlidesIds[selectedSlidesIds.length - 1]]}
          selectedElements={selectedElementIds}
        />
        <ElementsPanel />
      </div>
    </div>
  );
}

export default App;
