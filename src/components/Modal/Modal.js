import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onClose, src, alt }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
Modal.propTypes = {
    onClose: PropTypes.func.isRequired, // Define PropTypes for the onClose prop
    src: PropTypes.string.isRequired, // Define PropTypes for the src prop
    alt: PropTypes.string.isRequired, // Define PropTypes for the alt prop
  };
  
export default Modal;