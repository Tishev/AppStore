import React, { useState } from 'react';
import styles from '../Items/Items.module.css';
import Item from '../Item/Item';
import { items } from '../../data/items';
const Items = () => {
  const [item, setItem] = useState(items);
  return (
    <div className={styles.items}>
      {item.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
