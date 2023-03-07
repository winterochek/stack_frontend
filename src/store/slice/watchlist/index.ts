import { createSlice } from '@reduxjs/toolkit';
import { getWatchListElements } from './../../thunks/watchlist/index';

const initialState:any = {
    watchlist: []
}

export const watchListSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchListElements.fulfilled, (state, action) => {
            state.watchlist = action.payload
        })
    }
})

export default watchListSlice.reducer