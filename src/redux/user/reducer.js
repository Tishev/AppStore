import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
    },
    reducers: {
        createUser: (state, action) => {
            state.user = { ...action.payload };
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        deleteUser: (state, action) => {
            state.user = {};
            localStorage.setItem('user', JSON.stringify(state.user));
        },
    },
});

export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
