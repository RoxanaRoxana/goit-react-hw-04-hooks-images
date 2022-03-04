import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


export default function ImageGallery({ images, openModal, loadMore }) {
   return (
    <div>
      <ul className={styles.ImageGallery}  >
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            tags={tags}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
}

// const ImageGallery = ({ images, openModal, loadMore }) => {
//   return (
//     <div>
//       <ul className={styles.ImageGallery}  >
//         {images.map(({ id, largeImageURL, tags }) => (
//           <ImageGalleryItem
//             key={id}
//             largeImageURL={largeImageURL}
//             tags={tags}
//             openModal={openModal}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ImageGallery;
