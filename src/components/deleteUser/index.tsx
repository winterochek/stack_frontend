import React, { FC } from 'react';
import { useStyles } from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../utils/hook';
import { deleteUser } from '../../store/thunks/auth';

export const DeleteUserComponent:FC = (): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDelete = (e:React.SyntheticEvent):void => {
    dispatch(deleteUser());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

    navigate('/login');
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant='h4'>Changes will be irreversible</Typography>
      </Box>
      <Box>
        <FormGroup>
          <FormControlLabel
            className={checked ? classes.formControlAlert : classes.formControl}
            control={
              <Checkbox
                checked={checked}
                onChange={(e:React.SyntheticEvent) => setChecked(prev => !prev)}
                sx={{ color: '#FFA7A7', '&.Mui-checked': { color: '#FFA7A7' } }}
              />
            }
            label='After that, your account could not be restored. Are you sure you want
          to delete it?'
          />
        </FormGroup>
      </Box>
      <Box>
        <LoadingButton
          onClick={handleDelete}
          disabled={!checked}
          className={!checked ? classes.buttonDisabled : classes.button}
        >
          Delete
        </LoadingButton>
      </Box>
    </Box>
  );
};
