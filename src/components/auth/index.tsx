import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../utils/axios';
import { useAppDispatch } from '../utils/hook';
import { LoginPage } from './login';
import { RegisterPage } from './register';
import './style.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginScheme, RegisterScheme } from '../utils/yup';

export const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(location.pathname === '/login' ? LoginScheme : RegisterScheme),
    mode: 'onBlur',
  });
  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const user = await instance.post('auth/login', userData);
        dispatch(login(user.data));
        navigate('/');
      } catch (e) {
        return e;
      }
    } else if (data.password === data.confPass) {
      try {
        const userData = {
          email: data.email,
          password: data.password,
          firstName: data.name,
          username: data.username,
        };

        const newUser = await instance.post('auth/register', userData);
        dispatch(login(newUser.data));
        navigate('/');
      } catch (e) {
        console.log(e);

        return e;
      }
    } else {
      throw new Error(AppErrors.PasswordDontMatch);
    }
  };
  return (
    <div onSubmit={handleSubmit(handleSubmitForm)} className='root'>
      <form className='form'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};
