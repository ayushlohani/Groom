import { createSlice } from "@reduxjs/toolkit";
import { user } from "../data/users";

const UserSlice=createSlice({
    name:"user",
    initialState:user,
    reducers:{
        //both ways are correct to change in object without disturbing all element
        editName:(store,action)=>{
            store.Name=action.payload;
        },
        editPhoneno:(store,action)=>{
            return {...store,PhoneNo:action.payload};
        },
        editGmail:(store,action)=>{
            return {...store,Gmail:action.payload};
        },
        editPic:(store,action)=>{
            return {...store,ProfilePic:action.payload};
        },
    }
})
export const UserAction=UserSlice.actions;
export default UserSlice;