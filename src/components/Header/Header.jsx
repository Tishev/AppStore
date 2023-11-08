import React from 'react';
import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import ShoppingBasket from '../UI/ShoppingBasket';
import { paths } from '../../paths/paths';
import SearchBar from '../SearchBar/SearchBar';
const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <Link to={paths.home}>
                        <p className={styles.p}>ITishevStore</p>
                    </Link>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <Link to={paths.home}>
                                <li className={styles.li}>Главная</li>
                            </Link>
                            <Link to={paths.catalog}>
                                <li className={styles.li}>Каталог</li>
                            </Link>
                        </ul>
                        <ShoppingBasket />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
