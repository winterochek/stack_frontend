import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { FC, useEffect, useState } from 'react';
import { getPublicUser, updateUserInfo } from '../../store/thunks/auth';
import { useAppDispatch, useAppSelector } from '../utils/hook';
import { useStyles } from './styles';
import { Snackbar, Alert, AlertColor } from '@mui/material';

export const PersonalDataComponent:FC = ():JSX.Element => {
  const  {user}  = useAppSelector(state => state.auth.user)
  
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      setName(user.firstName);
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor>('success');

  const classes = useStyles();

  const [changeHandler,setChangeHandler] = useState<boolean>(false)

  React.useEffect(()=>{
    setChangeHandler(false)
  },[name,username,email])
  const handleSubmit = (e: React.SyntheticEvent):void => {
    e.preventDefault();
    try {
      const data = {
        firstName: name,
        username: username,
        email: email,
      };
      dispatch(updateUserInfo(data));
      dispatch(getPublicUser());
      setError(false);
      setSeverity('success');
      setOpen(true);
      setChangeHandler(true)
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    } catch (e) {
      setError(true);
      setSeverity('error');
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
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
          onChange={e => setEmail(e.target.value)}
          className={classes.inputField}
          type='text'
          label='Email'
          variant='outlined'
        />
        <Box className={classes.btnWrapper}>
          {!changeHandler ? <LoadingButton
            className={classes.loadingBtn}
            type='submit'
            variant='contained'
          >
            Save changes
          </LoadingButton>
          : <LoadingButton
            className={classes.finalBtn}
            disabled
            variant='contained'
          >
            Changes has done
          </LoadingButton>}
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity={severity} sx={{ width: '100%' }}>
          {!error ? 'Success!' : 'Ooops'}
        </Alert>
      </Snackbar>
    </Grid>
  );
};
