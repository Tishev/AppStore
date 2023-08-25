import React, { useState } from 'react';
import styles from '../Select/Select.module.css';
const Select = () => {
  const [visible, setVisible] = useState(false);
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.select}>
      <div onClick={changeVisible} className={styles.selectCategory}>
        Выберите категорию
      </div>
      <div onClick={changeVisible} className={styles.span}>
        {!visible ? 'open' : 'close'}
      </div>
      {visible && (
        <div className={styles.divPosition}>
          <div className={styles.selectCategory}>Phone</div>
          <div className={styles.selectCategory}>Laptop</div>
        </div>
      )}
    </div>
  );
};

export default Select;
