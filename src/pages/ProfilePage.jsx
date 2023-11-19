import React from 'react';
import profIcon from '../assets/img/profile.jpg';
const ProfilePage = ({ user }) => {
    console.log(user);
    return (
        <div className="container">
            <div style={{ height: '80vh', display: 'flex', justifyContent: 'space-around' }}>
                {user ? (
                    <>
                        <img src={profIcon} style={{ height: '20vh' }} />
                        <div>
                            <h2>Ваше имя:</h2>
                            <p>{user}</p>
                        </div>
                    </>
                ) : (
                    <p>Вы не авторизованы</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
