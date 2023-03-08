import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { getPublicUser, updateUserInfo } from '../../store/thunks/auth';
import { useAppDispatch, useAppSelector } from '../utils/hook';
import { useStyles } from './styles';

export const PersonalDataComponent = (props: any) => {
  const { user } = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      setName(user.firstName);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const classes = useStyles();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      firstName: name,
      username: username,
      email: email,
    };
    dispatch(updateUserInfo(data));
    dispatch(getPublicUser());
  };

  return (
    <Grid
      onSubmit={handleSubmit}
      component='form'
      noValidate
      autoComplete='off'
      className={classes.root}
    >
      <Box className={classes.formWrapper}>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          className={classes.inputField}
          type='text'
          label='Name'
          variant='outlined'
        />
        <TextField
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={classes.inputField}
          type='text'
          label='Username'
          variant='outlined'
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.inputField}
          type='text'
          label='Email'
          variant='outlined'
        />
        <Box className={classes.btnWrapper}>
          <LoadingButton
            className={classes.loadingBtn}
            type='submit'
            variant='contained'
          >
            Save changes
          </LoadingButton>
        </Box>
      </Box>
    </Grid>
  );
};
