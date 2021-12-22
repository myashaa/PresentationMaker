import { useEffect } from "react";

import { Header } from "./components/header/Header";
import { ActionBar } from "./components/header/actions/ActionBar";
import { SlidesPanel } from "./components/slidesPanel/SlidesPanel";
import { ElementsPanel } from "./components/elementsPanel/ElementsPanel";
import { SlideEditor } from "./components/slide/Slide";

import { TEditor } from "./model/editor/EditorTypes";
import { TSlide } from "./model/slide/SlideTypes";
import { TElement } from "./model/element/ElementTypes";

import { getByKey, getLastElement } from "./utils";
import styles from "./App.module.css";

type AppProps = {
  editor: TEditor;
};

function App({ editor }: AppProps) {
  const { slideList, name, selectedSlidesIds, selectedElementIds } =
    editor.presentation;

  const currentSlide: TSlide = getByKey(
    slideList,
    "id",
    getLastElement(selectedSlidesIds)
  );

  const currentElement: TElement = getByKey(
    currentSlide.elementList,
    "id",
    getLastElement(selectedElementIds)
  );

  useEffect(() => {
    console.log(editor);
    document.title = editor.presentation.name;
  }, [editor]);

  return (
    <div className={styles.app}>
      <Header title={name} />
      <ActionBar
        selectedSlide={selectedSlidesIds[selectedSlidesIds.length - 1]}
        editor={editor}
        selectedElement={selectedElementIds[selectedElementIds.length]}
      />

      <div className={styles.content}>
        <SlidesPanel slides={slideList} selectedSlides={selectedSlidesIds} />
        <SlideEditor
          slide={currentSlide}
          selectedElements={selectedElementIds}
        />
        <ElementsPanel slide={currentSlide} element={currentElement} />
      </div>
    </div>
  );
}

export default App;
