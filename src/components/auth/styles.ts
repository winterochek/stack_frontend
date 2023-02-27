import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  form: {
    flex:1,
  },
  inciting__text: {
    color: '#1665C1',
    cursor: 'pointer',
    '&:hover': {
      color: 'blue !important'
    },
  },
  auth__heading: {
    fontSize: '40px !important',
  },
  button: { marginTop: '10px !important', 
    marginBottom: '10px !important', 
    width: '40%',
    '&:hover': {
      background: 'blue !important'
    },
    background: '#1900D5 !important',
    boxShadow: '0px 1px 7px #332A76 !important',
  }
}));
