import React from 'react';
import styles from '../CartMenu/CartMenu.module.css';
import { calcTotalPrice } from '../utils';
import CartItem from '../CartItem/CartItem';
const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.cartMenu}>
      <div className={styles.cartMenuGamesList}>
        {items.length > 0
          ? items.map((item) => (
              <CartItem key={item.id} price={item.price} title={item.name} id={item.id} />
            ))
          : 'Корзина пуста'}{' '}
        {items.length > 0 ? (
          <div className={styles.cartMenuArrange}>
            <div className={styles.cartMenuTotalPrice}>
              {/* <span className={styles.span}>{items.map((item) => item.name)}</span> */}
            </div>
            <span className={styles.spanTwo}>Итого: {calcTotalPrice(items)} руб.</span>
            <button className={styles.btn} onClick={onClick}>
              Оформить заказ
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartMenu;
// 31:53
