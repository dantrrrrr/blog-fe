import {createSlice} from "@reduxjs/toolkit"
const userSlice =createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false

    },
    reducers:{
        loginStart:(){

        },
    }
})
export default userSlice.reducer;