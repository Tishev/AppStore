import React, { useState } from 'react';

import styles from './SignUp.module.css';
import InputOrder from '../../UI/InputOrder';
import ButtonAuth from '../../UI/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../redux/user/reducer';

const SignUp = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const handleSubmitAuth = (e) => {
        e.preventDefault();
        //тут отправляем на сервер
        const userInfo = { emailValue, passwordValue };

        console.log('Send on server LOGIN', userInfo);
        dispatch(createUser(userInfo));
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

export default SignUp;
