import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Corusel.module.css';
const Carousel = ({ salePhoto }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {salePhoto.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <img className={styles.img} src={item.urlPhoto} alt={`'Photo'${item.id}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
