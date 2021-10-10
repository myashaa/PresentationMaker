import { Header } from "./components/Header";
import { SidePanel } from "./components/SidePanel";
import { EditorContainer } from "./components/EditorContainer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <SidePanel width={350}></SidePanel>
        <EditorContainer></EditorContainer>
        <SidePanel width={350}></SidePanel>
      </div>
    </div>
  );
}

export default App;
