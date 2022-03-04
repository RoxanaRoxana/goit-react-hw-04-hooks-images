import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import React, { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';


const API_KEY = '24800375-64e2c662168f0bb5a01db24c2';

export default function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleGetRequest = async searchTerm => {
    setIsLoading(isLoading);
    setSearchTerm(searchTerm);
    const url = `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const request = await fetch(url);
    const response = await request.json();

    if (page === 1) {
      setImages(response.hits);
      setError(error);
      setIsLoading(isLoading);
    } else {
      setImages([images, ...response.hits]);
      setError(error);
      setIsLoading(isLoading);
    }

    setPage(page + 1);
  };

  const handleSubmitSearchForm = async event => {
    event.preventDefault();
    handleGetRequest(event.target.elements.searchValue.value);
  };

  const openModal = (event, { largeImageURL, tags }) => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    setLargeImageURL(largeImageURL);
    setTags(tags);
    setIsModalOpen(true);
  };

  const closeModal = event => {
    if (event.target.nodeName === 'IMG') {
      return;
    }
    setIsModalOpen(isModalOpen);
  };

  const handleEscapeKey = event => {
    if (event.code === 'Escape') {
      setIsModalOpen(isModalOpen);
    }
  };

  const loadMore = event => {
    event.preventDefault();
    handleGetRequest(searchTerm);
  };

  window.addEventListener('keydown', handleEscapeKey);

  // const { isLoading, error, images } = this.state;

  return (
    <div>
      <Searchbar handleGetRequest={handleSubmitSearchForm} />

      {isLoading === true && <Loader />}

      {error !== <div style={{ textAlign: 'center' }}> {error}</div>}
      <ImageGallery images={images} openModal={openModal} loadMore={loadMore} />

      {images.length === 0 ? (
        <div> </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <Button loadMore={loadMore} />
        </div>
      )}

      {isModalOpen === true ? (
        <Modal
          closeModal={closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ) : (
        <div> </div>
      )}
    </div>
  );
}

// export default class App extends React.Component {
// state = {
//   images: [],
//   error: null,
//   isLoading: false,
//   searchTerm: '',
//   largeImageURL: '',
//   tags: '',
//   isModalOpen: false,
//   page: 1,
// };

// handleGetRequest = async searchTerm => {
//   this.setState({ isLoading: true, searchTerm: searchTerm });
//   let page = this.state.page;
//   const url = `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   const request = await fetch(url);
//   const response = await request.json();

//   if (page === 1) {
//     this.setState({ images: response.hits, error: null, isLoading: false });
//   } else {
//     this.setState({
//       images: [...this.state.images, ...response.hits],
//       error: null,
//       isLoading: false,
//     });
//   }

//   this.setState({ page: page + 1 });
// };

// handleSubmitSearchForm = async event => {
//   event.preventDefault();
//   this.handleGetRequest(event.target.elements.searchValue.value);
// };

// openModal = (event, { largeImageURL, tags }) => {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   this.setState({
//     largeImageURL,
//     tags,
//     isModalOpen: true,
//   });
// };

// closeModal = event => {
//   if (event.target.nodeName === 'IMG') {
//     return;
//   }
//   this.setState({ isModalOpen: false });
// };

// handleEscapeKey = event => {
//   if (event.code === 'Escape') {
//     this.setState({ isModalOpen: false });
//   }
// };

// loadMore = event => {
//   event.preventDefault();
//   this.handleGetRequest(this.state.searchTerm);
// };

//   render() {
//     window.addEventListener('keydown', this.handleEscapeKey);

//     const { isLoading, error, images } = this.state;

//     return (
//       <div>
//         <Searchbar handleGetRequest={this.handleSubmitSearchForm} />

//         {isLoading === true && <Loader />}

//         {error !== <div style={{ textAlign: 'center' }}> {error}</div>}
//         <ImageGallery
//           images={this.state.images}
//           openModal={this.openModal}
//           loadMore={this.loadMore}
//         />

//         {images.length === 0 ? (
//           <div> </div>
//         ) : (
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               marginTop: '10px',
//               marginBottom: '10px',
//             }}
//           >
//             <Button loadMore={this.loadMore} />
//           </div>
//         )}

//         {this.state.isModalOpen === true ? (
//           <Modal
//             closeModal={this.closeModal}
//             largeImageURL={this.state.largeImageURL}
//             tags={this.state.tags}
//           />
//         ) : (
//           <div> </div>
//         )}
//       </div>
//     );
//   }
// }

App.propTypes = {
  images: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  searchTerm: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  isModalOpen: PropTypes.bool,
  page: PropTypes.number,
};
