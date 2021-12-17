import { Header } from "./components/header/Header";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";
import { Editor as EditorType } from "./model/editor/EditorTypes";

import { SlidesPanel } from "./components/editor/SlidesPanel";
import { ElementsPanel } from "./components/editor/ElementsPanel";

import "./App.css";
import { useEffect } from "react";
import { useHotKey } from "./hooks/useHotKey";
import { dispatch } from "./editor";
import { Popup } from "./components/popup/Popup";

type AppProps = {
  editor: EditorType;
};

function App({ editor }: AppProps) {
  const { slideList, name, selectedSlidesIds, selectedElementIds } =
    editor.presentation;

  const currentSlide = slideList.filter(
    (slide) => slide.id === selectedSlidesIds[selectedSlidesIds.length - 1]
  )[0];

  useEffect(() => {
    document.title = editor.presentation.name;
  }, [editor]);

  return (
    <div className="app">
      {/* <Popup title={"Подтверждение действия"} text={"Подтверждение действия"} needButtons leftButton={"Сохранить"} rightButton={"Отменить"} />   */}
      {/* <Popup title={"О проекте"} text ={"Благодаря Ю Презентациям вы можете создавать файлы, редактировать и показывать их, а также работать над ними где и когда угодно – совершенно бесплатно."} needCat />   */}
      {/* <Popup title={"Инструкция пользователя"} text={"Помощь начинающим"  } needSlider /> */}
      {/* <Popup title={"Инструкция пользователя"} needIcon needButtons leftButton={"Сохранить"} rightButton={"Отменить"} /> */}
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
        <Editor slide={currentSlide} selectedElements={selectedElementIds} />
        <ElementsPanel />
      </div>
    </div>
  );
}

export default App;
