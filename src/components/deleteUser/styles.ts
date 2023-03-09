import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { tokens } from '../../theme';

export const useStyles: any = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
    },
    formControl:{
      justifyContent: 'center',
    },

    formControlAlert:{
      justifyContent: 'center',
      '& .MuiFormControlLabel-label': {
        color: '#FFA7A7 !important'
      }
    },
    alertMessage: {
      textAlign: 'center',
      color: '#FFA7A7 !important',
    },
    button: {
      color: 'white !important',
      width: 'fit-content',
      '&:hover': {
        background: 'blue !important',
      },
      background: '#1900D5 !important',
      boxShadow: '0px 1px 7px #332A76 !important',
    },
    buttonDisabled:{
      color: 'white !important',
      width: 'fit-content',
      '&:hover': {
        background: 'blue !important',
      },
      background: '#3c59b8 !important',
      boxShadow: '0px 1px 7px #332A76 !important',
    },
  };
});
