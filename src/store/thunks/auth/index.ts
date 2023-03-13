import { ILoginData, IRegisterData } from './../../../common/types/auth/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, instanceAuth } from '../../../components/utils/axios';

export const loginUser = createAsyncThunk(
   'augh/login',
   async (data: ILoginData, { rejectWithValue }) => {
      try {
         const user = await instance.post('auth/login', data);
         if (
            user.data.status === 400 ||
            user.data.status === 401 ||
            user.data.status === 500
         )
            return;
         sessionStorage.setItem('token', user.data.token);
         sessionStorage.setItem('name', user.data.user.firstName);
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

export const getPublicUser = createAsyncThunk(
   'augh/get-public-user-info',
   async (_, { rejectWithValue }) => {
      try {
         const token = sessionStorage.getItem('token');
         const user = await instanceAuth.get('auth/get-public-user-info', {
            headers: {
               'X-Custom-Header': 'foobar',
               Authorization: `Bearer ${token}`,
            },
         });
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

export const updateUserInfo = createAsyncThunk(
   'users/update',
   async (data: any, { rejectWithValue }) => {
      try {
         const token = sessionStorage.getItem('token');
         const user = await instanceAuth.patch('users/', data, {
            headers: {
               'X-Custom-Header': 'foobar',
               Authorization: `Bearer ${token}`,
            },
         });
         sessionStorage.setItem('name', user.data.firstName);
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

export const updateUserPassword = createAsyncThunk(
   'users/change-password',
   async (
      data: {
         oldPassword: string;
         newPassword: string;
      },
      { rejectWithValue }
   ) => {
      try {
         const token = sessionStorage.getItem('token');
         return await instanceAuth.patch('users/change-password', data, {
            headers: {
               'X-Custom-Header': 'foobar',
               Authorization: `Bearer ${token}`,
            },
         });
      } catch (error: any) {
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
         } else {
            return rejectWithValue(error.message);
         }
      }
   }
);

export const deleteUser = createAsyncThunk(
   'users/delete-user',
   async (_, { rejectWithValue }) => {
      try {
         const token = sessionStorage.getItem('token');
         return await instanceAuth.delete('users', {
            headers: {
               'X-Custom-Header': 'foobar',
               Authorization: `Bearer ${token}`,
            },
         });
      } catch (error: any) {
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
         } else {
            return rejectWithValue(error.message);
         }
      }
   }
);
