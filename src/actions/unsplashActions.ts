import { url } from "../utils";

export const loadUnsplashImages = (callback?: (data: any) => void) => {
  fetch("https://api.unsplash.com/photos", {
    method: "GET",
    headers: {
      Authorization: "Client-ID emEejS4l4Ws_I1URUOPPYiKOeM9Bi9pN1v279EMs4Bs",
    },
  })
    .then((result) => result.json())
    .then(callback);
};

export const searchUnsplashImages = (
  query: string,
  callback?: (data: any) => void
) => {
  const urlString = url("https://api.unsplash.com/search/photos", { query });

  fetch(urlString, {
    method: "GET",
    headers: {
      Authorization: "Client-ID emEejS4l4Ws_I1URUOPPYiKOeM9Bi9pN1v279EMs4Bs",
    },
  })
    .then((result) => result.json())
    .then(callback);
};
