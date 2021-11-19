import { dispatch } from "../editor";
import { renamePresentation } from "../model/editor/EditorActions";

export function setPresentationTitle(newTitle: string) {
  console.log("asf");
  dispatch(renamePresentation, newTitle);
}
