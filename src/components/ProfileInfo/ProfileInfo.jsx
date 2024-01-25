import React, { useEffect, useState } from 'react';

import styles from './ProfileInfo.module.scss';
import ProfileImage from './ProfileImage/ProfileImage';
import InputProfile from './InputProfile/InputProfile';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../redux/user/reducer';
const ProfileInfo = ({ user }) => {
    const dispatch = useDispatch();
    const [valueZIP, setValueZIP] = useState('');
    const [valueCity, setValueCity] = useState('');
    const [valueStreet, setValueStreet] = useState('');
    const [valueHome, setValueHome] = useState('');
    const [valueBuild, setValueBuild] = useState('');
    const [valueFlat, setValueFlat] = useState('');
    const [address, setAddress] = useState({});
    useEffect(() => {
        const addressLS = JSON.parse(localStorage.getItem('address'));
        setAddress(addressLS);
    }, [addAddress]);

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
    const handleChangeStreet = (e) => {
        const inputValue = e.target.value;
        setValueStreet(inputValue);
    };
    const handleChangeHome = (e) => {
        const inputValue = e.target.value;
        if (/^[0-9]{0,6}$/.test(inputValue)) {
            setValueHome(inputValue);
        } else {
            alert('в этом поле могут содержаться только цифры');
        }
    };
    const handleChangeBuild = (e) => {
        const inputValue = e.target.value;
        if (/^[0-9-]{0,6}$/.test(inputValue)) {
            setValueBuild(inputValue);
        } else {
            alert('в этом поле могут содержаться только цифры');
        }
    };
    const handleChangeFlat = (e) => {
        const inputValue = e.target.value;
        if (/^[0-9]{0,6}$/.test(inputValue)) {
            setValueFlat(inputValue);
        } else {
            alert('в этом поле могут содержаться только цифры');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const address = {
            ZIP: valueZIP,
            city: valueCity,
            street: valueStreet,
            home: valueHome,
            build: valueBuild,
            flat: valueFlat,
        };
        dispatch(addAddress(address));
    };
    return (
        <div className={styles.content}>
            <ProfileImage />
            <div className={styles.info}>
                <h2>Ваш email:</h2>
                <p>{user}</p>
                <h2>Ваш адрес:</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Ваш индекс:
                        <InputProfile
                            placeholder={address.ZIP}
                            type={'text'}
                            value={valueZIP}
                            onChange={handleChangeZIP}
                        />
                    </label>
                    <label className={styles.label}>
                        Ваш город:
                        <InputProfile
                            placeholder={address.city}
                            type={'text'}
                            value={valueCity}
                            onChange={handleChangeCity}
                        />
                    </label>
                    <label className={styles.label}>
                        Ваша улица:
                        <InputProfile
                            placeholder={address.street}
                            type={'text'}
                            value={valueStreet}
                            onChange={handleChangeStreet}
                        />
                    </label>
                    <div className={styles.miniLabel}>
                        <label className={styles.label}>
                            Ваш номер дома:
                            <InputProfile
                                placeholder={address.home}
                                type={'text'}
                                value={valueHome}
                                onChange={handleChangeHome}
                            />
                        </label>
                        <label className={styles.label}>
                            Ваш номер строения
                            <InputProfile
                                placeholder={address.build}
                                type={'text'}
                                value={valueBuild}
                                onChange={handleChangeBuild}
                            />
                        </label>
                        <label className={styles.label}>
                            Ваш номер квартиры:
                            <InputProfile
                                placeholder={address.flat}
                                type={'text'}
                                value={valueFlat}
                                onChange={handleChangeFlat}
                            />
                        </label>
                    </div>

                    <button type="submit" className={styles.btn}>
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileInfo;
