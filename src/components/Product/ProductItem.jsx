import React, { useState } from 'react';
import styles from '../Product/ProductItem.module.css';

import Button from '../UI/Button';
const ProductItem = ({ item }) => {
    return (
        <div className="container">
            <div className={styles.item}>
                <div className={styles.left}>
                    <img className={styles.img} src={item.img} alt="photo" />
                    <div className={styles.descr}>
                        <h2>Описание товара:</h2>
                        <p>{item.descr}</p>

                        <h2>Характеристики товара:</h2>
                        <ul>
                            <li className={styles.li}>
                                <b>Дисплей:</b> {item.chara.display}
                            </li>
                            <li className={styles.li}>
                                <b>Процессор:</b> {item.chara.processor}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.text}>{item.name}</h2>
                    <p className={styles.text}>Цена: {item.price} руб.</p>
                    <Button item={item} />
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
