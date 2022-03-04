import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, largeImageURL, tags, openModal }) {
   return (
    <li
      key={id}
      className={styles.ImageGalleryItem}
      onClick={e => openModal(e, { largeImageURL, tags })}
    >
      <img
        src={largeImageURL}
        alt={tags}
        className={styles.ImageGalleryItem__image}
      />
    </li>
  );
}

// const ImageGalleryItem = ({ id, largeImageURL, tags, openModal }) => {
//   return (
//     <li
//       key={id}
//       className={styles.ImageGalleryItem}
//       onClick={e => openModal(e, { largeImageURL, tags })}
//     >
//       <img
//         src={largeImageURL}
//         alt={tags}
//         className={styles.ImageGalleryItem__image}
//       />
//     </li>
//   );
// };

// export default ImageGalleryItem;
