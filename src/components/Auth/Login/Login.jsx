import React, { useState } from 'react';
import InputOrder from '../../UI/InputOrder';
import styles from './Login.module.css';
import ButtonAuth from '../../UI/ButtonAuth';
const Login = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleSubmitAuth = (e) => {
        e.preventDefault();
        //тут отправляем на сервер
        const userInfo = { emailValue, passwordValue };
        console.log('Send on server LOGIN', userInfo);
        setEmailValue('');
        setPasswordValue('');
    };
    const handleChangeEmail = (e) => {
        const value = e.target.value;
        setEmailValue(value);
    };
    const handleChangePassword = (e) => {
        const value = e.target.value;

        setPasswordValue(value);
    };
    return (
        <form onSubmit={handleSubmitAuth} className={styles.form}>
            <InputOrder
                typeInput={'email'}
                bo={true}
                placeholderInput={'Enter email'}
                valueInput={emailValue}
                handleInput={handleChangeEmail}
            />
            <InputOrder
                typeInput={'password'}
                bo={true}
                placeholderInput={'Enter password'}
                valueInput={passwordValue}
                handleInput={handleChangePassword}
            />
            <ButtonAuth typeBtn={'submit'} text={'Войти'} />
        </form>
    );
};

export default Login;
