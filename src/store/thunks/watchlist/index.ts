import { instanceAuth } from './../../../components/utils/axios/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getWatchListElements = createAsyncThunk(
  'watchlist/get-elements',
  async (_, { rejectWithValue }) => {
    try {
      const userAssets = await instanceAuth.get('watchlist/get-elements');
      return userAssets.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);