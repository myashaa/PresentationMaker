import { TextForm } from "./forms/TextForm";
import styles from "./ElementsPanel.module.css";

type ElementsPanelProps = {
  width?: number;
};

export const ElementsPanel = ({ width = 300 }: ElementsPanelProps) => {
  return <div className={styles.sidePanel} style={{ width }}>
    <TextForm />
  </div>;
};
