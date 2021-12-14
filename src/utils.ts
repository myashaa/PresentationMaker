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
  // ToInteger() abstract op
  n = Math.trunc(n) || 0;
  // Allow negative indexing from the end
  if (n < 0) n += data.length;
  // OOB access is guaranteed to return undefined
  if (n < 0 || n >= data.length) return undefined;
  // Otherwise, this is just normal property access
  return data[n];
}
