import { Header } from "./components/header/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";

import "./App.css";
import { ActionBar } from "./components/actions/ActionBar";

function App() {
  return (
    <div className="app">
      <Header />
      <ActionBar />
      <div className="app-content">
        <SidePanel width={300}></SidePanel>
        <EditorContainer></EditorContainer>
        <SidePanel width={300}></SidePanel>
      </div>
    </div>
  );
}

export default App;
