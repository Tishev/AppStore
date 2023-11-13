import React from 'react';
import styles from './Footer.module.css';
import mir from '../../assets/img/mir.svg';
import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import appStore from '../../assets/img/appstore.svg';
import googlePlay from '../../assets/img/googleplay.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.payments}>
                        <h2 className={styles.h2}>Payments:</h2>
                        <ul className={styles.ulPay}>
                            <li className={styles.li}>
                                <img className={styles.img} src={mir} alt="mir" />
                            </li>
                            <li className={styles.li}>
                                <img className={styles.img} src={mastercard} alt="mastercard" />
                            </li>
                            <li className={styles.li}>
                                <img className={styles.img} src={visa} alt="visa" />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactUs}>
                        <h2 className={styles.h2}>Contacts:</h2>
                        <ul>
                            <li className={styles.liContacts}>Email: example@mail.com</li>
                            <li className={styles.liContacts}>WhatsApp: 8(900)900-34-34</li>
                            <li className={styles.liContacts}>Telegram: example</li>
                        </ul>
                    </div>
                    <div className={styles.applications}>
                        <h2 className={styles.h2}>Apps:</h2>
                        <ul className={styles.ul}>
                            <li className={styles.liStore}>
                                <img className={styles.imgStore} src={appStore} alt="appStore" />
                            </li>
                            <li className={styles.liStore}>
                                <img
                                    className={styles.imgStore}
                                    src={googlePlay}
                                    alt="googlePlay"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
