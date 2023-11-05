import React from 'react';
import styles from '../UI/Button.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

const Button = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(item.id));
    } else {
      dispatch(setItemInCart(item));
    }
  };
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((it) => it.id === item.id);
  return (
    <button onClick={handleClick} className={isItemInCart ? styles.btnIn : styles.btn}>
      {isItemInCart ? 'Убрать' : 'В корзину'}
    </button>
  );
};

export default Button;
