export type TImage = {
  image: string;
  filter?: EFilter;
};

export enum EFilter {
  none = "Нет",
  blur = "Размытие",
  baw = "Черно-белое",
}
