import React, { useState } from 'react';
import styles from './Order.module.css';
import InputOrder from '../UI/InputOrder';
import { CloseOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { calcTotalPrice } from '../utils';
import { clearCart } from '../../redux/cart/reducer.js';

const Order = ({ closeHandle, setSuccess }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const [formData, setFormData] = useState({
        product: items,
        address: '',
        zip: '',
        houseNumber: '',
        buildingNumber: '',
        apartment: '',
        entrance: '',
        floor: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка данных:', formData);
        setFormData({
            product: [],
            address: '',
            zip: '',
            houseNumber: '',
            buildingNumber: '',
            apartment: '',
            entrance: '',
            floor: '',
        });
        setTimeout(() => {
            dispatch(clearCart());
        }, 2000);
        setSuccess(true);
    };
    function pluralizeGoods(count) {
        const endings = ['товар', 'товара', 'товаров'];

        if (count % 100 >= 11 && count % 100 <= 19) {
            return endings[2];
        }

        const lastDigit = count % 10;
        if (lastDigit === 1) {
            return endings[0];
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return endings[1];
        } else {
            return endings[2];
        }
    }

    const totalItems = items.length;
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <CloseOutlined className={styles.close} onClick={closeHandle} />
            <ul>
                {items.map((item, index) => (
                    <li style={{ display: 'flex', alignItems: 'center' }} key={item.id}>
                        <p style={{ width: '20px' }}>{index + 1}</p>
                        <img
                            style={{ width: '50px', height: '50px', margin: '0 10px' }}
                            src={item.img}
                        />{' '}
                        {item.name}: {item.price} руб.
                    </li>
                ))}
            </ul>
            <div style={{ borderTop: '1px solid gray', paddingTop: '10px', marginTop: '10px' }}>
                <p>
                    {totalItems} {pluralizeGoods(totalItems)} на общую стоимость:
                    {calcTotalPrice(items)} руб.
                </p>
            </div>
            <label>
                Адрес:*
                <InputOrder
                    typeInput={'text'}
                    disabledBo={false}
                    bo={true}
                    nameInput="address"
                    valueInput={formData.address}
                    handleInput={handleChange}
                    placeholderInput="Введите адрес (Область, город, улица)"
                />
            </label>

            <div className={styles.rowInputs}>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Индекс:*
                    <InputOrder
                        typeInput={'number'}
                        disabledBo={false}
                        bo={true}
                        nameInput="zip"
                        valueInput={formData.zip}
                        handleInput={handleChange}
                        placeholderInput={'Индекс'}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Номер дома:*
                    <InputOrder
                        typeInput={'number'}
                        disabledBo={false}
                        bo={true}
                        nameInput="houseNumber"
                        valueInput={formData.houseNumber}
                        handleInput={handleChange}
                        placeholderInput={'Дом'}
                    />
                </label>
            </div>
            <div className={styles.rowInputs}>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Номер корпуса:
                    <InputOrder
                        typeInput={'number'}
                        disabledBo={false}
                        bo={false}
                        nameInput="buildingNumber"
                        valueInput={formData.buildingNumber}
                        handleInput={handleChange}
                        placeholderInput={'Кор.'}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Номер квартиры:
                    <InputOrder
                        typeInput={'number'}
                        disabledBo={false}
                        bo={false}
                        nameInput="apartment"
                        valueInput={formData.apartment}
                        handleInput={handleChange}
                        placeholderInput={'Кв.'}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Номер подъезда:
                    <InputOrder
                        typeInput={'number'}
                        disabledBo={false}
                        bo={false}
                        nameInput="entrance"
                        valueInput={formData.entrance}
                        handleInput={handleChange}
                        placeholderInput={'Пд.'}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column' }}>
                    Номер этажа:
                    <InputOrder
                        typeInput={'number'}
                        disabledBo={false}
                        bo={false}
                        nameInput="floor"
                        valueInput={formData.floor}
                        handleInput={handleChange}
                        placeholderInput={'Этаж'}
                    />
                </label>
            </div>
            <div className={styles.bottom}>
                <p className={styles.textStar}>Значения со * - обязательны к заполнению</p>
                <button className={styles.btn} type="submit">
                    Создать заказ
                </button>
            </div>
        </form>
    );
};

export default Order;
