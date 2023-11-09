import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { items } from '../../data/items';
const SearchBar = ({ products, setProducts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.trim() === '') {
            setSearchResults([]); // Если поисковый запрос пуст, очистите результаты
            setProducts(items);
            return;
        } else {
            const term = event.target.value;
            setSearchTerm(term);

            const results = products.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase()),
            );

            setProducts(results);

            setSearchResults(results);
        }
    };

    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={handleSearch}
            />

            <ul>
                {searchResults &&
                    searchResults.map((product) => <li key={product.id}>{product.name}</li>)}
            </ul>
        </div>
    );
};

export default SearchBar;
