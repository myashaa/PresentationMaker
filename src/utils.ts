export function random(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function uuid4(length: number = 8) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function at(data: Array<any>, n: number) {
  n = Math.trunc(n) || 0;
  if (n < 0) n += data.length;
  if (n < 0 || n >= data.length) return undefined;
  return data[n];
}

export function classnames(...rest: any[]) {
  return rest.join(" ").trim() || "";
}

export function getLastElement(array: any[]) {
  return array[array.length - 1];
}

export function getByKey(array: any[], key: string, value: string) {
  return array.filter((element) => element[key] === value)[0];
}