import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

export const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const {
    navigate,
    setEmail,
    setPassword,
    setRepeatPassword,
    setFirstName,
    setUsername,
  } = props;

  return (
    <>
      <Typography
        variant='h2'
        marginBottom={1}
        textAlign='center'
        className='auth__heading'
      >
        Registration
      </Typography>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Your credentials
      </Typography>
      <TextField
        onChange={e => setFirstName(e.target.value)}
        fullWidth={true}
        margin='normal'
        label='Name'
        variant='outlined'
        placeholder='Type your name'
      />
      <TextField
        onChange={e => setUsername(e.target.value)}
        fullWidth={true}
        margin='normal'
        label='userName'
        variant='outlined'
        placeholder='Type your userName'
      />
      <TextField
        onChange={e => setEmail(e.target.value)}
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Type your email'
      />
      <TextField
        onChange={e => setPassword(e.target.value)}
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Type your password'
      />
      <TextField
        onChange={e => setRepeatPassword(e.target.value)}
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Type your password again'
      />
      <Button
        type='submit'
        sx={{ marginTop: 2, marginBottom: 2, width: '30%' }}
        variant='contained'
      >
        Sign up
      </Button>
      <Typography variant='body1' textAlign='center' className='auth__subtitle'>
        Already registered?{' '}
        <span onClick={e => navigate('/login')} className='inciting__text'>
          Sign in
        </span>
      </Typography>
    </>
  );
};
