import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter((card) => card.id !== action.payload);
        },
        clearCart: (state, action) => {
            state.itemsInCart = [];
        },
    },
});

export const { setItemInCart, deleteItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
