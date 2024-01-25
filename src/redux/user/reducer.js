import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            img: null,
        },
    },
    reducers: {
        getUser: (state, action) => {
            state.user = { ...action.payload };
        },
        createUser: (state, action) => {
            state.user = { ...action.payload };
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        deleteUser: (state) => {
            state.user = {};
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        addInfo: (state, action) => {
            state.user = { ...state.user, img: action.payload };
            localStorage.setItem('img', JSON.stringify(state.user));
        },
        addAddress: (state, action) => {
            state.user.address = { ...state.user.address, ...action.payload };
            localStorage.setItem('address', JSON.stringify(state.user.address));
        },
    },
});

export const { addAddress, addInfo, createUser, deleteUser, getUser } = userSlice.actions;

export default userSlice.reducer;
