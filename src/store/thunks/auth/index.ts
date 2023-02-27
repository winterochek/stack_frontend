import { ILoginData, IRegisterData } from './../../../common/types/auth/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../components/utils/axios';

export const loginUser = createAsyncThunk(
  'augh/login',
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/login', data);
      sessionStorage.setItem('token', user.data.token);
      sessionStorage.setItem('user', user.data.user.firstName);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: IRegisterData, { rejectWithValue }) => {
    try {
      const user = await instance.post('auth/register', data);
      sessionStorage.setItem('token', user.data.token);
      sessionStorage.setItem('user', user.data.user.firstName);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
