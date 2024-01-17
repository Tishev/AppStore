import React, { useState } from 'react';
import profIcon from '../../../assets/img/profile.jpg';

const ProfileImage = () => {
    const [img, setImg] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="w-15 h-20">
            {img && <img src={img} alt="Uploaded" className="w-10 h-15 " />}

            <input type="file" onChange={handleImageChange} />
        </div>
    );
};

export default ProfileImage;
