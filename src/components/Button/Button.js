import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader'; 

const LoadMoreButton = ({ onClick, disabled, loading }) => (
    <div className="load-more-button-container">
      {loading && <Loader />}
      <button type="button" className="button" onClick={onClick} disabled={disabled}>
        Load more
      </button>
    </div>
  );
  LoadMoreButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  };
export default LoadMoreButton;
