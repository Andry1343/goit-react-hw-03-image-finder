import style from '../imageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <>
      {images.length > 0 && (
        <div className={style.imageGalleryDiv}>
          <ul className={style.imageGallery}>
            {images.map(image => {
              return (
                <li key={image.id}>
                  <ImageGalleryItem image={image} onSelect={onSelect} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
