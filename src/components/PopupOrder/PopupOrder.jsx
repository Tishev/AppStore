import React from 'react';
import styles from '../PopupOrder/PopupOrder.module.css';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
const PopupOrder = () => {
  return (
    <div className={styles.popupOut}>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <SentimentSatisfiedAltIcon fontSize="large" />
          <h1 className={styles.h1}>Спасибо за покупку!</h1>
          <p className={styles.p}>Ждём Вас снова!</p>
        </div>
      </div>
    </div>
  );
};

export default PopupOrder;
