import { useEffect, useState } from "react";
import {
  loadUnsplashImages,
  searchUnsplashImages,
} from "../../actions/unsplashActions";
import { loadImage, loadImageFromURL } from "../../model/element/ImageActions";
import { TImage } from "../../model/element/ImageTypes";
import { uuid4 } from "../../utils";
import { ActionButton } from "../header/actions/ActionButton";
import { TextInput } from "../inputs/TextInput";

import styles from "./ImageSearchForm.module.css";

type Props = {
  onSubmit?: (url: string) => void;
};

export function ImageSearchForm({ onSubmit }: Props) {
  const [images, setImages] = useState<TImage[]>([]);
  const [urlImage, setUrlImage] = useState("");
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    handleMainUsplash();
  }, []);

  useEffect(() => {
    query !== "" && handleSearchPics();
    query === "" && handleMainUsplash();
  }, [page]);

  const handleChangePage = (step: number) => {
    if (page > 0 && page < maxPages) {
      setPage(page + step);
    }
  };

  const handleMainUsplash = () => {
    loadUnsplashImages((data) => {
      setImages(
        data.map((image: any) => {
          return { image: image.urls.regular };
        })
      );
    });
  };

  const handleSearchPics = () => {
    searchUnsplashImages(query, page, (data) => {
      setTotal(data["total"]);
      setMaxPages(data["total_pages"]);
      setImages(
        data.results.map((image: any) => {
          return { image: image.urls.regular };
        })
      );
    });
  };

  const handleLoadFromUrl = (url: string) => {
    loadImageFromURL(url).then((value) => {
      setUrlImage(value.image);
    });
  };

  const handleSubmitUrl = () => {
    onSubmit && onSubmit(urlImage);
  };

  const handleImageSelect = (url: string) => {
    loadImageFromURL(url).then((value) => {
      onSubmit && onSubmit(value.image);
    });
  };

  return (
    <div>
      <div className={styles.tabBar}>
        <ActionButton
          label="Из URL"
          primary={tab === 0}
          onClick={() => setTab(0)}
        />
        <ActionButton
          label="Unsplash"
          primary={tab === 1}
          onClick={() => setTab(1)}
        />
      </div>

      {tab === 0 && (
        <div>
          <TextInput label="URL" onChange={handleLoadFromUrl} />
          {urlImage !== "" && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url(${urlImage})` }}
            >
              <div className={styles.blur}>
                <img className={styles.previewImage} src={urlImage} alt="" />
              </div>
            </div>
          )}
          {urlImage !== "" && (
            <ActionButton
              icon="save"
              label="Добавить"
              onClick={handleSubmitUrl}
            />
          )}
        </div>
      )}

      {tab === 1 && (
        <div>
          <TextInput
            label="Unsplash"
            onChange={handleSearchPics}
            onInput={setQuery}
          />
          {total !== 0 && (
            <div
              style={{
                marginBottom: 16,
                marginTop: 16,
                fontSize: 13,
                color: "#c7c7c7",
              }}
            >{`найдено ${total}, страница ${page} из ${maxPages}`}</div>
          )}
          {!!images.length && (
            <div className={styles.grid}>
              {images.map((image) => (
                <img
                  key={uuid4()}
                  className={styles.image}
                  src={image.image}
                  onClick={() => handleImageSelect(image.image)}
                />
              ))}
              {page !== 1 && (
                <div
                  className={`${styles.image} ${styles.cardButton}`}
                  onClick={() => handleChangePage(-1)}
                >{`<<< ${page - 1}`}</div>
              )}
              {maxPages > 1 && page !== maxPages && (
                <div
                  className={`${styles.image} ${styles.cardButton}`}
                  onClick={() => handleChangePage(1)}
                >{`>>> ${page + 1}`}</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
