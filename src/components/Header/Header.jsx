import React, { useState } from 'react';
import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import ShoppingBasket from '../UI/ShoppingBasket';
import { paths } from '../../paths/paths';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { deleteUser } from '../../redux/user/reducer';
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const userLocal = JSON.parse(localStorage.getItem('user'));
    console.log(userLocal);
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
                            {userLocal && Object.keys(userLocal).length !== 0 ? (
                                <Link to={`${paths.profile}/${userLocal.emailValue}`}>
                                    <li className={styles.liDF}>
                                        <div className={styles.li} tabIndex={0}>
                                            {userLocal.emailValue}
                                        </div>
                                        <span style={{ margin: '0 8px' }}>
                                            {<Logout onClick={() => dispatch(deleteUser())} />}
                                        </span>
                                    </li>
                                </Link>
                            ) : (
                                <Link to={paths.login}>
                                    <li tabIndex={0} className={styles.li}>
                                        Log in / Sign up
                                    </li>
                                </Link>
                            )}
                        </ul>
                        <ShoppingBasket />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
