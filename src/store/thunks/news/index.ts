import { newsInstance } from './../../../components/utils/axios/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IArticle } from '../../../common/types/news';
export const getNews = createAsyncThunk(
  'get-news',
  async (_, { rejectWithValue }) => {
    try {
      const news:IArticle[] = await (await newsInstance.get('news/?lang=EN')).data.Data
      
        return news
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
