import React from 'react';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
const ProfilePage = ({ user }) => {
    console.log(user);
    return (
        <div className="container">
            <div style={{ height: '80vh', display: 'flex', justifyContent: 'space-around' }}>
                {user ? <ProfileInfo user={user} /> : <p>Вы не авторизованы</p>}
            </div>
        </div>
    );
};

export default ProfilePage;
