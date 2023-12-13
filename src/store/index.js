import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice"
import fetchStatusSlice from "./fetchstatusSlice"
import BagSlice from "./bagslice"
import UserSlice from "./userSlice"

const MyntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:BagSlice.reducer,
        user:UserSlice.reducer,
    }
})

export default MyntraStore