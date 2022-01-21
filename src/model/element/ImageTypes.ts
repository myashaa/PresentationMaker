export type TImage = {
  image: string;
  name?: string;
  filter?: EFilter;
};

export enum EFilter {
  none = "Нет",
  blur = "Размытие",
  baw = "Черно-белое",
}
