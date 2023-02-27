import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';
import { useStyles } from './../styles';

export const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors } = props;
  const classes = useStyles();

  return (
    <>
      <Typography
        variant='h2'
        marginBottom={1}
        textAlign='center'
        className={classes.auth__heading}
      >
        Registration
      </Typography>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Your credentials
      </Typography>
      <TextField
        error={!!errors.name}
        helperText={!!errors.name ? `${errors.name.message}` : ''}
        {...register('name')}
        fullWidth={true}
        margin='normal'
        label='Name'
        variant='outlined'
        placeholder='Type your name'
      />
      <TextField
        error={!!errors.username}
        helperText={!!errors.username ? `${errors.username.message}` : ''}
        {...register('username')}
        fullWidth={true}
        margin='normal'
        label='userName'
        variant='outlined'
        placeholder='Type your userName'
      />
      <TextField
        error={!!errors.email}
        helperText={!!errors.email ? `${errors.email.message}` : ''}
        {...register('email')}
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Type your email'
      />
      <TextField
        error={!!errors.password}
        helperText={!!errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Type your password'
      />
      <TextField
        error={!!errors.confPass}
        helperText={!!errors.confPass ? `${errors.confPass.message}` : ''}
        {...register('confPass')}
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Type your password again'
      />
      <Button
        type='submit'
        variant='contained'
        className={classes.button}
      >
        Sign up
      </Button>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Already registered?{' '}
        <span
          onClick={e => navigate('/login')}
          className={classes.inciting__text}
        >
          Sign in
        </span>
      </Typography>
    </>
  );
};
