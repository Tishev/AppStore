import React, { useEffect, useState } from 'react';
import styles from './ProfileImage.module.scss';
import profIcon from '../../../assets/img/profile.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addInfo } from '../../../redux/user/reducer';

const ProfileImage = () => {
    const dispatch = useDispatch();
    const userImg = useSelector((state) => state.user.user.img);
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
        const imgLocalStorage = JSON.parse(localStorage.getItem('img'));
        if (imgLocalStorage) {
            setImg(imgLocalStorage);
        }
    }, [setImg, img]);
    return (
        <div className={styles.content}>
            {img && <img src={img} alt="Uploaded" className={styles.img} />}

            <input type="file" onChange={handleImageChange} />
        </div>
    );
};

export default ProfileImage;
