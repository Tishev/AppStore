import React, { useState } from 'react';
import styles from '../Select/Select.module.css';
const Select = ({ setSelectedCategory }) => {
    const [visible, setVisible] = useState(false);
    const changeVisible = () => {
        setVisible(!visible);
    };
    return (
        <div className={styles.select}>
            <div onClick={changeVisible} className={styles.selectCategory}>
                Выберите категорию
            </div>
            <div onClick={changeVisible} className={styles.span}>
                {!visible ? 'open' : 'close'}
            </div>
            {visible && (
                <div className={styles.divPosition}>
                    <div onClick={() => setSelectedCategory('')} className={styles.selectCategory}>
                        All
                    </div>
                    <div
                        onClick={() => setSelectedCategory('phone')}
                        className={styles.selectCategory}
                    >
                        Phone
                    </div>
                    <div
                        onClick={() => setSelectedCategory('laptop')}
                        className={styles.selectCategory}
                    >
                        Laptop
                    </div>
                </div>
            )}
        </div>
    );
};

export default Select;
