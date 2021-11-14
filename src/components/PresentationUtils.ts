import { dispatch } from "../editor";
import { renamePresentation } from "../model/editor/EditorActions";

export function setPresentationTitle(newTitle: string) {
  dispatch(renamePresentation, newTitle);
}
