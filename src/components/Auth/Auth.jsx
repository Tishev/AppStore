import React, { useState } from 'react';
import styles from './Auth.module.css';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
const Auth = () => {
    const [changeAuth, setChangeAuth] = useState(true);
    return (
        <div className="container">
            <div className={styles.form}>
                <h2 className={styles.title}>{changeAuth ? 'Login' : 'Sign Up'}</h2>
                {changeAuth ? <Login /> : <SignUp />}
                <p className={styles.text} onClick={() => setChangeAuth(!changeAuth)}>
                    {changeAuth ? 'Нет аккаунта? Зарегистрируйтесь ' : 'Есть аккаунт? Войдите'}
                </p>
            </div>
        </div>
    );
};

export default Auth;
