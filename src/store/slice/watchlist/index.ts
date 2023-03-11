import { createSlice } from '@reduxjs/toolkit';
import { IWatchListState } from '../../../common/types/assets';
import { getWatchListElements } from './../../thunks/watchlist/index';

const initialState:IWatchListState = {
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