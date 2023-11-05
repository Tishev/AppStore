import React, { useState } from 'react';
import styles from '../UI/ShoppingBasket.module.css';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import CartMenu from '../CartMenu/CartMenu';
import { calcTotalPrice } from '../utils';
import ItemsInCart from './ItemsInCart';

const ShoppingBasket = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className={styles.basket}>
      <ItemsInCart quantity={items.length} />
      <ShoppingBagOutlined
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        className={styles.cart}
      />
      {totalPrice > 0 ? <span className={styles.span}>{totalPrice} руб.</span> : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default ShoppingBasket;
