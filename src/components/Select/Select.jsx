import React, { useState } from 'react';
import styles from '../Select/Select.module.css';
const Select = ({ selectedCategory, setSelectedCategory }) => {
    const [visible, setVisible] = useState(false);
    const changeVisible = () => {
        setVisible(!visible);
    };
    const selectCategory = (category) => {
        setSelectedCategory(category);
        setVisible(false);
    };
    return (
        <div className={styles.select}>
            <div onClick={changeVisible} className={styles.selectCategory}>
                Выберите категорию
            </div>
            <div onClick={changeVisible} className={styles.span}>
                {/* {!visible ? 'open' : 'close'} */}
                {selectedCategory ? selectedCategory.toUpperCase() : ''}
            </div>
            {visible && (
                <div className={styles.divPosition}>
                    <div onClick={() => selectCategory(null)} className={styles.selectCategory}>
                        All
                    </div>
                    <div onClick={() => selectCategory('phone')} className={styles.selectCategory}>
                        Phone
                    </div>
                    <div onClick={() => selectCategory('laptop')} className={styles.selectCategory}>
                        Laptop
                    </div>
                </div>
            )}
        </div>
    );
};

export default Select;
