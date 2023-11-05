import React from 'react';
import styles from '../UI/ButtonSort.module.css';
const ButtonSort = ({ isDescSort, setIsDescSort }) => {
  return (
    <button className={styles.btn} onClick={() => setIsDescSort(!isDescSort)}>
      Сортировать по цене {`${isDescSort ? '+' : '-'}`}
    </button>
  );
};

export default ButtonSort;
