import React from 'react';
import styles from './Button.module.css';

export default function Button({ loadMore }) {
  return (
      <button type="button" className={styles.Button} onClick={loadMore}>
        Load more
      </button>
    );
}

// const Button = ({loadMore}) => {
//     return (
//       <button type="button" className={styles.Button} onClick={loadMore}>
//         Load more
//       </button>
//     );
// }

// export default Button;