import { dispatch } from "../../editor";
import { loadPresentation } from "../../model/editor/EditorActions";
import { setPresentationTitle } from "../PresentationUtils";

export const menu = [
  {
    label: "Презентация",
    actions: [
      { icon: "create_new_folder", label: "Создать" },
      {
        icon: "folder_open",
        label: "Открыть",
        action: () => {
          // ...
          const fileInputNode = document.createElement("input");
          fileInputNode.type = "file";
          fileInputNode.click();
          fileInputNode.addEventListener("change", () => {
            console.log(fileInputNode.files?.[0]);
            loadPresentation(fileInputNode.files?.[0]);
          });
        },
      },
      { label: "" },
      { icon: "download_for_offline", label: "Сохранить" },
      { icon: "downloading", label: "Сохранить как pdf" },
      { label: "" },
      {
        icon: "edit",
        label: "Переименовать",
        action: () => {
          const title = prompt("Введите название");
          setPresentationTitle(title || "Untitled");
        },
      },
    ],
  },
  {
    label: "Слайд",
    actions: [
      { icon: "add", label: "Новый слайд" },
      { icon: "delete", label: "Удалить слайд" },
      { label: "" },
      { icon: "filter", label: "Изменить фон" },
    ],
  },
  {
    label: "Вид",
    actions: [{ icon: "play_circle_filled", label: "Режим просмотра" }],
  },
  {
    label: "Прочее",
    actions: [
      { icon: "help", label: "Инструкция пользователя" },
      { icon: "info", label: "О проекте" },
    ],
  },
];
