import { Header } from "./components/header/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";

import "./App.css";
import { ActionBar } from "./components/actions/ActionBar";
import { Editor } from "./components/editor/Editor";

function App() {
  return (
    <div className="app">
      <Header />
      <ActionBar />
      <div className="app-content">
        <SidePanel width={300}></SidePanel>
        <EditorContainer>
          <Editor />
        </EditorContainer>
        <SidePanel width={300}></SidePanel>
      </div>
    </div>
  );
}

export default App;
