import React, { useState } from 'react';
import styles from '../CartMenu/CartMenu.module.css';
import { calcTotalPrice } from '../utils';
import CartItem from '../CartItem/CartItem';
import PopupOrder from '../PopupOrder/PopupOrder';
const CartMenu = ({ items, onClick }) => {
  const [popupOrder, setPopupOrder] = useState(false);
  return (
    <div className={styles.cartMenu}>
      {popupOrder && <PopupOrder />}

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
            <button className={styles.btn} onClick={() => setPopupOrder(true)}>
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
