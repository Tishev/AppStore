import React, { useCallback, useEffect, useState } from 'react';
import styles from './ProfileImage.module.scss';
import profIcon from '../../../assets/img/profile.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addInfo } from '../../../redux/user/reducer';

const ProfileImage = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(addInfo(reader.result));
            };
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        const imgLocalStorage = JSON.parse(localStorage.getItem('img') || null);
        if (imgLocalStorage) {
            setImg(imgLocalStorage);
        }
    }, [setImg]);

    return (
        <div className={styles.content}>
            {img && <img src={img.img} alt="Ваша автарка)" className={styles.img} />}
            <label className={styles.label}>
                Выбрать фото
                <input type="file" onChange={handleImageChange} />
            </label>
        </div>
    );
};

export default ProfileImage;
