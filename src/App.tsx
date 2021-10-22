import { Header } from "./components/header/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";

import "./App.css";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";
import { MiniSlide } from "./components/slides/MiniSlide";
import { TextForm } from "./components/elements/TextForm";

function App() {
  return (
    <div className="app">
      <Header />
      <ActionBar />
      <div className="app-content">
        <SidePanel width={300}>
          <MiniSlide />
        </SidePanel>
        <EditorContainer>
          <Editor />
        </EditorContainer>
        <SidePanel width={300}>
          <TextForm />
        </SidePanel>
      </div>
    </div>
  );
}

export default App;
