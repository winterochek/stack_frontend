import { instanceAuth } from './../../../components/utils/axios/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IWatchListAsset } from '../../../common/types/assets';
export const getWatchListElements = createAsyncThunk(
   'watchlist/get-elements',
   async (_, { rejectWithValue }) => {
      try {
         const token =  sessionStorage.getItem('token')
         const userAssets: IWatchListAsset[] = await (
            await instanceAuth.get('watchlist/get-elements',{
              headers: { 'X-Custom-Header': 'foobar', Authorization: `Bearer ${token}` }
            })
         ).data;
         return userAssets;
      } catch (error: any) {
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
         } else {
            return rejectWithValue(error.message);
         }
      }
   }
);
