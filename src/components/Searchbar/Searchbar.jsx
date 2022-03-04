import React from 'react';
import styles from './Searchbar.module.css';

 export default function Searchbar(props) {
   return (
    <div>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={props.handleGetRequest}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchFormButton__label}>Search</span>
          </button>
          <input
            name="searchValue"
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}

// const Searchbar = (props) => {
//   return (
//     <div>
//       <header className={styles.Searchbar}>
//         <form className={styles.SearchForm} onSubmit={props.handleGetRequest}>
//           <button type="submit" className={styles.SearchForm__button}>
//             <span className={styles.SearchFormButton__label}>Search</span>
//           </button>
//           <input
//             name="searchValue"
//             className={styles.SearchForm__input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     </div>
//   );
// }

// export default Searchbar;