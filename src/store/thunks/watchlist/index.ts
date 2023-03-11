import { instanceAuth } from './../../../components/utils/axios/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWatchListAsset } from '../../../common/types/assets';
export const getWatchListElements = createAsyncThunk(
  'watchlist/get-elements',
  async (_, { rejectWithValue }) => {
    try {
      const userAssets:IWatchListAsset[] = await (await instanceAuth.get('watchlist/get-elements')).data
      return userAssets
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
