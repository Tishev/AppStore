import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <div className={styles.payments}>Платежные системы</div>
                    <div className={styles.contactUs}>Контакты</div>
                    <div className={styles.applications}>Приложения</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
