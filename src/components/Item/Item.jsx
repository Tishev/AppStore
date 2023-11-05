import React, { useState } from 'react';
import styles from '../Item/Item.module.css';

import Button from '../UI/Button';
const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <img className={styles.img} src={item.img} alt="photo" />
      <h2 className={styles.text}>{item.name}</h2>
      <p className={styles.text}>{item.price} руб.</p>
      <Button item={item} />
    </div>
  );
};

export default Item;
