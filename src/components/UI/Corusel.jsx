import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Corusel.module.css';
const Carousel = () => {
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
                <div className={styles.item}>
                    <img
                        className={styles.img}
                        src="https://yandex-images.clstorage.net/eN5iH2200/53739e74/WyhJEngCtx59V-Pe8D5Hnt77k-UO0cCEbpZrL-llJ7qyShKwCqbXZ-x-CjwL7D45l-bELvnb-tQNkg-tK0WPKd5MPCZswwb6jffz3sDu1i5OiyNl_lGBxB6z7lnPgiCYxD10px2BEAOoikuYHpz-bEMXpUrvvY7k2gIdaT_gWt67anshikAG-d6HsplRfkY9Daskhw2BF-Y4xhg5H3KyGveeFTaM4wJz2xhcap-OTJ1zAVTKLe7Zp0qR3tlPwJpNKgn7gxljR2uuJzAqYI43_N3rJkXNIebWiZapSu7wwLp3fKeVb9LT8OupzBoc715dAOBU62wO-DSrsSwY7fJaLnhJukB5ILUpHfUQGvFsJE2diAZUvxLE12n0GHsusLA7dl0lJA5hocLqmC0KDPx8D5KARCs8LroXW8Ff6_8AayzYO8lh6gM1O7zG4kpxnQUMfct1JcwBttVrpaubLwKCqbevxQasgyASWWms-W-M_lzA46VJ7g7ptIqyjBjv0iqs2lq70-mxRmgPdDP7Qz50_c_rB4e8sudX6YW6eq9SoOi3b0SHnpLTgAr7D_i-7z1fEROWKx1NKoXpow1YzdIJnji6i_MKUXSI_OUhi4CsNj-9-2UnbiKWhmhGiet-MWC4Nv73N_-RoJApO5wLXrxPbLPiFOrdfuqWmkE9mr3AC0x7a-mCewKlCGzGg-iAD0ZezzsnJR4h9Td51poabCJie7adxiT9kcOjW6luKt3eTw8RMScrzm17ltpyjToswmhOWCgJEAhSBop8F3L4w13FTCzJJDU-EOSm6FeIyJ1AQQoF7gXF3uHSI1uLDWt8P7-Ok9AXWd7tGGY4IRyKfWHZDZkJ2iK5A_ZbH5SAimANVN2PmSSnjEP1ZNpGO1lvczOLpy0EFz9ygEB5u-0pn-4_LODjNWst7-n1eOHuGhySOkwrWotjKxHUio1GghpRTORPHNjXtH6yZua75ZnK_uICY"
                        alt="Photo 1"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        className={styles.img}
                        src="https://avatars.mds.yandex.net/i?id=9567bc82b291a96545a512fb2d533a39e9867a2d-9181181-images-thumbs&n=13"
                        alt="Photo 2"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        className={styles.img}
                        src="https://yandex-images.clstorage.net/eN5iH2200/53739e74/WyhJEngCtx59V-Pe8D5Hnt77k-UO0cCEbpZrL-n1Z59yX7fgj8ai18m7H2z7iUtsMvMRLrk7T9FI18rYa0WfSa5sbJZ8wwb6jffz3sDu1i5OiyNl_lGBxB6z7lnPgiCYxD10px2BEAOoikuYHpz-bEMXpUrvvY7k2gIdaT_gWt67anshikAG-d6HsplRfkY9Daskhw2BF-Y4xhg5H3KyGveeFTaM4wJz2xhcap-OTJ1zAVTKLe7Zp0qR3tlPwJpNKgn7gxljR2uuJzAqYI43_N3rJkXNIebWiZapSu7wwLp3fKeVb9LT8OupzBoc715dAOBU62wO-DSrsSwY7fJaLnhJukB5ILUpHfUQGvFsJE2diAZUvxLE12n0GHsusLA7dl0lJA5hocLqmC0KDPx8D5KARCs8LroXW8Ff6_8AayzYO8lh6gM1O7zG4kpxnQUMfct1JcwBttVrpaubLwKCqbevxQasgyASWWms-W-M_lzA46VJ7g7ptIqyjBjv0iqs2lq70-mxRmgPdDP7Qz50_c_rB4e8sudX6YW6eq9SoOi3b0SHnpLTgAr7D_i-7z1fEROWKx1NKoXpow1YzdIJnji6i_MKUXSI_OUhi4CsNj-9-2UnbiKWhmhGiet-MWC4Nv73N_-RoJApO5wLXrxPbLPiFOrdfuqWmkE9mr3AC0x7a-mCewKlCGzGg-iAD0ZezzsnJR4h9Td51poabCJie7adxiT9kcOjW6luKt3eTw8RMScrzm17ltpyjToswmhOWCgJEAhSBop8F3L4w13FTCzJJDU-EOSm6FeIyJ1AQQoF7gXF3uHSI1uLDWt8P7-Ok9AXWd7tGGY4IRyKfWHZDZkJ2iK5A_ZbH5SAimANVN2PmSSnjEP1ZNpGO1lvczOLpy0EFz9ygEB5u-0pn-4_LODjNWst7-n1eOHuGhySOkwrWotjKxHUio1GghpRTORPHNjXtH6yZua75ZnK_uICY"
                        alt="Photo 3"
                    />
                </div>
                {/* ... Добавьте другие изображения как необходимо ... */}
            </Slider>
        </div>
    );
};

export default Carousel;
