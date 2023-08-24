import React from 'react';
import styles from '../UI/ItemsInCart.module.css';
const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className={styles.items}>{quantity}</div> : null;
};

export default ItemsInCart;
