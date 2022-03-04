import styles from './Modal.module.css'
import React from 'react'


export default function Modal({ largeImageURL, tags, closeModal, handleEscapeKey }) {
  return (
    <div
      className={styles.Overlay}
      onClick={closeModal}
      onKeyPress={handleEscapeKey}
    >
      <div className={styles.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}

// export const Modal = ({ largeImageURL, tags, closeModal, handleEscapeKey }) => {
//   return (
//     <div
//       className={styles.Overlay}
//       onClick={closeModal}
//       onKeyPress={handleEscapeKey}
//     >
//       <div className={styles.Modal}>
//         <img src={largeImageURL} alt={tags} />
//       </div>
//     </div>
//   );
// };

