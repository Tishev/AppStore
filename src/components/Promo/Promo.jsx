import React from 'react';
import styles from '../Promo/Promo.module.css';
import Carousel from '../UI/Corusel';
const Promo = () => {
    return (
        <div className="container">
            <section className={styles.section}>
                <Carousel />
                <div className={styles.div}></div>
            </section>
        </div>
    );
};

export default Promo;
