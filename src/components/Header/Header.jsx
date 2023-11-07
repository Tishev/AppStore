import React from 'react';
import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import ShoppingBasket from '../UI/ShoppingBasket';
import { paths } from '../../paths/paths';
const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={paths.home}>
                <p className={styles.p}>ITishevStore</p>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <Link to={paths.home}>
                        <li className={styles.li}>Главная</li>
                    </Link>
                    <Link to={paths.catalog}>
                        <li className={styles.li}>Магазин</li>
                    </Link>
                </ul>
                <ShoppingBasket />
            </nav>
        </div>
    );
};

export default Header;
