import { Box } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { instance } from '../utils/axios';
import { useAppDispatch, useAppSelector } from '../utils/hook';
import { LoginPage } from './login';
import { RegisterPage } from './register';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginScheme, RegisterScheme } from '../utils/yup';
import { useStyles } from './styles';
import { loginUser, registerUser } from '../../store/thunks/auth';

export const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === '/login' ? LoginScheme : RegisterScheme
    ),
  });

  const loading = useAppSelector(state=>state.auth.isLoading)
  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        await dispatch(loginUser(data));
        navigate('/');
      } catch (e) {
        return e;
      }
    } else if (data.password === data.confPass) {
      try {
        const userData = {
          firstName: data.name,
          username: data.username,
          email: data.email,
          password: data.password
        }
        await dispatch(registerUser(userData));
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
    <div onSubmit={handleSubmit(handleSubmitForm)} className={classes.root}>
      <form className={classes.form}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px 1px #202020'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              loading={loading}
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              loading={loading}
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
