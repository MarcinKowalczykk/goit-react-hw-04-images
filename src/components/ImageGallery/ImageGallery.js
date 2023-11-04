import React from 'react';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => (
  <ul className="gallery">
    {children}
  </ul>
);

ImageGallery.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ImageGallery;