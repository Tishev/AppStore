import React from 'react';
import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import ShoppingBasket from '../UI/ShoppingBasket';
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <p className={styles.p}>ITishevStore</p>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>Главная</li>
          <li className={styles.li}>Магазин</li>
        </ul>
        <ShoppingBasket />
      </nav>
    </div>
  );
};

export default Header;
