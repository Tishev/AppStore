import React from 'react';
import styles from './SignUp.module.css';
import InputOrder from '../../UI/InputOrder';
const SignUp = () => {
    return (
        <form onSubmit={null} className={styles.form}>
            <InputOrder />
            <InputOrder />
            <button>Войти</button>
        </form>
    );
};

export default SignUp;
