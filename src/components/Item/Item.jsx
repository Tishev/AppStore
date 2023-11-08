import React, { useState } from 'react';
import styles from '../Item/Item.module.css';
import { Link } from 'react-router-dom';
import { paths } from '../../paths/paths.js';
import Button from '../UI/Button';
const Item = ({ item }) => {
    return (
        <div className={styles.item}>
            <Link to={paths.product + '/' + item.id}>
                <img className={styles.img} src={item.img} alt="photo" />
                <h2 className={styles.text}>{item.name}</h2>
                <p className={styles.text}>{item.price} руб.</p>
            </Link>
            <Button item={item} />
        </div>
    );
};

export default Item;
