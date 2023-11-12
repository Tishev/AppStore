import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ProductItem from '../components/Product/ProductItem';
import { useParams } from 'react-router';
import { items } from '../data/items';
import Footer from '../components/Footer/Footer';

const Product = () => {
    const { id } = useParams(); // `id` приходит как строка из URL
    const itemId = parseInt(id, 10); // Преобразуем `id` в число

    const selectedProduct = items.find((product) => product.id === itemId);

    return (
        <>
            {selectedProduct ? (
                <ProductItem id={itemId} item={selectedProduct} />
            ) : (
                <div>Товар не найден</div>
            )}
        </>
    );
};

export default Product;
