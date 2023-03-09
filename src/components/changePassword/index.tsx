import React from 'react';
import { useStyles } from './styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAppDispatch } from '../utils/hook';
import { updateUserPassword } from '../../store/thunks/auth';

export const ChangePasswordComponent = () => {
  const [newPassword, setNewPassword] = React.useState('');
  const [currentPassword, setCurrentPassword] = React.useState('');
  
  const dispatch = useAppDispatch()

  const handleSumbit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    try{
        const data = {
            oldPassword: currentPassword,
            newPassword: newPassword
        }
        dispatch(updateUserPassword(data))
        setChangeHandler(true)
    } catch(e){

    }
  }
  
  const [changeHandler, setChangeHandler] = React.useState(false);



  React.useEffect(() => {
    setChangeHandler(false);
  }, [newPassword, currentPassword]);

  //   const handleSubmit = (e: React.SyntheticEvent) => {
  //     e.preventDefault();
  //     try {
  //       const data = {
  //         firstName: name,
  //         username: username,
  //         email: email,
  //       };
  //       dispatch(updateUserInfo(data));
  //       dispatch(getPublicUser());
  //       setError(false);
  //       setSeverity('success');
  //       setOpen(true);
  //       setChangeHandler(true)
  //       setTimeout(() => {
  //         setOpen(false);
  //       }, 2000);
  //     } catch (e) {
  //       setError(true);
  //       setSeverity('error');
  //       setOpen(true);
  //       setTimeout(() => {
  //         setOpen(false);
  //       }, 2000);
  //     }
  //   };
  const classes = useStyles();
  return (
    <Grid
      component='form'
      noValidate
      autoComplete='off'
      className={classes.root}
      onSubmit={handleSumbit}
    >
      <Box className={classes.formWrapper}>
        <TextField
          value={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
          className={classes.inputField}
          type='password'
          label='Current password'
          variant='outlined'
        />
        <TextField
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          className={classes.inputField}
          type='password'
          label='New password'
          variant='outlined'
        />
        <Box className={classes.btnWrapper}>
          {!changeHandler ? (
            <LoadingButton
              className={classes.loadingBtn}
              type='submit'
              variant='contained'
            >
              Save changes
            </LoadingButton>
          ) : (
            <LoadingButton
              className={classes.finalBtn}
              disabled
              variant='contained'
            >
              Changes has done
            </LoadingButton>
          )}
        </Box>
      </Box>
    </Grid>
  );
};
