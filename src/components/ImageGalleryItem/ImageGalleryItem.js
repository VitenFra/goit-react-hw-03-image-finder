import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webURL, onClick}) => (
    <li className={s.ListItem}>
        <img className={s.Image} src={webURL} alt="" onClick={onClick} />
    </li>
)

ImageGalleryItem.propTypes = {
    webURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
   
};
export default ImageGalleryItem;

