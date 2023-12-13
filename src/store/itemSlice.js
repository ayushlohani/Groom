import {createSlice} from "@reduxjs/toolkit"
import { items } from "../data/items";

const itemsSlice=createSlice({
    name:'items',
    initialState:items,
    reducers:{
        addItems:(store,action)=>{

        },

    }
})
export const itemAction=itemsSlice.actions;
export default itemsSlice;