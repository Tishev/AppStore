import React, { useState } from 'react';

import styles from './ProfileInfo.module.scss';
import ProfileImage from './ProfileImage/ProfileImage';
import InputProfile from './InputProfile/InputProfile';
const ProfileInfo = ({ user }) => {
    const [valueZIP, setValueZIP] = useState('');
    const [valueCity, setValueCity] = useState('');
    const handleChangeZIP = (e) => {
        const inputValue = e.target.value;
        // Проверяем, является ли ввод числом и не превышает ли он 6 цифр
        if (/^[0-9]{0,6}$/.test(inputValue)) {
            setValueZIP(inputValue);
        } else {
            alert('в этом поле могут содержаться только цифры и не более 6 символов ');
        }
    };
    const handleChangeCity = (e) => {
        const inputValue = e.target.value;
        if (/^[А-Яа-я]+$/.test(inputValue)) {
            setValueCity(inputValue);
        } else {
            alert('в этом поле может содержаться только буквы');
        }
    };
    return (
        <div className={styles.content}>
            <ProfileImage />
            <div className={styles.info}>
                <h2>Ваш email:</h2>
                <p>{user}</p>
                <h2>Ваш адрес:</h2>
                <form className={styles.form}>
                    <label className={styles.label}>
                        Ваш индекс:
                        <InputProfile type={'text'} value={valueZIP} onChange={handleChangeZIP} />
                    </label>
                    <label className={styles.label}>
                        Ваш город:
                        <InputProfile type={'text'} value={valueCity} onChange={handleChangeCity} />
                    </label>
                    <label className={styles.label}>
                        Ваша улица:
                        <InputProfile type={'text'} />
                    </label>
                    <div className={styles.miniLabel}>
                        <label className={styles.label}>
                            Ваш номер дома:
                            <InputProfile type={'text'} />
                        </label>
                        <label className={styles.label}>
                            Ваш номер строения
                            <InputProfile type={'text'} />
                        </label>
                        <label className={styles.label}>
                            Ваш номер квартиры:
                            <InputProfile type={'text'} />
                        </label>
                    </div>

                    <button>Сохранить</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileInfo;
