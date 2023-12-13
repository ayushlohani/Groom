import {createSlice} from "@reduxjs/toolkit"
import { items } from "../data/items";

const BagSlice=createSlice({
    name:'bag',
    initialState:[],
    reducers:{
        addToBag:(store,action)=>{
            store.push(action.payload);
        },
        removefromBag:(store,action)=>{
            return store.filter(itemid=>itemid!==action.payload)
        }
    }
})
export const BagAction=BagSlice.actions;
export default BagSlice;