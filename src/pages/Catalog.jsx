import React from 'react';
import Header from '../components/Header/Header';
import Items from '../components/Items/Items';

const Catalog = () => {
    return (
        <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
            <Header />
            <Items />
        </div>
    );
};

export default Catalog;
