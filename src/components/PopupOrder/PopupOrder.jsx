import React, { useState } from 'react';
import styles from '../PopupOrder/PopupOrder.module.css';
import Order from '../Order/Order';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { CloseOutlined } from '@mui/icons-material';

const PopupOrder = ({ setPopupOrder }) => {
    const [success, setSuccess] = useState(false);
    const closeHandle = () => {
        setPopupOrder(false);
    };
    return (
        <div className={styles.popupOut}>
            <div className={styles.popup}>
                {success ? (
                    <div className={styles.popupContent}>
                        <CloseOutlined
                            onClick={() => setPopupOrder(false)}
                            className={styles.close}
                        />
                        <h1 className={styles.h1}>Спасибо за покупку!</h1>
                        <p className={styles.p}>Ждём Вас снова!</p>
                        <CheckCircleTwoToneIcon fontSize="large" />
                    </div>
                ) : (
                    <Order setSuccess={setSuccess} closeHandle={closeHandle} />
                )}
            </div>
        </div>
    );
};

export default PopupOrder;
