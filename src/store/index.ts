import  watchListSlice  from './slice/watchlist/index';
import  assetSlice  from './slice/assets/index';
import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./slice/auth";


const store = configureStore({
    reducer:{
        auth: authSlice,
        assets: assetSlice,
        watchlist: watchListSlice,
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType <typeof store.getState>
export default store;