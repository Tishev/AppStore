import React, { useState } from 'react';
import styles from '../Items/Items.module.css';
import { useDispatch } from 'react-redux';

import Item from '../Item/Item';
import { useSort } from '../../hooks/useSort.js';
import { items } from '../../data/items';
import Select from '../Select/Select';
import ButtonSort from '../UI/ButtonSort';
const Items = () => {
  const [item, setItem] = useState(items);
  const { isDescSort, setIsDescSort, sortedItems } = useSort(items || []);
  return (
    <>
      <div className={styles.sortBtn}>
        <Select />
        <ButtonSort isDescSort={isDescSort} setIsDescSort={setIsDescSort} />
      </div>

      <div className={styles.items}>
        {sortedItems && sortedItems.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default Items;
