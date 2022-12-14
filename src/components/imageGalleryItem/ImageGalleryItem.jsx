import style from '../imageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  image: { name, largeImageURL, webformatURL },
  onSelect,
}) => {
  return (
    <img
      className={style.imageGalleryItem}
      src={webformatURL}
      alt={name}
      onClick={() => {
        onSelect(largeImageURL);
      }}
    />
  );
};
