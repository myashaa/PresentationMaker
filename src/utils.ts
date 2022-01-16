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
  if (array) {
    return array[array.length - 1];
  }
  return null;
}

export function getByKey(array: any[], key: string, value: string) {
  if (array) {
    return array.filter((element) => element[key] === value)[0];
  }
  return null;
}

function hexToRGB(inp: string) {
  const r = parseInt(inp[1] + inp[2], 16);
  const g = parseInt(inp[3] + inp[4], 16);
  const b = parseInt(inp[5] + inp[6], 16);
  return [r, g, b];
}

function rgbToHSL(inp: number[]) {
  const r = inp[0] / 255;
  const g = inp[1] / 255;
  const b = inp[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  let h = 0;
  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }
  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }

  const l = (min + max) / 2;

  let s = 0;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

export function hexToHSL(hex: string) {
  const rgb = hexToRGB(hex);
  const hsl = rgbToHSL(rgb);
  return hsl;
}

function hslToRGB(inp: number[]) {
  const h = inp[0] / 360;
  const s = inp[1] / 100;
  const l = inp[2] / 100;
  let t2;
  let t3;
  let val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round(rgb[i]);
  }

  return rgb;
}

function rgbToHEX(inp: number[]) {
  let h = Math.round(inp[0]).toString(16).toUpperCase();
  let e = Math.round(inp[1]).toString(16).toUpperCase();
  let x = Math.round(inp[2]).toString(16).toUpperCase();
  return "#" + h + e + x;
}

export function hslToHEX(hsl: number[]) {
  const rgb = hslToRGB(hsl);
  const hex = rgbToHEX(rgb);
  return hex;
}