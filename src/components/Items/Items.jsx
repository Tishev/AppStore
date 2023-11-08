import React, { useState } from 'react';
import styles from '../Items/Items.module.css';
import { useDispatch } from 'react-redux';

import Item from '../Item/Item';
import { useSort } from '../../hooks/useSort.js';
import { items } from '../../data/items';
import Select from '../Select/Select';
import ButtonSort from '../UI/ButtonSort';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Items = () => {
    const [item, setItem] = useState(items);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { isDescSort, setIsDescSort, sortedItems } = useSort(item || []);

    const useHandleSearchAndSort = (searchTerm) => {
        // Фильтруем результаты поиска
        const searchResults = item.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        // Сортируем отфильтрованные результаты
        const sortedSearchResults = useSort(searchResults, isDescSort);

        return sortedSearchResults;
    };

    return (
        <div className="container">
            <div className={styles.sortBtn}>
                <SearchBar
                    products={item}
                    setProducts={setItem}
                    useHandleSearchAndSort={useHandleSearchAndSort}
                />

                <Select
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <ButtonSort isDescSort={isDescSort} setIsDescSort={setIsDescSort} />
            </div>

            <div className={styles.items}>
                {sortedItems &&
                    sortedItems
                        .filter(
                            (product) =>
                                selectedCategory === null || product.category === selectedCategory,
                        )
                        .map((item) => <Item key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default Items;
