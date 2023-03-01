import { coingeckoapi } from './../../../components/utils/axios/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getFavoriteAssets = createAsyncThunk(
  'coins/markets',
  async (data: string, { rejectWithValue }) => {
    try {
      const assets = await coingeckoapi.get(
        `/coins/${data}/market_chart?vs_currency=usd&days=90`
      );
      return {
        name: data,
        data: assets.data,
      };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
