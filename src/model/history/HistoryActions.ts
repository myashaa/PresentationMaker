import { TPresentation } from "../presentation/PresentationTypes";
import { THistory } from "./HistoryTypes";

export function undo(history: THistory): THistory {
  const newHistory: THistory = {
    ...history,
  };

  if (newHistory.index > 0) {
    newHistory.index = history.index - 1;
  }

  return newHistory;
}

export function redo(history: THistory): THistory {
  const newHistory: THistory = {
    ...history,
  };

  if (history.index < history.states.length - 1) {
    newHistory.index = history.index + 1;
  }

  return newHistory;
}

export function updateHistory(
  history: THistory,
  presentation: TPresentation
): THistory {
  const newStates = history.states.filter(
    (value, index) => index < history.index && value
  );

  const newHistory: THistory = {
    states: [...newStates, presentation],
    index: newStates.length + 1,
  };

  return newHistory;
}
