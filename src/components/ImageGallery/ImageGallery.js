import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';


const ImageGallery = ({images, bigImage}) => (
<ul className={s.Gallery}>
  {images.map(({ id, webformatURL, largeImageURL }) => {
    const handleItemClick = () => bigImage(largeImageURL);
      return (
            <ImageGalleryItem key={id} webURL={webformatURL}
              onClick={handleItemClick}
          />
  )})
  }
</ul>
);
ImageGallery.propTypes = {
    images: PropTypes.array,
    bigImage: PropTypes.func,
    id: PropTypes.number,
    webkitURL: PropTypes.string,
    largeImageURL: PropTypes.string
};

export default ImageGallery;
