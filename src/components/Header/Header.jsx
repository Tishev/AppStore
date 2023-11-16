import React, { useState } from 'react';
import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import ShoppingBasket from '../UI/ShoppingBasket';
import { paths } from '../../paths/paths';
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
                                <li tabIndex={0} className={styles.li}>
                                    Home
                                </li>
                            </Link>
                            <Link to={paths.catalog}>
                                <li tabIndex={0} className={styles.li}>
                                    Catalog
                                </li>
                            </Link>
                            <Link to={paths.login}>
                                <li tabIndex={0} className={styles.li}>
                                    Log in / Sign up
                                </li>
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
