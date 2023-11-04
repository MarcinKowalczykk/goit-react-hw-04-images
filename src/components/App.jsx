import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGallery/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import './styles.css';

const API_KEY = '39383014-65ce5dfe2161e424b70e47e6d';

export const App = () => {
  App.propTypes = {
    images: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    showModal: PropTypes.bool.isRequired,
    modalImage: PropTypes.string.isRequired,
  };

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    fetchImages();
  };

  const fetchImages = () => {
    setIsLoading(true);

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const handleImageClick = (src) => {
    setShowModal(true);
    setModalImage(src);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div className="app">
      <Searchbar onSubmit={handleSearch} />
      <div className="gallery-container">
        <ImageGallery>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => handleImageClick(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
      </div>
      {isLoading && <Loader />}
      <div className="button-container">
        {images.length > 0 && (
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            loading={isLoading}
          />
        )}
      </div>
      {showModal && (
        <Modal src={modalImage} alt="Modal Image" onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
