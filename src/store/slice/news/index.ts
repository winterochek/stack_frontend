import { getNews } from './../../thunks/news/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  news: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export default newsSlice.reducer;
