import styles from "./Editor.module.css";
import { Header } from "../header/Header";
import ActionBar from "../header/actions/ActionBar";
import SlidesPanel from "../slidesPanel/SlidesPanel";
import ElementsPanel from "../elementsPanel/ElementsPanel";
import SlideEditor from "../slide/Slide";

export function Editor() {
  return (
    <div className={styles.app}>
      <Header />
      <ActionBar />
      <div className={styles.content}>
        <SlidesPanel />
        <SlideEditor />
        <ElementsPanel />
      </div>
    </div>
  );
}
