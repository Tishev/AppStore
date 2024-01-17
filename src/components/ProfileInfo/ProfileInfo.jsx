import React from 'react';

import styles from './ProfileInfo.module.scss';
import ProfileImage from './ProfileImage/ProfileImage';
const ProfileInfo = ({ user }) => {
    return (
        <>
            <ProfileImage />
            <div>
                <h2>Ваше имя:</h2>
                <p>{user}</p>
                <h2>Ваш адрес:</h2>
            </div>
        </>
    );
};

export default ProfileInfo;
