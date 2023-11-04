import React from 'react';
import PropTypes from 'prop-types'

const ImageGalleryItem = ({ src, alt, onClick }) => (
  <li className="gallery-item" onClick={onClick}>
    <img src={src} alt={alt} />
  </li>
);

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired, 
    alt: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired,
  };

export default ImageGalleryItem;
