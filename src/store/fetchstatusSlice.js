import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice=createSlice({
    name:'fetchStatus',
    initialState:{
        fetchdone:false,
        currentlyfetching:false,
    },
    reducers:{
        markfetchDone:(store,action)=>{
            return store.fetchdone=true;
        },
        markFetchingStarted: (store,action)=>{
            return store.currentlyfetching=true;
        },
        markfetchingFinished:(store,action)=>{
            return store.currentlyfetching=false;
        }
    }
})
export const fetchStatusAction=fetchStatusSlice.actions;
export default fetchStatusSlice;