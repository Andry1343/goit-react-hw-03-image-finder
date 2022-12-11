import style from '../imageGallery/ImageGallery.module.css';
import {ImageGalleryItem} from '../imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => {
    return <>
         {images.length > 0 && <ul className={style.gallery}>
                {images.map(image => {
                    return <li key={image.id} ><ImageGalleryItem image={image} /></li>
                })}
            </ul>}
    </>
  };