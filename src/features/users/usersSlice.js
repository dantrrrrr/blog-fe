import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "dantruong" },
    { id: 2, name: "Ai ngoc" },
    { id: 3, name: "Khah Nguyen" },
    { id: 4, name: "Chau Ngoc" },
]
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

//export 

export const selectAllUsers = (state) => state.users; 

export default usersSlice.reducer;