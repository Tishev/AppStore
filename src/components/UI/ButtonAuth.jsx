import React from 'react';
import styles from './ButtonAuth.module.css';
const ButtonAuth = ({ text, typeBtn }) => {
    return (
        <button type={typeBtn} className={styles.btn}>
            {text}
        </button>
    );
};

export default ButtonAuth;
