import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name: 'user',
    initialState:{
        userValue:{}
    },
    reducers:{
        login: (state,action)=>{
            localStorage.setItem('user',JSON.stringify(action.payload));
            state.userValue=action.payload;
        },
        logout: (state)=>{
            localStorage.removeItem('user');
            state.userValue={};
        }
    }
});

export const {login, logout}=userSlice.actions;
export default userSlice.reducer;