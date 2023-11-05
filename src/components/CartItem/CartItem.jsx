import React from 'react';
import styles from '../CartItem/CartItem.module.css';
import { CloseOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';

const CartItem = ({ id, price, title }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(id));
    }
  };
  // 5555
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((it) => it.id === id);
  return (
    <div className={styles.cartItem}>
      <p className={styles.pName}>{title}</p>
      <p className={styles.p}>{price} руб.</p>
      <CloseOutlined className={styles.close} onClick={handleClick} />
    </div>
  );
};

export default CartItem;
